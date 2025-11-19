'use client';

import { User, Video, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations();

  const features = [
    {
      key: 'props.0',
      icon: <User className="w-8 h-8 text-primary dark:text-accent" />
    },
    {
      key: 'props.1',
      icon: <Video className="w-8 h-8 text-primary dark:text-accent" />
    },
    {
      key: 'props.2',
      icon: <Globe className="w-8 h-8 text-primary dark:text-accent" />
    }
  ];

  return (
    <section className="flex flex-col gap-10 px-4 sm:px-10 md:px-20 lg:px-40 py-10 container mx-auto max-w-screen-2xl" id="method">
      <div className="flex flex-col gap-4">
        <h1 className="text-soft-black dark:text-white tracking-tight text-[32px] font-bold leading-tight sm:text-4xl max-w-[720px]">
          {t('home.valueProps.title')}
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-md transition-shadow"
          >
            {feature.icon}
            <div className="flex flex-col gap-1">
              <h2 className="text-soft-black dark:text-white text-lg font-bold leading-tight">
                {t(`home.valueProps.${feature.key}.title` as any)}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed">
                {t(`home.valueProps.${feature.key}.description` as any)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
