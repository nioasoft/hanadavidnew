'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import { CardContent, CardTitle } from '@/components/ui/Card';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-soft-black mb-4">
            {t('about.header.title')}
          </h1>
          <p className="text-xl text-medium-gray">
            {t('about.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('about.story.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {/* First paragraph */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-medium-gray leading-relaxed">
                {t('about.story.paragraphs.0')}
              </p>
            </div>

            {/* Second paragraph */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-medium-gray leading-relaxed">
                {t('about.story.paragraphs.1')}
              </p>
            </div>

            {/* Aliyah section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-semibold text-soft-black mb-4">
                {t('about.aliyah.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-medium-gray leading-relaxed">
                  {t('about.aliyah.paragraphs.0')}
                </p>
                <p className="text-lg text-medium-gray leading-relaxed">
                  {t('about.aliyah.paragraphs.1')}
                </p>
              </div>
            </div>

            {/* Dedication */}
            <div className="bg-pale-blue bg-opacity-20 rounded-xl p-8 mt-8">
              <p className="text-xl text-soft-black font-medium text-center leading-relaxed">
                {t('about.dedication.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('about.qualifications.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.raw('about.qualifications.items').map((item: string, index: number) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-pale-blue mb-2">
                    ✓
                  </div>
                  <CardTitle>{item}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sage-green to-pale-blue bg-opacity-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('about.philosophy.title')}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-xl text-medium-gray leading-relaxed text-center">
              {t('about.philosophy.content')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
