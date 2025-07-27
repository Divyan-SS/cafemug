import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Coffee, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReservationSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Reservation Confirmed!",
        description: "We'll send you a confirmation shortly. See you soon!",
      });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-luxury rounded-3xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="font-luxury text-4xl font-bold text-foreground mb-4">
              Reservation Confirmed!
            </h2>
            <p className="font-elegant text-lg text-muted-foreground mb-8">
              Thank you for choosing Café Mug. We've sent a confirmation to your email 
              and will prepare your perfect coffee experience.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="btn-luxury"
            >
              Make Another Reservation
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Reserve Your Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at Café Mug and let us prepare an unforgettable coffee experience just for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Reservation Form */}
          <div className="card-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-elegant text-xl font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Personal Details
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-elegant text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="glass border-accent/30 focus:border-accent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-elegant text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="glass border-accent/30 focus:border-accent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-elegant text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="glass border-accent/30 focus:border-accent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-4">
                <h3 className="font-elegant text-xl font-semibold text-foreground flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-accent" />
                  Reservation Details
                </h3>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-elegant text-foreground">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-accent" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="glass border-accent/30 focus:border-accent pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="font-elegant text-foreground">Time</Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="glass border-accent/30 focus:border-accent">
                        <Clock className="w-4 h-4 text-accent mr-2" />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="glass">
                        {Array.from({ length: 14 }, (_, i) => {
                          const hour = i + 8;
                          const time12 = hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
                          return (
                            <SelectItem key={i} value={`${hour}:00`}>
                              {time12}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="font-elegant text-foreground">Guests</Label>
                    <Select onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="glass border-accent/30 focus:border-accent">
                        <Users className="w-4 h-4 text-accent mr-2" />
                        <SelectValue placeholder="How many?" />
                      </SelectTrigger>
                      <SelectContent className="glass">
                        {Array.from({ length: 8 }, (_, i) => (
                          <SelectItem key={i} value={`${i + 1}`}>
                            {i + 1} {i === 0 ? 'Person' : 'People'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests" className="font-elegant text-foreground">Special Requests (Optional)</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="glass border-accent/30 focus:border-accent min-h-[100px]"
                  placeholder="Any dietary restrictions, celebration notes, or special seating preferences..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="btn-luxury w-full text-lg py-4">
                Confirm Reservation
              </Button>
            </form>
          </div>

          {/* Reservation Info */}
          <div className="space-y-8">
            {/* Policy Card */}
            <div className="card-luxury">
              <h3 className="font-elegant text-xl font-semibold text-foreground mb-4">
                Reservation Policy
              </h3>
              <div className="space-y-3 font-elegant text-muted-foreground">
                <p>• Reservations are held for 15 minutes past the scheduled time</p>
                <p>• For parties of 6 or more, please call us directly</p>
                <p>• Cancellations can be made up to 2 hours before your visit</p>
                <p>• We'll send confirmation via email and SMS</p>
              </div>
            </div>

            {/* Features */}
            <div className="card-luxury">
              <h3 className="font-elegant text-xl font-semibold text-foreground mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Coffee, text: "Freshly roasted coffee prepared to perfection" },
                  { icon: Users, text: "Personalized service from our expert baristas" },
                  { icon: Calendar, text: "Guaranteed seating in our premium ambiance" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-elegant text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Special Events */}
            <div className="glass bg-gradient-gold p-6 rounded-2xl">
              <h3 className="font-elegant text-lg font-semibold text-accent-foreground mb-2">
                Planning a Special Event?
              </h3>
              <p className="font-elegant text-accent-foreground/80 mb-4 text-sm">
                Contact us for private bookings, corporate events, or celebration packages
              </p>
              <Button className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                Call for Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;