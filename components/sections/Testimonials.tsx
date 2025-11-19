'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations();

  const testimonials = [0, 1]; // Indices for the items in json

  return (
    <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-12 container mx-auto max-w-screen-2xl" id="testimonials">
      <div className="flex flex-col gap-4 text-center items-center mb-8">
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-[-0.015em]">
          {t('home.testimonials.title')}
        </h2>
        <p className="text-foreground/80 text-base font-normal leading-normal max-w-[720px]">
          {t('home.testimonials.subtitle')}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {testimonials.map((index) => (
          <div key={index} className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <p className="text-foreground italic text-lg leading-relaxed mb-6">
              "{t(`home.testimonials.items.${index}.quote` as any)}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                 {t(`home.testimonials.items.${index}.author` as any).charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {t(`home.testimonials.items.${index}.author` as any)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t(`home.testimonials.items.${index}.role` as any)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
