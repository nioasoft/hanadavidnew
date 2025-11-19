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
          className="text-start"
        />

        <Input
          label={t('contact.form.email')}
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder={t('contact.form.email')}
          className="text-start"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('contact.form.phone')}
          type="tel"
          {...register('phone')}
          placeholder={t('contact.form.phone')}
          className="text-start"
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2 text-start">
            {t('contact.form.preferredLanguage')}
          </label>
          <div className="relative">
            <select
              {...register('preferredLanguage')}
              className="
                flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50 text-start appearance-none
              "
            >
              <option value="en">{t('contact.form.lang_en')}</option>
              <option value="he">{t('contact.form.lang_he')}</option>
            </select>
            {/* Arrow icon for select */}
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-2 text-muted-foreground">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <TextArea
        label={t('contact.form.message')}
        {...register('message')}
        error={errors.message?.message}
        placeholder={t('contact.form.message')}
        rows={6}
        className="text-start"
      />

      {submitMessage && (
        <div
          className={`p-4 rounded-md text-sm font-medium ${
            submitMessage.type === 'success'
              ? 'bg-green-50 text-green-900 dark:bg-green-900/30 dark:text-green-100 border border-green-200 dark:border-green-800'
              : 'bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-100 border border-red-200 dark:border-red-800'
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
