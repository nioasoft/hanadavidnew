import { ReactNode } from 'react';

interface TimelineItemProps {
  step: string;
  title: string;
  description: string[];
  isLast?: boolean;
}

function TimelineItem({ step, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Step Number */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 md:h-20 bg-gray-200 dark:bg-gray-700 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 md:pb-12 flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-soft-black mb-3">
          {title}
        </h3>
        <div className="space-y-2">
          {description.map((item, index) => (
            <p key={index} className="text-medium-gray leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineProps {
  steps: Array<{
    title: string;
    description: string[];
  }>;
  className?: string;
}

export default function Timeline({ steps, className = '' }: TimelineProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {steps.map((step, index) => (
        <TimelineItem
          key={index}
          step={`${index + 1}`}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
