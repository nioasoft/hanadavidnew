import { ReactNode } from 'react';
import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  image?: ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  onPrimaryClick,
  onSecondaryClick,
  image,
  className = ''
}: HeroProps) {
  return (
    <section className={`bg-gradient-to-br from-cream to-white py-20 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-soft-black leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg md:text-xl text-medium-gray leading-relaxed">
                {subtitle}
              </p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {ctaPrimary && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onPrimaryClick}
                  >
                    {ctaPrimary}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onSecondaryClick}
                  >
                    {ctaSecondary}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {image}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
