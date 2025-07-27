import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Café Mug is my absolute favorite spot in Coimbatore! The ambiance is incredibly cozy with those beautiful wooden interiors and warm lighting. Their signature coffee is simply divine, and the staff always makes you feel welcome.",
      avatar: "PS",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Arjun Krishnan",
      rating: 5,
      text: "Finally found the perfect place to work and unwind! The aesthetic is Instagram-worthy, the coffee quality is top-notch, and the vibe is exactly what I needed. Their latte art is pure artistry!",
      avatar: "AK",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Sneha Patel",
      rating: 5,
      text: "Every visit to Café Mug feels like a mini vacation. The interior design is breathtaking, the service is exceptional, and their cold brew is the best I've had in Tamil Nadu. Highly recommend!",
      avatar: "SP",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      rating: 5,
      text: "As a coffee enthusiast, I can confidently say Café Mug sets the standard for premium coffee culture in Coimbatore. The attention to detail in both their brews and ambiance is remarkable.",
      avatar: "RK",
      date: "1 week ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coffee-medium/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-dark/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of coffee lovers who have made Café Mug their second home
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-luxury rounded-3xl p-12 min-h-[400px] flex items-center">
            <div className="w-full text-center">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent mx-auto mb-8 opacity-50" />
              
              {/* Review Content */}
              <div className="space-y-6">
                <p className="font-elegant text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
                  "{reviews[currentReview].text}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                
                {/* Reviewer Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="font-elegant font-bold text-accent-foreground">
                      {reviews[currentReview].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-elegant font-semibold text-foreground">
                      {reviews[currentReview].name}
                    </div>
                    <div className="font-elegant text-sm text-muted-foreground">
                      {reviews[currentReview].date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-accent scale-125' 
                    : 'bg-accent/30 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "4.9", label: "Average Rating" },
            { number: "2", label: "Years of Excellence" },
            { number: "50+", label: "Unique Beverages" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-luxury text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="font-elegant text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;