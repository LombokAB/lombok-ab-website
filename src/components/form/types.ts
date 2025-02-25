export interface ContactFormState {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  submissionStatus: 'idle' | 'loading' | 'success' | 'error' | null;
  errorMessage: string | null;
}
