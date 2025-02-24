'use client';
import Form from 'next/form';
import { ContactFormState, submitContactForm } from '@/components/form/actions';
import FormField from '@/components/form/FormField';
import TextAreaField from '@/components/form/TextAreaField';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';

export const ContactForm = () => {
  const [state, action, isLoading] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    {
      message: '',
      firstName: '',
      lastName: '',
      email: '',
      submissionStatus: 'idle',
      errorMessage: null,
    },
  );

  return (
    <Form
      className="flex flex-col justify-center align-middle w-full max-w-96 gap-6 md:gap-8 px-4 md:px-0 relative"
      action={action}
    >
      <FormField
        label="First Name"
        id="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      <FormField
        label="Last Name"
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
      <FormField
        label="Your Email"
        id="email"
        type="email"
        placeholder="Your Email"
        name="email"
      />
      <TextAreaField
        label="Your Message"
        id="message"
        placeholder="Your Message..."
        name="message"
        defaultValue={typeof state.message === 'string' ? state.message : ''}
      />
      <Button variant="default" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </Button>
      {state.submissionStatus === 'success' && (
        <p className="mt-4 text-green-500">Message sent successfully!</p>
      )}

      {state.submissionStatus === 'error' && state.errorMessage && (
        <p className="mt-4 text-red-500">{state.errorMessage}</p>
      )}
    </Form>
  );
};
