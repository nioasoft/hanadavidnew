'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import IconCard from '@/components/ui/IconCard';
import { Briefcase, Plane, GraduationCap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  // Get target audiences
  const audiences = [
    {
      key: 'audiences.0',
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      key: 'audiences.1',
      icon: <Plane className="w-8 h-8" />
    },
    {
      key: 'audiences.2',
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      key: 'audiences.3',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaPrimary={t('home.hero.cta_primary')}
        onPrimaryClick={() => {
          window.location.href = `/${locale}/contact`;
        }}
      />

      {/* Features (Method) Section */}
      <Features />

      {/* Target Audiences - keeping as grid but adding consistent container */}
      <section className="py-16 px-4 sm:px-10 md:px-20 lg:px-40 container mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-soft-black dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">
              {t('home.audiences.title')}
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <IconCard
              key={index}
              icon={audience.icon}
              title={t(`home.audiences.${audience.key}.title` as any)}
              description={t(`home.audiences.${audience.key}.description` as any)}
              className="border border-gray-200 dark:border-gray-700 shadow-none hover:shadow-md bg-white dark:bg-background-dark"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section id="cta-section" className="px-4 sm:px-10 md:px-20 lg:px-40 pb-20 container mx-auto max-w-screen-2xl">
        <div className="bg-primary/10 dark:bg-primary/20 rounded-lg px-4 sm:px-8 py-10 text-center flex flex-col gap-4 items-center">
          <h2 className="text-primary dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">
            {t('home.cta.title')}
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-base font-normal leading-normal max-w-xl">
            {t('home.cta.description')}
          </p>
          <Link href={`/${locale}/contact`}>
            <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white dark:text-gray-100 text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">{t('home.cta.button')}</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}