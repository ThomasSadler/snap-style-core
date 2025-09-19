import { ChevronRight } from 'lucide-react';

// Section header component with title and optional "See more" link
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showSeeMore?: boolean;
  seeMoreText?: string;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  showSeeMore = true, 
  seeMoreText = "See more",
  className = "" 
}: SectionHeaderProps) => {
  return (
    <div className={`section-header ${className}`}>
      <div>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        )}
      </div>
      
      {showSeeMore && (
        <button className="flex items-center gap-1 text-primary hover:text-primary-hover font-medium text-sm transition-colors">
          {seeMoreText}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;