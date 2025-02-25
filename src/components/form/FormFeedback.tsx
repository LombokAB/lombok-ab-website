import { ContactFormState } from '@/components/form/types';

interface FormFeedbackProps {
  state: ContactFormState;
}

export const FormFeedback = ({ state }: FormFeedbackProps) => {
  if (state.submissionStatus === 'success') {
    return <p className="mt-4 text-green-500">Message sent successfully!</p>;
  }

  if (state.submissionStatus === 'error' && state.errorMessage) {
    return <p className="mt-4 text-red-500">{state.errorMessage}</p>;
  }

  return null;
};
