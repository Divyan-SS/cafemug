import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, Coffee } from 'lucide-react';

const LocationSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Coffee Street", "RS Puram, Coimbatore", "Tamil Nadu 641002"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 7:00 AM - 10:00 PM", "Sat - Sun: 8:00 AM - 11:00 PM", "Always Fresh Coffee"]
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["+91 98765 43210", "hello@cafemug.in", "Quick Response Guaranteed"]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Visit Us Today
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Coimbatore, we're easily accessible and always ready to welcome you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-luxury">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-elegant text-xl font-semibold text-foreground mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="font-elegant text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-luxury flex-1">
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
              <Button className="btn-ghost-luxury flex-1">
                <Coffee className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="glass-luxury p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-elegant font-semibold text-foreground">Quick Reservation</h4>
                  <p className="font-elegant text-sm text-muted-foreground">WhatsApp us for instant table booking</p>
                </div>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Map Area */}
          <div className="relative">
            <div className="glass-luxury rounded-3xl overflow-hidden h-[600px]">
              {/* Placeholder Map - In real implementation, integrate Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-coffee-medium to-coffee-dark flex items-center justify-center relative">
                <div className="text-center text-cream">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-luxury text-2xl font-bold mb-2">Café Mug</h3>
                  <p className="font-elegant">RS Puram, Coimbatore</p>
                  <p className="font-elegant text-sm mt-2 opacity-80">Interactive Map Coming Soon</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-accent rounded-full animate-ping" />
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-gold-light rounded-full opacity-60" />
                <div className="absolute top-1/3 right-12 w-2 h-2 bg-cream rounded-full opacity-40" />
              </div>
            </div>

            {/* Floating Address Card */}
            <div className="absolute -bottom-6 -left-6 glass bg-gradient-gold p-6 rounded-2xl max-w-xs">
              <div className="text-accent-foreground">
                <div className="font-elegant font-bold text-lg mb-2">Find Us Here</div>
                <div className="font-elegant text-sm">
                  <p>123 Coffee Street</p>
                  <p>RS Puram, Coimbatore</p>
                  <p>Tamil Nadu 641002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;