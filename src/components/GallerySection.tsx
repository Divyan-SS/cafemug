import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import galleryImage1 from '@/assets/gallery-interior-1.jpg';
import galleryImage2 from '@/assets/gallery-interior-2.jpg';
import galleryImage3 from '@/assets/gallery-interior-3.jpg';
import heroImage from '@/assets/hero-cafe-interior.jpg';
import latteArt from '@/assets/latte-art-hero.jpg';
import menuShowcase from '@/assets/menu-showcase.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: galleryImage1,
      alt: "Cozy café interior with warm lighting",
      category: "Interior"
    },
    {
      src: galleryImage2,
      alt: "Elegant seating area with comfortable chairs",
      category: "Seating"
    },
    {
      src: galleryImage3,
      alt: "Professional coffee bar with espresso machine",
      category: "Bar"
    },
    {
      src: heroImage,
      alt: "Main café dining area",
      category: "Interior"
    },
    {
      src: latteArt,
      alt: "Beautiful latte art creation",
      category: "Coffee"
    },
    {
      src: menuShowcase,
      alt: "Signature coffee presentation",
      category: "Coffee"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Interior Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Step inside our carefully crafted space where modern luxury meets cozy comfort. 
            Every corner tells a story of warmth and sophistication.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openLightbox(image.src)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-coffee-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-cream">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-elegant text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;