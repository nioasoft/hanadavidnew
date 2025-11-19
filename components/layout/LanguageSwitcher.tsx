'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Extract the path without the locale
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/');
    // Remove the first segment (locale)
    if (segments.length > 2) {
      segments.splice(0, 2); // Remove '' and locale (e.g., '/en')
      return segments.join('/');
    }
    return '';
  };

  const pathWithoutLocale = getPathWithoutLocale();
  const otherLocale = currentLocale === 'en' ? 'he' : 'en';
  const otherLocaleLabel = currentLocale === 'en' ? 'HE' : 'EN';

  // Build the target URL
  const targetHref = pathWithoutLocale
    ? `/${otherLocale}/${pathWithoutLocale}`
    : `/${otherLocale}`;

  return (
    <Link
      href={targetHref}
      className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border transition-colors duration-200 ${
        currentLocale === 'en'
          ? 'border-pale-blue text-pale-blue hover:bg-pale-blue hover:text-white'
          : 'border-sage-green text-sage-green hover:bg-sage-green hover:text-white'
      } ${className}`}
      aria-label={`Switch to ${otherLocaleLabel}`}
    >
      {otherLocaleLabel}
    </Link>
  );
}
