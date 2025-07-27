import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Coffee, Snowflake, Leaf, Star } from 'lucide-react';
import menuShowcase from '@/assets/menu-showcase.jpg';

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: Coffee },
    { id: 'hot', label: 'Hot Coffee', icon: Coffee },
    { id: 'cold', label: 'Cold Brews', icon: Snowflake },
    { id: 'pastries', label: 'Pastries', icon: Star },
    { id: 'desserts', label: 'Desserts', icon: Leaf },
    { id: 'vegan', label: 'Vegan', icon: Leaf },
    { id: 'specialties', label: 'Specialties', icon: Star }
  ];

  const menuItems = [
    // Hot Coffee Category (8 items)
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich, full-bodied espresso with chocolate undertones",
      price: "₹180",
      category: ['hot', 'specialties'],
      image: menuShowcase,
      popular: true
    },
    {
      id: 2,
      name: "Golden Turmeric Latte",
      description: "Aromatic blend with turmeric, ginger, and warm spices",
      price: "₹220",
      category: ['hot', 'vegan'],
      image: menuShowcase
    },
    {
      id: 3,
      name: "Masala Chai Crème Brûlée",
      description: "Traditional chai with caramelized sugar top",
      price: "₹320",
      category: ['hot', 'specialties'],
      image: menuShowcase
    },
    {
      id: 4,
      name: "Matcha Cloud",
      description: "Premium matcha with oat milk foam art",
      price: "₹290",
      category: ['hot', 'vegan'],
      image: menuShowcase
    },
    {
      id: 5,
      name: "French Press Colombian",
      description: "Single-origin Colombian beans, full-bodied and smooth",
      price: "₹250",
      category: ['hot'],
      image: menuShowcase
    },
    {
      id: 6,
      name: "Hazelnut Cappuccino",
      description: "Classic cappuccino with imported hazelnut syrup",
      price: "₹210",
      category: ['hot'],
      image: menuShowcase
    },
    {
      id: 7,
      name: "Vanilla Bean Mocha",
      description: "Rich chocolate with vanilla bean and espresso",
      price: "₹280",
      category: ['hot'],
      image: menuShowcase
    },
    {
      id: 8,
      name: "Cardamom Turkish Coffee",
      description: "Traditional preparation with aromatic cardamom",
      price: "₹200",
      category: ['hot', 'specialties'],
      image: menuShowcase
    },

    // Cold Brews Category (8 items)
    {
      id: 9,
      name: "Cold Brew Float",
      description: "Smooth cold brew with vanilla ice cream",
      price: "₹280",
      category: ['cold', 'specialties'],
      image: menuShowcase,
      popular: true
    },
    {
      id: 10,
      name: "Coconut Iced Coffee",
      description: "Refreshing blend with coconut milk and palm sugar",
      price: "₹240",
      category: ['cold', 'vegan'],
      image: menuShowcase
    },
    {
      id: 11,
      name: "Nitro Cold Brew",
      description: "Nitrogen-infused cold brew with creamy texture",
      price: "₹260",
      category: ['cold', 'specialties'],
      image: menuShowcase
    },
    {
      id: 12,
      name: "Iced Caramel Macchiato",
      description: "Layered espresso with caramel and steamed milk",
      price: "₹270",
      category: ['cold'],
      image: menuShowcase
    },
    {
      id: 13,
      name: "Mint Chocolate Frappé",
      description: "Blended coffee with mint and dark chocolate",
      price: "₹290",
      category: ['cold'],
      image: menuShowcase
    },
    {
      id: 14,
      name: "Tropical Iced Latte",
      description: "Cold brew with coconut milk and tropical fruits",
      price: "₹310",
      category: ['cold', 'vegan'],
      image: menuShowcase
    },
    {
      id: 15,
      name: "Salted Caramel Cold Brew",
      description: "House cold brew with salted caramel syrup",
      price: "₹285",
      category: ['cold'],
      image: menuShowcase
    },
    {
      id: 16,
      name: "Iced Vanilla Oat Latte",
      description: "Espresso with oat milk and vanilla bean",
      price: "₹255",
      category: ['cold', 'vegan'],
      image: menuShowcase
    },

    // Pastries Category (8 items)
    {
      id: 17,
      name: "Almond Croissant",
      description: "Buttery croissant filled with almond paste",
      price: "₹180",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 18,
      name: "Chocolate Pain au Chocolat",
      description: "Flaky pastry with Belgian dark chocolate",
      price: "₹160",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 19,
      name: "Cinnamon Danish",
      description: "Sweet Danish pastry with cinnamon swirl",
      price: "₹140",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 20,
      name: "Blueberry Muffin",
      description: "Fresh baked muffin with wild blueberries",
      price: "₹120",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 21,
      name: "Cheese Scone",
      description: "Savory scone with aged cheddar cheese",
      price: "₹130",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 22,
      name: "Apple Turnover",
      description: "Puff pastry with cinnamon-spiced apples",
      price: "₹150",
      category: ['pastries'],
      image: menuShowcase
    },
    {
      id: 23,
      name: "Spinach Puff",
      description: "Savory puff pastry with spinach and herbs",
      price: "₹110",
      category: ['pastries', 'vegan'],
      image: menuShowcase
    },
    {
      id: 24,
      name: "Orange Cranberry Scone",
      description: "Citrus scone with dried cranberries",
      price: "₹140",
      category: ['pastries'],
      image: menuShowcase
    },

    // Desserts Category (8 items)
    {
      id: 25,
      name: "Tiramisu Slice",
      description: "Classic Italian dessert with coffee-soaked ladyfingers",
      price: "₹320",
      category: ['desserts', 'specialties'],
      image: menuShowcase,
      popular: true
    },
    {
      id: 26,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: "₹280",
      category: ['desserts'],
      image: menuShowcase
    },
    {
      id: 27,
      name: "New York Cheesecake",
      description: "Rich and creamy cheesecake with berry compote",
      price: "₹300",
      category: ['desserts'],
      image: menuShowcase
    },
    {
      id: 28,
      name: "Affogato",
      description: "Vanilla gelato drowned in hot espresso",
      price: "₹250",
      category: ['desserts', 'specialties'],
      image: menuShowcase
    },
    {
      id: 29,
      name: "Banoffee Pie",
      description: "Banana toffee pie with whipped cream",
      price: "₹270",
      category: ['desserts'],
      image: menuShowcase
    },
    {
      id: 30,
      name: "Dark Chocolate Brownie",
      description: "Fudgy brownie with walnuts and chocolate chips",
      price: "₹180",
      category: ['desserts'],
      image: menuShowcase
    },
    {
      id: 31,
      name: "Lemon Tart",
      description: "Tangy lemon curd in buttery pastry shell",
      price: "₹220",
      category: ['desserts'],
      image: menuShowcase
    },
    {
      id: 32,
      name: "Red Velvet Cupcake",
      description: "Moist red velvet with cream cheese frosting",
      price: "₹160",
      category: ['desserts'],
      image: menuShowcase
    },

    // Vegan Category (8 items)
    {
      id: 33,
      name: "Oat Milk Cortado",
      description: "Spanish-style coffee with steamed oat milk",
      price: "₹240",
      category: ['vegan', 'hot'],
      image: menuShowcase
    },
    {
      id: 34,
      name: "Vegan Chocolate Cake",
      description: "Rich chocolate cake made without dairy or eggs",
      price: "₹250",
      category: ['vegan', 'desserts'],
      image: menuShowcase
    },
    {
      id: 35,
      name: "Almond Milk Smoothie Bowl",
      description: "Açaí bowl with fresh fruits and granola",
      price: "₹280",
      category: ['vegan'],
      image: menuShowcase
    },
    {
      id: 36,
      name: "Coconut Macaroons",
      description: "Sweet coconut cookies (dairy-free)",
      price: "₹180",
      category: ['vegan', 'desserts'],
      image: menuShowcase
    },
    {
      id: 37,
      name: "Quinoa Buddha Bowl",
      description: "Nutritious bowl with quinoa, vegetables, and tahini",
      price: "₹320",
      category: ['vegan'],
      image: menuShowcase
    },
    {
      id: 38,
      name: "Chia Seed Pudding",
      description: "Overnight chia pudding with berries and nuts",
      price: "₹220",
      category: ['vegan', 'desserts'],
      image: menuShowcase
    },
    {
      id: 39,
      name: "Avocado Toast",
      description: "Multigrain bread with smashed avocado and herbs",
      price: "₹260",
      category: ['vegan'],
      image: menuShowcase
    },
    {
      id: 40,
      name: "Plant-Based Energy Balls",
      description: "Date and nut energy balls with superfoods",
      price: "₹140",
      category: ['vegan'],
      image: menuShowcase
    },

    // Specialties Category (8 items)
    {
      id: 41,
      name: "Coffee Tasting Flight",
      description: "Three signature espresso shots from different origins",
      price: "₹450",
      category: ['specialties'],
      image: menuShowcase,
      popular: true
    },
    {
      id: 42,
      name: "Siphon Brewing Experience",
      description: "Japanese siphon-brewed single origin coffee",
      price: "₹380",
      category: ['specialties', 'hot'],
      image: menuShowcase
    },
    {
      id: 43,
      name: "Café Mug Signature Blend",
      description: "Our house blend with secret roasting technique",
      price: "₹350",
      category: ['specialties', 'hot'],
      image: menuShowcase
    },
    {
      id: 44,
      name: "Barista's Choice Pour-Over",
      description: "Daily selection prepared by our head barista",
      price: "₹320",
      category: ['specialties', 'hot'],
      image: menuShowcase
    },
    {
      id: 45,
      name: "Coffee Cocktail (Evening)",
      description: "Coffee-based cocktail with premium spirits",
      price: "₹420",
      category: ['specialties', 'cold'],
      image: menuShowcase
    },
    {
      id: 46,
      name: "Dessert Pairing Plate",
      description: "Curated dessert selection with coffee pairing",
      price: "₹520",
      category: ['specialties', 'desserts'],
      image: menuShowcase
    },
    {
      id: 47,
      name: "Latte Art Workshop Drink",
      description: "Interactive latte art session with your drink",
      price: "₹400",
      category: ['specialties', 'hot'],
      image: menuShowcase
    },
    {
      id: 48,
      name: "Coffee Cupping Session",
      description: "Professional coffee tasting with our experts",
      price: "₹500",
      category: ['specialties'],
      image: menuShowcase
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category.includes(activeFilter));

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-5xl font-bold text-foreground mb-6">
            Curated Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of beverages and treats, 
            each prepared with passion and premium ingredients
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 font-elegant ${
                activeFilter === filter.id 
                  ? 'bg-gradient-gold text-accent-foreground' 
                  : 'glass border-accent/30 text-foreground hover:bg-accent/10'
              }`}
            >
              <filter.icon className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-luxury card-hover group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.popular && (
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-elegant text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-luxury text-xl font-bold text-accent">
                    {item.price}
                  </span>
                </div>
                
                <p className="font-elegant text-muted-foreground">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.category.map((cat) => (
                    <Badge key={cat} variant="outline" className="text-xs border-accent/30">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Button className="btn-luxury text-lg px-10 py-4">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;