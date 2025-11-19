'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import { CardContent, CardTitle } from '@/components/ui/Card';
import { Briefcase, Plane, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations();

  // Service icons
  const serviceIcons = [
    <Briefcase className="w-8 h-8 text-pale-blue" />,
    <Plane className="w-8 h-8 text-pale-blue" />,
    <GraduationCap className="w-8 h-8 text-pale-blue" />,
    <BookOpen className="w-8 h-8 text-pale-blue" />,
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-soft-black mb-4">
            {t('services.header.title')}
          </h1>
          <p className="text-xl text-medium-gray">
            {t('services.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.raw('services.services').map((service: any, index: number) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      {serviceIcons[index]}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-soft-black mb-2">
                        {t('services.whatYoullLearn') || 'What you\'ll learn:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.whatYoullLearn.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-pale-blue mt-1">•</span>
                            <span className="text-medium-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-warm-beige rounded-lg p-4">
                      <p className="text-sm font-medium text-soft-black mb-1">
                        {t('services.idealFor') || 'Ideal for:'}
                      </p>
                      <p className="text-sm text-medium-gray">{service.idealFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes My Approach Different */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('services.approach.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('services.approach.items').map((item: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-pale-blue to-sage-green bg-opacity-10 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-pale-blue" />
                </div>
                <p className="text-medium-gray leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
