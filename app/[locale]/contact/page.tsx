'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ContactForm from '@/components/sections/ContactForm';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations();
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSuccess = () => {
    setFormSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="px-4 md:px-10 flex flex-1 justify-center py-10 md:py-16 container mx-auto max-w-screen-2xl">
        <div className="flex flex-col max-w-5xl flex-1 gap-12 md:gap-16">
          
          {/* Page Heading */}
          <div className="flex flex-wrap justify-center text-center gap-3 p-4">
            <div className="flex w-full flex-col items-center gap-4">
              <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {t('contact.header.title')}
              </h1>
              <p className="text-muted-foreground text-lg font-normal leading-normal max-w-2xl">
                {t('contact.header.subtitle')}
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-10">
            
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              
              {/* Contact Information Section */}
              <div className="flex flex-col gap-4">
                <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2">
                  {t('contact.infoTitle')}
                </h2>
                <div className="flex flex-col border border-border rounded-xl bg-card overflow-hidden">
                  <div className="flex items-center gap-4 px-4 min-h-16 border-b border-border py-4">
                    <div className="text-muted-foreground flex items-center justify-center rounded-lg bg-muted shrink-0 size-10">
                      <Phone className="w-5 h-5" />
                    </div>
                    {/* Force LTR for phone number to prevent scrambling in RTL mode */}
                    <a href="tel:+972501234567" dir="ltr" className="text-card-foreground text-base font-medium leading-normal flex-1 truncate hover:text-primary transition-colors text-start">
                      +972 50-123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-4 px-4 min-h-16 py-4">
                    <div className="text-muted-foreground flex items-center justify-center rounded-lg bg-muted shrink-0 size-10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:hana@example.com" className="text-card-foreground text-base font-medium leading-normal flex-1 truncate hover:text-primary transition-colors">
                      hana@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Section (Map Placeholder) */}
              <div className="flex flex-col gap-4">
                <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2">
                  {t('contact.whereToFind')}
                </h2>
                <div className="flex flex-col gap-4 p-4 border border-border rounded-xl bg-card">
                  <div className="aspect-video w-full rounded-lg overflow-hidden relative bg-muted flex items-center justify-center">
                     <div className="text-muted-foreground font-medium">
                        {t('contact.mapPlaceholder')}
                     </div>
                  </div>
                  <p className="text-muted-foreground text-base font-normal leading-normal">
                    {t('contact.location')}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3 flex flex-col gap-6 p-6 md:p-8 border border-border rounded-xl bg-card">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
                {t('contact.sendMessage')}
              </h2>
              <ContactForm onSuccess={handleFormSuccess} />
            </div>

          </div>

          {/* Consultation Booking Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 p-8 rounded-xl bg-secondary/50 border border-border">
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h2 className="text-foreground text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                {t('contact.alternative.title')}
              </h2>
              <p className="text-muted-foreground text-base font-normal leading-normal max-w-2xl">
                {t('contact.alternative.description')}
              </p>
            </div>
            {/* Replaced hardcoded button with UI Button component */}
            <Link href="/contact">
                <Button size="lg" variant="primary">
                    {t('home.hero.cta_primary')}
                </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}