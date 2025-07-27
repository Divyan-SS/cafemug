import { Coffee, Heart, Users, Award } from 'lucide-react';
import cafeCustomers from '@/assets/cafe-customers.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Coffee,
      title: "Artisanal Brews",
      description: "Handcrafted with premium beans sourced from the finest coffee regions"
    },
    {
      icon: Heart,
      title: "Warm Ambiance",
      description: "Thoughtfully designed spaces with warm wooden tones and ambient lighting"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Where coffee lovers, creatives, and professionals come together"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering an unparalleled coffee experience"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="glass-luxury rounded-3xl overflow-hidden">
              <img
                src={cafeCustomers}
                alt="Café Mug Community"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass bg-gradient-gold p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-foreground">500+</div>
                <div className="text-sm text-accent-foreground/80">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-gold mb-8" />
              
              <p className="font-elegant text-lg text-muted-foreground mb-6 leading-relaxed">
                Nestled in the vibrant heart of Coimbatore, Café Mug represents more than just a coffee shop—it's a sanctuary where tradition meets innovation, and every cup tells a story of passion and craftsmanship.
              </p>
              
              <p className="font-elegant text-lg text-muted-foreground mb-8 leading-relaxed">
                From our carefully curated beans to our meticulously designed interiors, every detail reflects our commitment to creating an extraordinary coffee experience that celebrates both local culture and global coffee artistry.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card-luxury card-hover">
                  <feature.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-elegant text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;