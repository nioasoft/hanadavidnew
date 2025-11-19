'use client';

import { usePathname, Link } from '@/lib/navigation';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const otherLocale = currentLocale === 'en' ? 'he' : 'en';
  const otherLocaleLabel = currentLocale === 'en' ? 'HE' : 'EN';

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground h-9 px-4 py-2 ${className}`}
      aria-label={`Switch to ${otherLocaleLabel}`}
    >
      {otherLocaleLabel}
    </Link>
  );
}