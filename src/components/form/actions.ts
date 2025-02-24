'use server';

export interface ContactFormState {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  submissionStatus: 'idle' | 'loading' | 'success' | 'error' | null;
  errorMessage: string | null;
}

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Server Action - Form Data:', { firstName, lastName, email, message });

  const isSuccess = false;

  if (isSuccess) {
    return {
      ...previousState,
      message: message ? String(message) : '',
      firstName: firstName ? String(firstName) : '',
      lastName: lastName ? String(lastName) : '',
      email: email ? String(email) : '',
      submissionStatus: 'success',
      errorMessage: null,
    } satisfies ContactFormState;
  } else
    return {
      ...previousState,
      message: message ? String(message) : '',
      firstName: firstName ? String(firstName) : '',
      lastName: lastName ? String(lastName) : '',
      email: email ? String(email) : '',
      submissionStatus: 'error',
      errorMessage: 'Something went wrong. Please try again.',
    } satisfies ContactFormState;
}
