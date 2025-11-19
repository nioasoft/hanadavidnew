'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, GraduationCap } from 'lucide-react';
import Button from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const locale = pathname.split('/')[1];

  const isActive = (path: string) => {
    const currentPath = pathname.replace(`/${locale}/`, '/').replace(`/${locale}`, '/');
    return currentPath === path;
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/process', label: t('nav.process') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
           <GraduationCap className="h-8 w-8" />
           <h2 className="text-lg font-bold leading-tight tracking-tight text-foreground">English Teacher</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link href={`/${locale}/contact`}>
                  <Button size="sm">
                    {t('home.hero.cta_primary')}
                  </Button>
              </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <div className="pt-4">
               <Link href={`/${locale}/contact`} onClick={() => setIsMenuOpen(false)} className="w-full">
                  <Button className="w-full">
                    {t('home.hero.cta_primary')}
                  </Button>
              </Link>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}