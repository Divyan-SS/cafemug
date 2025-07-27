import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Coffee } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#location' },
    { label: 'Book Table', href: '#reservation' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? 'glass-luxury backdrop-blur-lg' : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">
      
      {/* LOGO */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => scrollToSection('#hero')}
      >
        <img
          src="src/assets/logo.png"
          alt="Café Mug Logo"
          className="h-[120px] w-[120px] object-contain mt-3" // ~72px height, adjustable
        />
        <span className="font-luxury text-3xl md:text-4xl lg:text-3xl font-bold text-cream">
          Café Mug
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="font-elegant text-cream hover:text-accent transition-colors duration-300 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-cream hover:text-accent"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden glass-luxury rounded-b-2xl border-t border-accent/20">
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left font-elegant text-cream hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navigation;