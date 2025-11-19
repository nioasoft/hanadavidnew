import Link from 'next/link';
import Image from 'next/image';
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
    <footer className={`border-t border-border bg-muted/30 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 text-center md:text-start">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors">
              <div className="relative h-12 w-12">
                <Image 
                  src="/logo.png" 
                  alt="Hana David Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span>Hana David</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Language
            </h3>
            <div className="mb-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
