import { Play } from 'lucide-react';

// Story/article card component for featured content with large images
interface StoryCardProps {
  image: string;
  title: string;
  description?: string;
  type?: 'article' | 'video';
  author?: string;
  publishedAt?: string;
  className?: string;
}

const StoryCard = ({ 
  image, 
  title, 
  description, 
  type = 'article', 
  author, 
  publishedAt,
  className = "" 
}: StoryCardProps) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Video play button */}
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-4 group-hover:bg-black/70 transition-colors">
              <Play className="h-8 w-8 text-white fill-current" />
            </div>
          </div>
        )}

        {/* Gradient overlay for text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-foreground transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-white/90 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Meta information */}
      {(author || publishedAt) && (
        <div className="text-xs text-muted-foreground">
          {author && <span className="font-medium">{author}</span>}
          {author && publishedAt && <span className="mx-2">•</span>}
          {publishedAt && <span>{publishedAt}</span>}
        </div>
      )}
    </div>
  );
};

export default StoryCard;