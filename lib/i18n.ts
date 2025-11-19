import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'he'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale = defaultLocale }) => {
  const messages = (await import(`@/content/${locale}.json`)).default;

  return {
    messages,
    locale
  };
});
