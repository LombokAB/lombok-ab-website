import React, { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  className?: string;
}

const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, id, className, placeholder = label, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          aria-label={label}
          aria-required="true"
          className={cn(
            'peer w-full resize-none rounded-md bg-transparent border border-white px-5 py-4 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary h-44 placeholder-opacity-70 placeholder-white',
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
