import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Product card component for displaying items with image, title, price, and seller info
interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  seller: string;
  rating?: number;
  location?: string;
  isWatched?: boolean;
  condition?: string;
  className?: string;
}

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  seller, 
  rating, 
  location, 
  isWatched = false, 
  condition,
  className = "" 
}: ProductCardProps) => {
  return (
    <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-200 group ${className}`}>
      {/* Image container */}
      <div className="relative aspect-square bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Watch button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 h-8 w-8 p-0 rounded-full bg-background/80 hover:bg-background ${
            isWatched ? 'text-destructive' : 'text-muted-foreground'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWatched ? 'fill-current' : ''}`} />
        </Button>

        {/* Condition badge */}
        {condition && (
          <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 rounded text-xs font-medium">
            {condition}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Seller info */}
        <div className="text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1 mb-1">
            <span className="font-medium text-foreground">{seller}</span>
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span>{rating}</span>
              </div>
            )}
          </div>
          {location && <div>{location}</div>}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button size="sm" className="btn-primary flex-1 text-xs">
            Make Offer
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;