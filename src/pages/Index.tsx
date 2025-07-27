import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import ReservationSection from '@/components/ReservationSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="menu">
        <MenuSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="reviews">
        <TestimonialsSection />
      </div>
      <div id="location">
        <LocationSection />
      </div>
      <div id="reservation">
        <ReservationSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
