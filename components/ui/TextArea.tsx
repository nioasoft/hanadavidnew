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
        <label className="block text-sm font-medium text-soft-black mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 border rounded-lg transition-colors duration-200 resize-vertical
          ${error ? 'border-red-500' : 'border-border-medium'}
          ${error ? 'focus:border-red-500 focus:ring-red-500' : 'focus:border-pale-blue focus:ring-pale-blue'}
          focus:outline-none focus:ring-2 focus:ring-offset-1
          bg-white text-soft-black
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
