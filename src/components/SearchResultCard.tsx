import { Clock } from 'lucide-react';

// Horizontal search result card for recent searches and similar items
interface SearchResultCardProps {
  image: string;
  title: string;
  category?: string;
  lastSearched?: string;
  className?: string;
}

const SearchResultCard = ({ 
  image, 
  title, 
  category, 
  lastSearched,
  className = "" 
}: SearchResultCardProps) => {
  return (
    <div className={`flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:bg-hover cursor-pointer transition-all duration-200 group hover:shadow-[var(--shadow-card)] ${className}`}>
      {/* Image */}
      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
        {category && (
          <p className="text-sm text-muted-foreground mb-2 font-medium">{category}</p>
        )}
        {lastSearched && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{lastSearched}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultCard;