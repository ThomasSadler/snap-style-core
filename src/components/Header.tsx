import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Header component matching Reverb's design with navigation, search, and user actions
const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        More Gear, Less Fees | Till 10:00am Fri - we call combined orders 4+ deals. New info →
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">Reverb</h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Buy</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sell</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">My Feed</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Handpicked</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Price Guide</a>
            </nav>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for anything" 
                className="pl-10 bg-muted border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Watching</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Cart</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">Account</span>
            </Button>

            <Button variant="ghost" size="sm" className="btn-primary px-6">
              Sell Your Gear
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;