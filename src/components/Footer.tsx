import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// Footer component with links, social media, and company information
const Footer = () => {
  const footerSections = [
    {
      title: "Buy",
      links: [
        "Categories",
        "Guitars",
        "Amps",
        "Effects Pedals",
        "Drums",
        "Recording Gear",
        "DJ & Electronic Music"
      ]
    },
    {
      title: "Sell on Reverb",
      links: [
        "Sell Your Gear",
        "Integration",
        "Selling Terms",
        "Fees & Payments",
        "Reverb Protection",
        "Community Guidelines"
      ]
    },
    {
      title: "Help & Info",
      links: [
        "Buying Guide",
        "Return Policy",
        "Safe Shopping Tips",
        "Price Guide",
        "Order Status",
        "Help Center"
      ]
    },
    {
      title: "Company",
      links: [
        "About Reverb",
        "Career",
        "Press",
        "Investor Relations",
        "Privacy Policy",
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-background">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2 text-background">Get the best of Reverb in your inbox</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to our newsletter for news about new features, artists, and more.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded text-foreground text-sm"
              />
              <button className="btn-primary px-6 py-2 text-sm font-medium rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-background font-bold text-xl">Reverb</span>
            <div className="flex items-center gap-4">
              <Facebook className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="text-background/70 text-sm">
            © 2024 Reverb.com LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;