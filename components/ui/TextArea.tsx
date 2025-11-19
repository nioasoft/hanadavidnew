import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  rows?: number;
}

export const TextArea = forwardRef(function TextArea(
  { label, error, rows = 4, className = '', ...props }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background
          placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 resize-y
          ${error ? 'border-red-500' : 'border-input'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});