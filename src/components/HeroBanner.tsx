import { Button } from '@/components/ui/button';

// Hero banner component matching Reverb's main promotional section
interface HeroBannerProps {
  title: string;
  description: string;
  buttonText: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const HeroBanner = ({ title, description, buttonText, images }: HeroBannerProps) => {
  return (
    <section className="bg-gradient-to-r from-accent/20 to-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <Button className="btn-primary px-8 py-3 text-base font-medium">
              {buttonText}
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-lg ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-sm font-medium">
                      {image.caption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;