import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Instagram, Facebook, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our coffee, want to plan an event, or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-luxury">
            <h3 className="font-luxury text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-elegant text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass border-accent/30 focus:border-accent"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-elegant text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass border-accent/30 focus:border-accent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-elegant text-foreground">Phone (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="glass border-accent/30 focus:border-accent"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="font-elegant text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass border-accent/30 focus:border-accent min-h-[120px]"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>
              
              <Button type="submit" className="btn-luxury w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Social */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-luxury">
              <h3 className="font-luxury text-2xl font-bold text-foreground mb-6">
                Visit Our Café
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground mb-1">Address</h4>
                    <p className="font-elegant text-muted-foreground">
                      123 Coffee Street<br />
                      RS Puram, Coimbatore<br />
                      Tamil Nadu 641002
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground mb-1">Phone</h4>
                    <p className="font-elegant text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground mb-1">Email</h4>
                    <p className="font-elegant text-muted-foreground">hello@cafemug.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-luxury">
              <h3 className="font-luxury text-2xl font-bold text-foreground mb-6">
                Follow Our Journey
              </h3>
              
              <p className="font-elegant text-muted-foreground mb-6">
                Stay connected with us on social media for the latest updates, 
                behind-the-scenes content, and coffee inspiration.
              </p>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="glass border-accent/30 hover:bg-accent/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="glass border-accent/30 hover:bg-accent/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="glass border-accent/30 hover:bg-accent/10">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card-luxury bg-gradient-gold">
              <h3 className="font-luxury text-2xl font-bold text-accent-foreground mb-4">
                Coffee Newsletter
              </h3>
              <p className="font-elegant text-accent-foreground/80 mb-6">
                Get weekly updates on new blends, brewing tips, and exclusive café events.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/20 border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/60"
                />
                <Button variant="secondary" className="bg-background/20 text-accent-foreground hover:bg-background/30">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;