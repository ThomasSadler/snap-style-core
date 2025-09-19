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
    <section className="bg-gradient-to-r from-accent/30 to-primary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Content - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
              {title.split('.').map((part, index) => (
                <div key={index}>{part}{index < title.split('.').length - 1 ? '.' : ''}</div>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              {description}
            </p>
            <Button className="btn-primary px-8 py-4 text-base font-bold rounded-lg">
              {buttonText}
            </Button>
          </div>

          {/* Image Grid - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-4">
              {/* First image spans full width */}
              <div className="col-span-2 relative group overflow-hidden rounded-xl">
                <img 
                  src={images[0]?.src} 
                  alt={images[0]?.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {images[0]?.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className="text-white text-lg font-bold">
                      {images[0].caption}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Bottom two images */}
              {images.slice(1, 3).map((image, index) => (
                <div 
                  key={index + 1}
                  className="relative group overflow-hidden rounded-xl aspect-square"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white text-sm font-bold">
                        {image.caption}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;