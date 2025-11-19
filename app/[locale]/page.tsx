'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Hero from '@/components/sections/Hero';
import IconCard from '@/components/ui/IconCard';
import Button from '@/components/ui/Button';
import { User, Video, Globe, Briefcase, Plane, GraduationCap, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  // Get value propositions
  const valueProps = [
    {
      key: 'props.0',
      icon: <User className="w-8 h-8" />
    },
    {
      key: 'props.1',
      icon: <Video className="w-8 h-8" />
    },
    {
      key: 'props.2',
      icon: <Globe className="w-8 h-8" />
    }
  ];

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
        ctaSecondary={t('home.hero.cta_secondary')}
        onPrimaryClick={() => {
          // Scroll to CTA section or navigate to contact
          document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondaryClick={() => {
          // Navigate to process page
          window.location.href = `/${locale}/process`;
        }}
        className="mb-16"
      />

      {/* Value Propositions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('home.valueProps.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <IconCard
                key={index}
                icon={prop.icon}
                title={
                  t(`home.valueProps.${prop.key}.title` as any)
                }
                description={
                  t(`home.valueProps.${prop.key}.description` as any)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('home.audiences.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <IconCard
                key={index}
                icon={audience.icon}
                title={
                  t(`home.audiences.${audience.key}.title` as any)
                }
                description={
                  t(`home.audiences.${audience.key}.description` as any)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-br from-pale-blue to-sage-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-soft-black mb-8 leading-relaxed">
            {t('home.cta.description')}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button
              variant="primary"
              size="lg"
              className="font-semibold"
            >
              {t('home.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
