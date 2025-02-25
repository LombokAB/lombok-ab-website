import { ContactFormState } from '@/components/form/types';

interface ValidateContactFormResult {
  isValid: boolean;
  errors: Partial<
    Record<keyof Omit<ContactFormState, 'submissionStatus' | 'errorMessage'>, string>
  >;
}

export const validateContactForm = (formData: FormData): ValidateContactFormResult => {
  const errors: Partial<
    Record<keyof Omit<ContactFormState, 'submissionStatus' | 'errorMessage'>, string>
  > = {};
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  const message = formData.get('message') as string;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!firstName?.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!message?.trim()) {
    errors.message = 'Please enter a message';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
