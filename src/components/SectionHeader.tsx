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
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-base">{subtitle}</p>
        )}
      </div>
      
      {showSeeMore && (
        <button className="flex items-center gap-1 text-primary hover:text-primary-hover font-semibold text-base transition-colors group">
          {seeMoreText}
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;