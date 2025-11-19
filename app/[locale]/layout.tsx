import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Heebo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Hana David | English Teacher - Personalized 1-on-1 Lessons",
  description: "CELTA-certified English teacher offering personalized virtual lessons for business professionals, travelers, and test preparation.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/content/${locale}.json`)).default;
  const isRTL = locale === 'he';
  const fontClass = locale === 'he' ? heebo.variable : inter.variable;

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`${fontClass} antialiased bg-cream min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
