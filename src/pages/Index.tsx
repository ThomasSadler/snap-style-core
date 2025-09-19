import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import StoryCard from '@/components/StoryCard';
import SearchResultCard from '@/components/SearchResultCard';
import Footer from '@/components/Footer';

// Import generated images
import guitar1 from '@/assets/guitar-1.jpg';
import amp1 from '@/assets/amp-1.jpg';
import pedals1 from '@/assets/pedals-1.jpg';
import heroStudio from '@/assets/hero-studio.jpg';
import bass1 from '@/assets/bass-1.jpg';
import drums1 from '@/assets/drums-1.jpg';

const Index = () => {
  // Sample data for components
  const heroImages = [
    { src: heroStudio, alt: "Recording Studio", caption: "Lower Fees" },
    { src: pedals1, alt: "Guitar Pedals", caption: "Reviewed Price Charts" },
    { src: guitar1, alt: "Electric Guitar", caption: "Low-Cost Postage" }
  ];

  const watchListProducts = [
    {
      image: guitar1,
      title: "Fender Player Stratocaster Electric Guitar - Sunburst",
      price: "£2,847.00",
      seller: "Guitar World UK",
      rating: 4.8,
      location: "London, UK",
      condition: "Excellent"
    },
    {
      image: amp1,
      title: "Marshall JCM800 2203 Vintage Series 100W Tube Guitar Amp Head",
      price: "£1,650",
      seller: "Vintage Amps Ltd",
      rating: 4.9,
      location: "Manchester, UK",
      condition: "Very Good"
    },
    {
      image: pedals1,
      title: "Boss Metal Zone MT-2 Distortion Pedal",
      price: "£89.00",
      originalPrice: "£120.00",
      seller: "Effects Emporium",
      rating: 4.5,
      location: "Birmingham, UK",
      condition: "Good"
    },
    {
      image: bass1,
      title: "Fender Precision Bass - Natural Wood Finish",
      price: "£1,890.00",
      seller: "Bass Central",
      rating: 4.7,
      location: "Edinburgh, UK",
      condition: "Excellent"
    }
  ];

  const feedProducts = [
    {
      image: drums1,
      title: "Pearl Export Series 5-Piece Drum Kit",
      price: "£650.00",
      seller: "Drum Station",
      rating: 4.6,
      location: "Liverpool, UK",
      condition: "Very Good",
      isWatched: true
    },
    {
      image: guitar1,
      title: "Gibson Les Paul Standard 50s - Heritage Cherry Sunburst",
      price: "£2,500.00",
      seller: "Gibson Authorized",
      rating: 4.9,
      location: "London, UK",
      condition: "New"
    },
    {
      image: amp1,
      title: "Vox AC30C2 30W 2x12 Tube Guitar Combo Amp",
      price: "£849.00",
      seller: "Amp Heaven",
      rating: 4.8,
      location: "Bristol, UK",
      condition: "Excellent"
    }
  ];

  const stories = [
    {
      image: heroStudio,
      title: "Video: How Neil Schon Grand Gave Found His Signature Les Paul During Through the Fire",
      type: 'video' as const,
      author: "Reverb Staff",
      publishedAt: "2 days ago"
    },
    {
      image: guitar1,
      title: "Video: 5 Unconventional Effects for Your Guitar",
      type: 'video' as const,
      author: "Effects Expert",
      publishedAt: "1 week ago"
    },
    {
      image: pedals1,
      title: "Video: The Sound-Sculpting That's Transforming Modern Stompbox Design",
      type: 'video' as const,
      author: "Gear Review",
      publishedAt: "3 days ago"
    }
  ];

  const recentSearches = [
    {
      image: guitar1,
      title: "Fender Stratocaster 1972 - 1983",
      category: "Electric Guitars",
      lastSearched: "2 hours ago"
    },
    {
      image: amp1,
      title: "Vintage recording hardware desk",
      category: "Recording Equipment",
      lastSearched: "1 day ago"
    },
    {
      image: pedals1,
      title: "Ibanez Tube Screamer",
      category: "Effects Pedals", 
      lastSearched: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Header Component</h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <Header />
          </div>
        </div>

        {/* Hero Banner Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Hero Banner Component</h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <HeroBanner 
              title="Lower fees. Better tools."
              description="It's a new day for UK sellers"
              buttonText="Check it out"
              images={heroImages}
            />
          </div>
        </div>

        {/* Section Header Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Section Header Component</h2>
          <div className="p-6 border border-border rounded-lg">
            <SectionHeader 
              title="From your watch list"
              subtitle="You liked this →"
            />
          </div>
        </div>

        {/* Product Card Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Product Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-border rounded-lg">
            {watchListProducts.slice(0, 3).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Story Card Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Story Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-border rounded-lg">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>

        {/* Search Result Card Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Search Result Card Component</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 border border-border rounded-lg">
            {recentSearches.map((search, index) => (
              <SearchResultCard key={index} {...search} />
            ))}
          </div>
        </div>

        {/* Footer Component */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Footer Component</h2>
          <div className="border border-border rounded-lg overflow-hidden">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
