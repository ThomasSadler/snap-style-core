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
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-6 text-background text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-background text-base transition-colors hover:underline"
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
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="max-w-lg">
            <h4 className="font-bold mb-3 text-background text-xl">Get the best of Reverb in your inbox</h4>
            <p className="text-background/80 text-base mb-6 leading-relaxed">
              Subscribe to our newsletter for news about new features, artists, and more.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground text-base border-0 focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary px-8 py-3 text-base font-bold rounded-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <span className="text-background font-bold text-3xl">Reverb</span>
            <div className="flex items-center gap-6">
              <Facebook className="h-6 w-6 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="text-background/70 text-base">
            © 2024 Reverb.com LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;