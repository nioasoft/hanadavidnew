'use client';

import { useTranslations } from 'next-intl';
import { Briefcase, Plane, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  const t = useTranslations();

  // Service icons mapping
  const serviceIcons = [
    <Briefcase key="biz" className="h-12 w-12 text-primary-foreground" />,
    <Plane key="travel" className="h-12 w-12 text-primary-foreground" />,
    <GraduationCap key="test" className="h-12 w-12 text-primary-foreground" />,
    <BookOpen key="gen" className="h-12 w-12 text-primary-foreground" />,
  ];

  // Placeholder colors/gradients for course images
  const courseGradients = [
    'bg-gradient-to-br from-blue-500 to-indigo-600',
    'bg-gradient-to-br from-green-400 to-teal-500',
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-orange-400 to-amber-500',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
               {/* Hero Image Placeholder */}
               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted lg:w-1/2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  {/* Could place an actual image here later */}
               </div>

               {/* Hero Text */}
               <div className="flex flex-1 flex-col gap-6 text-center lg:items-start lg:text-start lg:justify-center">
                 <div className="space-y-4">
                   <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                     {t('services.header.title')}
                   </h1>
                   <h2 className="text-lg text-muted-foreground">
                     {t('services.header.subtitle')}
                   </h2>
                 </div>
                 <div className="flex justify-center lg:justify-start">
                   <Link href="#courses">
                     <Button size="lg">
                       {t('nav.courses')}
                     </Button>
                   </Link>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Courses Grid Section */}
      <section id="courses" className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
             Find the Right Course for You
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
             {t.raw('services.services').map((service: any, index: number) => (
                <div key={index} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-lg">
                   {/* Image Area */}
                   <div className={`flex aspect-video w-full items-center justify-center ${courseGradients[index % courseGradients.length]}`}>
                      <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                         {serviceIcons[index]}
                      </div>
                   </div>
                   
                   <div className="flex flex-grow flex-col p-6 sm:p-8">
                      <h3 className="mb-4 text-2xl font-bold text-card-foreground">
                         {service.title}
                      </h3>
                      
                      {/* Details */}
                      <div className="mb-6 flex-grow space-y-6">
                         <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                               {t('services.whatYoullLearn')}
                            </p>
                            <ul className="space-y-2">
                               {service.whatYoullLearn.slice(0, 3).map((item: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                     <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                     <span>{item}</span>
                                  </li>
                               ))}
                            </ul>
                         </div>
                         <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                               {t('services.idealFor')}
                            </p>
                            <p className="text-sm text-foreground">
                               {service.idealFor}
                            </p>
                         </div>
                      </div>

                      <Button variant="outline" className="w-full sm:w-auto self-start">
                         Learn More
                      </Button>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (Approach) */}
      <section className="bg-background py-16 md:py-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
               <h2 className="text-3xl font-bold text-foreground">
                  {t('services.approach.title')}
               </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {t.raw('services.approach.items').map((item: string, index: number) => {
                  const [title, desc] = item.split(' - ');
                  return (
                     <div key={index} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="mb-4 text-primary">
                           <CheckCircle className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-card-foreground">
                           {title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                           {desc}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
    </>
  );
}
