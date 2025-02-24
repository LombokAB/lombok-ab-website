import React, { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  className?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, type = 'text', className, placeholder = label, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          aria-label={label}
          aria-required="true"
          className={cn(
            'w-full rounded-md bg-transparent border border-white px-5 text-white shadow-md focus:outline-none h-12 placeholder-opacity-70 placeholder-white',
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

FormField.displayName = 'FormField';

export default FormField;
