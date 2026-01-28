import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from './ui/button';
import { ArrowRight, Settings, Gauge, Shield } from 'lucide-react';
import cultivatorImg from '@/assets/cultivator.jpg';
import seedDrillImg from '@/assets/seed-drill.jpg';
import trolleyImg from '@/assets/trolley.jpg';
import ploughImg from '@/assets/plough.jpg';

const products = [
  {
    id: 1,
    category: 'Soil Cultivation',
    name: 'Heavy Duty Cultivator',
    description: 'Precision-engineered cultivators for deep soil preparation.',
    image: cultivatorImg,
    specs: ['9-11 Tines', 'Heavy Steel', 'Adjustable Depth'],
  },
  {
    id: 2,
    category: 'Planting Equipment',
    name: 'Multi-Crop Seed Drill',
    description: 'Advanced seed drills for efficient, uniform planting.',
    image: seedDrillImg,
    specs: ['11-15 Rows', 'Fertilizer Box', 'Zero-Till Ready'],
  },
  {
    id: 3,
    category: 'Tractors & Trolleys',
    name: 'Agricultural Trolley',
    description: 'Robust trolleys designed for heavy farm loads.',
    image: trolleyImg,
    specs: ['4-8 Ton Capacity', 'Hydraulic Tipping', 'Steel Body'],
  },
  {
    id: 4,
    category: 'Soil Cultivation',
    name: 'MB Plough & Harrow',
    description: 'Durable ploughs for primary tillage operations.',
    image: ploughImg,
    specs: ['2-4 Bottoms', 'Reversible', 'High Carbon Steel'],
  },
];

const categories = [
  'All Products',
  'Soil Cultivation',
  'Planting Equipment',
  'Tractors & Trolleys',
  'Industrial Products',
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Product Catalog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Agricultural Machinery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of agricultural equipment designed for Indian farming conditions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-primary text-primary-foreground shadow-button'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="product-card bg-card rounded-2xl overflow-hidden shadow-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md flex items-center gap-1"
                    >
                      {specIndex === 0 && <Settings className="w-3 h-3" />}
                      {specIndex === 1 && <Gauge className="w-3 h-3" />}
                      {specIndex === 2 && <Shield className="w-3 h-3" />}
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
