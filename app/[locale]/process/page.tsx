'use client';

import { useTranslations } from 'next-intl';
import Timeline from '@/components/sections/Timeline';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { CheckCircle, HelpCircle } from 'lucide-react';

export default function ProcessPage() {
  const t = useTranslations();
  const locale = useLocale();

  // Get the steps from translations
  const steps = t.raw('process.steps');

  return (
    <>
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-[-0.033em]">
            {t('process.header.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('process.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 bg-muted/30">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-2xl font-bold text-foreground mb-4">
                 {t('process.intro.title')}
             </h2>
             <p className="text-lg text-foreground/80 leading-relaxed">
                 {t('process.intro.description')}
             </p>
         </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm">
            <Timeline steps={steps} />
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('process.expectations.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Intro text */}
            <div className="lg:col-span-1">
              <div className="h-full bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-xl font-medium text-foreground/90 leading-relaxed">
                    {t('process.expectations.intro')}
                  </p>
              </div>
            </div>

            {/* Expectations list */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {t.raw('process.expectations.items').map((item: string, index: number) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                       <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
            <p className="text-xl text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
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

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    {t('process.faq.title')}
                </h2>
            </div>
            
            <div className="grid gap-6">
                {t.raw('process.faq.items').map((item: any, index: number) => (
                    <div key={index} className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                            {item.question}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
