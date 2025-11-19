'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import IconCard from '@/components/ui/IconCard';
import Button from '@/components/ui/Button';
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

      {/* Target Audiences */}
      <section className="py-12 px-4 sm:px-10 md:px-20 lg:px-40 container mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-foreground text-[28px] font-bold leading-tight tracking-[-0.015em]">
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
              className="bg-card"
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section id="cta-section" className="px-4 sm:px-10 md:px-20 lg:px-40 pb-16 container mx-auto max-w-screen-2xl">
        <div className="bg-secondary/30 border border-secondary rounded-2xl px-6 sm:px-10 py-10 text-center flex flex-col gap-6 items-center">
          <h2 className="text-foreground text-[28px] font-bold leading-tight tracking-[-0.015em]">
            {t('home.cta.title')}
          </h2>
          <p className="text-foreground text-lg font-medium leading-relaxed max-w-2xl">
            {t('home.cta.description')}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" variant="primary">
              {t('home.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
