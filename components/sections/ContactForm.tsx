'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  preferredLanguage: z.enum(['en', 'he']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredLanguage: 'en',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          message: t('common.sent'),
        });
        reset();
        onSuccess?.();
      } else {
        setSubmitMessage({
          type: 'error',
          message: result.error || t('common.error'),
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: t('common.error'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('contact.form.name')}
          {...register('name')}
          error={errors.name?.message}
          placeholder={t('contact.form.name')}
        />

        <Input
          label={t('contact.form.email')}
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder={t('contact.form.email')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('contact.form.phone')}
          type="tel"
          {...register('phone')}
          placeholder={t('contact.form.phone')}
        />

        <div>
          <label className="block text-sm font-medium text-soft-black mb-2">
            {t('contact.form.preferredLanguage')}
          </label>
          <select
            {...register('preferredLanguage')}
            className="w-full px-4 py-3 border rounded-lg border-border-medium focus:border-pale-blue focus:ring-pale-blue focus:outline-none focus:ring-2 focus:ring-offset-1 bg-white text-soft-black"
          >
            <option value="en">{t('contact.form.lang_en')}</option>
            <option value="he">{t('contact.form.lang_he')}</option>
          </select>
        </div>
      </div>

      <TextArea
        label={t('contact.form.message')}
        {...register('message')}
        error={errors.message?.message}
        placeholder={t('contact.form.message')}
        rows={6}
      />

      {submitMessage && (
        <div
          className={`p-4 rounded-md ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitMessage.message}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('common.sending') : t('contact.form.submit')}
      </Button>
    </form>
  );
}
