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
      <div className="relative aspect-video bg-muted rounded-xl overflow-hidden mb-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Video play button */}
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/70 rounded-full p-5 group-hover:bg-black/80 transition-colors">
              <Play className="h-10 w-10 text-white fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Gradient overlay for text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
          <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-primary-foreground transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-white/90 text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Meta information */}
      {(author || publishedAt) && (
        <div className="text-sm text-muted-foreground px-1">
          {author && <span className="font-semibold">{author}</span>}
          {author && publishedAt && <span className="mx-2">•</span>}
          {publishedAt && <span>{publishedAt}</span>}
        </div>
      )}
    </div>
  );
};

export default StoryCard;