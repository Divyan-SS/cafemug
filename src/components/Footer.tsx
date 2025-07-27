import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-coffee-medium">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-luxury text-3xl font-bold mb-4">
              Stay Connected with Café Mug
            </h3>
            <p className="font-elegant text-cream/80 mb-8">
              Get the latest updates on new blends, events, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass border-accent/30 focus:border-accent text-cream placeholder:text-cream/50"
              />
              <Button className="btn-luxury px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8 text-accent" />
              <h3 className="font-luxury text-2xl font-bold">Café Mug</h3>
            </div>
            <p className="font-elegant text-cream/80 leading-relaxed max-w-md">
              Where every sip tells a story. Experience the perfect blend of luxury, warmth, 
              and exceptional coffee culture in the heart of Coimbatore, Tamil Nadu.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-coffee-medium hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cream group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-elegant text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Our Story",
                "Menu",
                "Reservations",
                "Events",
                "Gallery",
                "Careers"
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-elegant text-cream/80 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-elegant text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="font-elegant text-cream/80 text-sm">
                  <p>123 Coffee Street</p>
                  <p>RS Puram, Coimbatore</p>
                  <p>Tamil Nadu 641002</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-elegant text-cream/80 text-sm">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-elegant text-cream/80 text-sm">hello@cafemug.in</span>
              </div>
            </div>
            
            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-elegant font-semibold text-cream mb-2">Hours</h5>
              <div className="font-elegant text-cream/80 text-sm space-y-1">
                <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-medium">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-elegant text-cream/60 text-sm text-center md:text-left">
              <p>© 2024 Café Mug. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="font-elegant text-cream/60 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-elegant text-cream/60 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
            
            <div className="flex items-center gap-2 font-elegant text-cream/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in Coimbatore</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;