'use server';
import { ContactFormState } from '@/components/form/types';
import { validateContactForm } from '@/components/form/validation';

const FORM_CONFIG = {
  API_ENDPOINT: (formId: string) => `https://usebasin.com/f/${formId}`,
  AUTH_HEADER: (apiKey: string) => `Bearer ${apiKey}`,
  ERROR_MESSAGES: {
    CONFIG_ERROR: 'Configuration error. Please check server logs.',
    GENERAL_ERROR: 'Error submitting form. Please try again later.',
  },
};

const createErrorState = (
  previousState: ContactFormState,
  errorMessage: string,
): ContactFormState => {
  return {
    ...previousState,
    submissionStatus: 'error',
    errorMessage,
  };
};

const createSuccessState = (
  formFields: Omit<ContactFormState, 'submissionStatus' | 'errorMessage'>,
): ContactFormState => {
  return { ...formFields, submissionStatus: 'success', errorMessage: null };
};

const extractFormData = (formData: FormData) => {
  return {
    firstName: String(formData.get('firstName') || ''),
    lastName: String(formData.get('lastName') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
  };
};

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const apiKey = process.env.USEBASIN_API_KEY;
  const formId = process.env.USEBASIN_FORM_ID;

  if (!apiKey || !formId) {
    console.error(
      'USEBASIN_API_KEY or USEBASIN_FORM_ID environment variables are not set.',
    );
    return createErrorState(previousState, FORM_CONFIG.ERROR_MESSAGES.CONFIG_ERROR);
  }

  const formFields = extractFormData(formData);

  const validation = validateContactForm(formData);
  if (!validation.isValid) {
    return {
      ...previousState,
      ...formFields,
      submissionStatus: 'error',
      errorMessage: Object.values(validation.errors).join('. '),
    };
  }

  try {
    // Submit the form
    const response = await fetch(FORM_CONFIG.API_ENDPOINT(formId), {
      method: 'POST',
      headers: {
        Authorization: FORM_CONFIG.AUTH_HEADER(apiKey),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formFields),
    });

    // Process the response
    if (response.ok) {
      console.info('Form submitted successfully!');
      return createSuccessState(formFields);
    } else {
      const errorDetails = await response.json().catch(() => ({}));
      console.error(
        'Usebasin API Error:',
        response.status,
        response.statusText,
        errorDetails,
      );
      return createErrorState(
        previousState,
        `Submission failed. Usebasin API returned error: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error('Error submitting to Usebasin:', error);
    return createErrorState(previousState, FORM_CONFIG.ERROR_MESSAGES.GENERAL_ERROR);
  }
}
