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
    <div className={`bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group cursor-pointer ${className}`}>
      {/* Image container */}
      <div className="relative aspect-square bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        
        {/* Watch button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 h-8 w-8 p-0 rounded-full bg-background/90 hover:bg-background shadow-sm ${
            isWatched ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWatched ? 'fill-current' : ''}`} />
        </Button>

        {/* Condition badge */}
        {condition && (
          <div className="absolute top-3 left-3 bg-background/95 px-2 py-1 rounded text-xs font-semibold shadow-sm">
            {condition}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-bold text-lg text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Seller info */}
        <div className="text-xs text-muted-foreground space-y-1 mb-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground text-sm">{seller}</span>
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="font-medium">{rating}</span>
              </div>
            )}
          </div>
          {location && <div className="text-xs">{location}</div>}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button size="sm" className="btn-primary flex-1 text-xs font-semibold py-2">
            Make Offer
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs font-semibold py-2 border-card-border hover:border-primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;