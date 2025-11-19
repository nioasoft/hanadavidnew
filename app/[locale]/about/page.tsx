'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Lightbulb, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-12 md:py-20 container mx-auto max-w-screen-2xl">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center">
           {/* Text Side */}
           <div className="flex flex-col gap-6 text-center lg:text-start lg:w-1/2">
             <div className="flex flex-col gap-4">
               <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                 {t('about.header.title')}
               </h1>
               <h2 className="text-foreground/80 text-base font-normal leading-relaxed md:text-lg">
                 {t('about.header.subtitle')}
               </h2>
             </div>
           </div>

           {/* Image Side */}
           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
               <Image
                 src="/hana.webp"
                 alt="Hana David"
                 fill
                 className="object-cover"
                 priority
               />
             </div>
           </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] mb-8 text-foreground">
            {t('about.story.title')}
          </h2>
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed text-start">
             {t.raw('about.story.paragraphs').map((p: string, i: number) => (
                <p key={i}>{p}</p>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-16 container mx-auto max-w-screen-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-l-4 border-primary p-8 md:p-12 rounded-r-xl relative">
            <div className="text-6xl text-primary/20 absolute top-4 left-4 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic leading-relaxed relative z-10 text-center md:text-start">
              {t('about.testimonial.quote')}
            </blockquote>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <div className="h-1 bg-primary w-12 rounded-full"></div>
              <cite className="text-lg font-bold text-foreground not-italic">
                {t('about.testimonial.author')}
                <span className="font-normal text-muted-foreground block md:inline md:mx-2 text-sm md:text-lg">
                  {t('about.testimonial.role')}
                </span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section (Philosophy & Qualifications) */}
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-12 md:py-16 container mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Teaching Philosophy Card */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 p-4 rounded-full mb-6 text-secondary-foreground">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              {t('about.philosophy.title')}
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              {t('about.philosophy.content')}
            </p>
          </div>

          {/* Qualifications Card */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 p-4 rounded-full mb-6 text-secondary-foreground">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              {t('about.qualifications.title')}
            </h3>
            <ul className="space-y-3 text-base text-foreground/80">
              {t.raw('about.qualifications.items').map((item: string, index: number) => (
                <li key={index} className="flex items-center justify-center gap-2">
                   <CheckCircle className="w-4 h-4 text-primary" />
                   <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Aliyah Section (Bonus) */}
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-12 md:py-16 bg-secondary/10">
         <div className="container mx-auto max-w-3xl text-center">
             <h2 className="text-2xl font-bold mb-6 text-foreground">
                 {t('about.aliyah.title')}
             </h2>
             <div className="space-y-4 text-foreground/90 leading-relaxed">
                 {t.raw('about.aliyah.paragraphs').map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                 ))}
             </div>
         </div>
      </section>
    </>
  );
}