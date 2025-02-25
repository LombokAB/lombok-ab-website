'use client';
import { submitContactForm } from '@/components/form/actions';
import { ContactFormState } from '@/components/form/types';
import FormField from '@/components/form/FormField';
import TextAreaField from '@/components/form/TextAreaField';
import { Button } from '@/components/ui/button';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState: ContactFormState = {
  message: '',
  firstName: '',
  lastName: '',
  email: '',
  submissionStatus: 'idle',
  errorMessage: null,
};

export const ContactForm = () => {
  const [state, action, isLoading] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    initialState,
  );

  useEffect(() => {
    if (state.submissionStatus === 'success') {
      toast.success('Message sent successfully!');
    } else if (state.submissionStatus === 'error' && state.errorMessage) {
      toast.error(state.errorMessage || 'Something went wrong!');
    }
  }, [state.submissionStatus, state.errorMessage]);

  return (
    <form
      className="flex flex-col justify-center align-middle w-full max-w-96 gap-6 md:gap-8 px-4 md:px-0 relative"
      action={action}
      method="POST"
    >
      <FormField
        label="First Name"
        id="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
        required
      />
      <FormField
        label="Last Name"
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        required
      />
      <FormField
        label="Your Email"
        id="email"
        type="email"
        placeholder="Your Email"
        name="email"
        required
      />
      <TextAreaField
        label="Your Message"
        id="message"
        placeholder="Your Message..."
        name="message"
        required
      />
      <Button variant="default" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
};
