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
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ${className}`}
      aria-label={`Switch to ${otherLocaleLabel}`}
    >
      {otherLocaleLabel}
    </Link>
  );
}