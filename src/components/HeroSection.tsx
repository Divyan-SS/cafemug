import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Coffee, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-cafe-interior.jpg';
import latteArt from '@/assets/latte-art-hero.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage, latteArt];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Café Mug Interior"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Hero Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo Area */}
          <div className="mb-8">
            <div className="flex items-center justify-center  mb-4">
              {/* Responsive Logo */}
              <img
                src="/src/assets/logo.png"
                alt="Café Mug Logo"
                className="h-25 md:h-40 lg:h-40 w-30 mt-3 object-contain"
              />

                {/* Title */}
                <h1 className="font-luxury text-6xl md:text-7xl font-bold -ml-2 text-cream tracking-wide">
                  Café Mug
                </h1>
              </div>

      </div>


          {/* Tagline */}
          <p className="font-elegant text-xl md:text-2xl text-gold-light mb-4 animate-fade-up delay-300">
            Where Every Sip Tells a Story
          </p>
          
          <p className="font-elegant text-lg text-cream/80 mb-12 max-w-2xl mx-auto animate-fade-up delay-500">
            Experience the perfect blend of luxury, warmth, and exceptional coffee culture 
            in the heart of Coimbatore
          </p>

          {/* Location Badge */}
          <div className="glass-luxury inline-flex items-center px-6 py-3 rounded-full mb-12 animate-fade-up delay-700">
            <MapPin className="w-5 h-5 text-accent mr-2" />
            <span className="font-elegant text-cream">Coimbatore, Tamil Nadu</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up delay-1000">
            <Button className="btn-luxury text-lg px-10 py-4">
              Explore Menu
            </Button>
            <Button className="btn-ghost-luxury text-lg px-10 py-4">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-accent opacity-70" />
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-coffee-light rounded-full opacity-30 animate-float" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-gold-light rounded-full opacity-40 animate-float delay-2000" />
      <div className="absolute bottom-40 left-32 w-5 h-5 bg-coffee-medium rounded-full opacity-25 animate-float delay-4000" />
    </section>
  );
};

export default HeroSection;