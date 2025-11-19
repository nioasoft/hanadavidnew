import Image from 'next/image';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  image?: React.ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  onPrimaryClick,
  className = ''
}: HeroProps) {
  return (
    <section className={`py-12 md:py-20 lg:py-24 ${className}`} id="hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-gray-100/10">
              <Image
                src="/hana.webp"
                alt="Hana David"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-6 text-center lg:text-start lg:w-1/2">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {subtitle}
                </p>
              )}
            </div>
            
            <div className="flex justify-center lg:justify-start pt-4">
               {ctaPrimary && (
                  <Button 
                    onClick={onPrimaryClick}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {ctaPrimary}
                  </Button>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
