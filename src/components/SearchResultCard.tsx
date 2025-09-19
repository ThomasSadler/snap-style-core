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
    <div className={`flex items-center gap-4 p-4 bg-card border border-card-border rounded-lg hover:bg-hover cursor-pointer transition-colors group ${className}`}>
      {/* Image */}
      <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
        {category && (
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
        )}
        {lastSearched && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{lastSearched}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultCard;