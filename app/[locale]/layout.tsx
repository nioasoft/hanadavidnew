import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Heebo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "../globals.css";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
});

// SEO Configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hanadavid.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Hana David | English Teacher - Private 1-on-1 Lessons",
    template: "%s | Hana David"
  },
  description: "CELTA-certified English teacher in Tel Aviv offering personalized virtual lessons. Specializing in Business English, conversation, and exam preparation.",
  keywords: ["English teacher", "Tel Aviv", "Private lessons", "Business English", "CELTA", "מורה לאנגלית", "שיעורים פרטיים", "אנגלית עסקית"],
  authors: [{ name: "Hana David" }],
  creator: "Hana David",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    url: baseUrl,
    title: "Hana David | English Teacher",
    description: "Master English with personalized 1-on-1 virtual lessons.",
    siteName: "Hana David English Teacher",
    images: [
      {
        url: "/hana.webp", // Ensure this image is optimized for social sharing
        width: 1200,
        height: 630,
        alt: "Hana David - English Teacher",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': `${baseUrl}/en`,
      'he': `${baseUrl}/he`,
    },
  },
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

  // JSON-LD Schema for Local Business / Person
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Hana David English Teacher",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/hana.webp`,
    "description": "CELTA-certified English teacher offering personalized 1-on-1 virtual lessons.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tel Aviv",
      "addressCountry": "IL"
    },
    "offers": {
      "@type": "Offer",
      "category": "English Lessons"
    },
    "sameAs": [
      // Add social media links here later if available
    ]
  };

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontClass} antialiased bg-background min-h-screen flex flex-col`}>
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