'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="mx-auto flex h-24 md:h-40 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link href={`/${locale}`} className="flex items-center gap-3 md:gap-6 text-primary hover:opacity-90 transition-opacity max-w-[70%] sm:max-w-none">
           <GraduationCap className="h-8 w-8 md:h-12 md:w-12 shrink-0" />
           <h2 className="text-lg md:text-2xl font-bold leading-tight tracking-tight text-foreground truncate">{t('header.subtitle')}</h2>
           
           {/* Additional Image Logo */}
           <div className="relative h-20 w-20 md:h-36 md:w-36 ms-2 md:ms-4 shrink-0">
             <Image 
               src="/logo.png" 
               alt="Hana David Logo" 
               fill
               className="object-contain"
               priority
             />
           </div>
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
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-1 fade-in duration-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-secondary text-secondary-foreground font-bold'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-secondary-foreground'
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