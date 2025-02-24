import React from 'react';
import Form from 'next/form';
import { Button } from '@/components/ui/button';
import FormField from '@/components/FormField';
import TextAreaField from '@/components/TextAreaField';

interface ContactFormSectionProps {
  header: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ header }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form Data as Object:', formDataObject);
  };
  return (
    <section
      className="bg-primary-grey max-h-fit flex flex-col justify-center align-middle py-10"
      id="contact"
    >
      <h2 className="font-bold text-center text-white pb-6">{header}</h2>
      <div className="mx-auto bg-contact-form-bg bg-cover bg-center w-full flex justify-center align-middle py-10">
        <Form
          className="flex flex-col justify-center align-middle w-full max-w-96 gap-6 md:gap-8 px-4 md:px-0 relative"
          action={handleSubmit}
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
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  );
};
