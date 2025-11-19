import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const t = useTranslations();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/process', label: t('nav.process') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className={`bg-white border-t border-border-light ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-soft-black hover:text-pale-blue transition-colors">
              Hana David
            </Link>
            <p className="mt-2 text-medium-gray text-sm">
              CELTA-Certified English Teacher
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-soft-black mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-medium-gray hover:text-soft-black text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h3 className="text-sm font-semibold text-soft-black mb-4">
              Language
            </h3>
            <div className="mb-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border-light">
          <p className="text-center text-sm text-medium-gray">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
