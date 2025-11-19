'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/sections/ContactForm';
import Card from '@/components/ui/Card';
import { CardContent, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations();
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSuccess = () => {
    setFormSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-soft-black mb-4">
            {t('contact.header.title')}
          </h1>
          <p className="text-xl text-medium-gray">
            {t('contact.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Success Message */}
      {formSuccess && (
        <section className="bg-green-50 border border-green-200 text-green-800 py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg font-medium">{t('common.sent')}</p>
            <p className="text-sm mt-1">I'll get back to you within 24 hours!</p>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-soft-black mb-4">
                Send Me a Message
              </h2>
              <p className="text-medium-gray">
                Fill out the form below and I'll get back to you soon
              </p>
            </div>
            <ContactForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black">
              {t('contact.alternative.title')}
            </h2>
            <p className="text-xl text-medium-gray mt-4">
              {t('contact.alternative.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-pale-blue bg-opacity-20 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-pale-blue" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-4">
                  Email
                </CardTitle>
                <p className="text-medium-gray mb-4">
                  Send me an email directly
                </p>
                <a
                  href="mailto:hana@example.com"
                  className="text-pale-blue hover:text-blue-600 font-medium"
                >
                  hana@example.com
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-4">
                  WhatsApp
                </CardTitle>
                <p className="text-medium-gray mb-4">
                  Message me on WhatsApp
                </p>
                <a
                  href="https://wa.me/972XXXXXXXXX"
                  className="text-green-600 hover:text-green-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +972-XX-XXX-XXXX
                </a>
              </CardContent>
            </Card>

            {/* Schedule Call */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-sage-green bg-opacity-20 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-sage-green" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-4">
                  Schedule a Call
                </CardTitle>
                <p className="text-medium-gray mb-6">
                  Book a free 20-minute consultation
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    window.location.href = '#contact-form';
                  }}
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-medium-gray">
              {t('contact.alternative.direct')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
