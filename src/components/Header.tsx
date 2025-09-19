import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Header component matching Reverb's design with navigation, search, and user actions
const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium relative">
        More Gear, Less Fees | Till 10:00am Fri - we call combined orders 4+ deals. 
        <span className="underline ml-1 cursor-pointer hover:no-underline">New info</span>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-primary-hover p-1 rounded">
          <X className="h-4 w-4" />
        </button>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-foreground cursor-pointer">Reverb</h1>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Buy</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Sell</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">My Feed</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Research</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Handpicked</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors py-2">Price Guide</a>
            </nav>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for anything" 
                className="pl-12 pr-4 py-3 bg-muted border-0 focus:ring-2 focus:ring-primary text-base rounded-lg"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Watching</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">2</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 hover:text-primary">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
            </Button>

            <Button className="btn-primary px-6 py-2.5 rounded-lg hidden md:block">
              Sell Your Gear
            </Button>

            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;