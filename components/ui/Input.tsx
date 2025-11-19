import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef(function Input(
  { label, error, className = '', ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-soft-black mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 border rounded-lg transition-colors duration-200
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
