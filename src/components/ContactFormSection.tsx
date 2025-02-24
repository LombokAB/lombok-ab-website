import React from 'react';
import { ContactForm } from './form/ContactForm';

interface ContactFormSectionProps {
  header: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ header }) => {
  return (
    <section
      className="bg-primary-grey max-h-fit flex flex-col justify-center align-middle py-10"
      id="contact"
    >
      <h2 className="font-bold text-center text-white pb-6">{header}</h2>
      <div className="mx-auto bg-contact-form-bg bg-cover bg-center w-full flex justify-center align-middle py-10">
        <ContactForm />
      </div>
    </section>
  );
};
