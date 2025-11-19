import { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <div className={`bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200 p-6 text-center hover:-translate-y-1 ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}