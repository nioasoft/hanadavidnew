'use client';

import { useTranslations } from 'next-intl';
import Timeline from '@/components/sections/Timeline';
import Card from '@/components/ui/Card';
import { CardContent, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ProcessPage() {
  const t = useTranslations();
  const locale = useLocale();

  // Get the steps from translations
  const steps = t.raw('process.steps');

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-soft-black mb-4">
            {t('process.header.title')}
          </h1>
          <p className="text-xl text-medium-gray">
            {t('process.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Timeline steps={steps} />
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('process.expectations.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Intro text */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-lg text-medium-gray leading-relaxed">
                    {t('process.expectations.intro')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Expectations list */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {t.raw('process.expectations.items').map((item: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-12 bg-primary/10 rounded-xl p-8">
            <p className="text-xl text-soft-black dark:text-white font-medium text-center leading-relaxed">
              {t('process.expectations.closing')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
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
        </div>
      </section>
    </>
  );
}
