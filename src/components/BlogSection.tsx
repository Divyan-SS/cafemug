import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import brewingGuide from '@/assets/blog-brewing-guide.jpg';
import latteArt from '@/assets/blog-latte-art.jpg';
import coffeeOrigins from '@/assets/blog-coffee-origins.jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Pour-Over Coffee",
      excerpt: "Master the technique of brewing the perfect cup with our step-by-step guide to pour-over coffee methods.",
      image: brewingGuide,
      category: "Brewing Guide",
      readTime: "5 min read",
      publishDate: "March 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Latte Art: From Heart to Rosetta",
      excerpt: "Discover the secrets behind creating beautiful latte art patterns that will elevate your coffee experience.",
      image: latteArt,
      category: "Coffee Culture",
      readTime: "7 min read",
      publishDate: "March 10, 2024"
    },
    {
      id: 3,
      title: "Coffee Origins: A Journey Around the World",
      excerpt: "Explore the rich heritage and unique flavors of coffee beans from different regions across the globe.",
      image: coffeeOrigins,
      category: "Origins",
      readTime: "8 min read",
      publishDate: "March 5, 2024"
    },
    {
      id: 4,
      title: "The Science of Coffee Roasting",
      excerpt: "Understanding how roasting profiles affect flavor development and what makes each roast unique.",
      image: brewingGuide,
      category: "Roasting",
      readTime: "6 min read",
      publishDate: "February 28, 2024"
    },
    {
      id: 5,
      title: "Sustainable Coffee Practices",
      excerpt: "How we source our beans ethically and support coffee farming communities around the world.",
      image: coffeeOrigins,
      category: "Sustainability",
      readTime: "4 min read",
      publishDate: "February 20, 2024"
    },
    {
      id: 6,
      title: "Espresso vs. Americano: What's the Difference?",
      excerpt: "A comprehensive guide to understanding the fundamental differences between these popular coffee drinks.",
      image: latteArt,
      category: "Coffee Education",
      readTime: "3 min read",
      publishDate: "February 15, 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Coffee Journal
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into coffee culture with our curated articles on brewing techniques, 
            origins, and the art of exceptional coffee craftsmanship.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="card-luxury card-hover group overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-6 left-6 bg-gradient-gold text-accent-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 border-accent/30">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="font-luxury text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="font-elegant text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].publishDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button className="btn-luxury w-fit group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="card-luxury card-hover group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="space-y-4">
                <Badge variant="outline" className="text-xs border-accent/30">
                  {post.category}
                </Badge>
                
                <h3 className="font-elegant text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="font-elegant text-muted-foreground">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-16">
          <Button className="btn-luxury text-lg px-10 py-4">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;