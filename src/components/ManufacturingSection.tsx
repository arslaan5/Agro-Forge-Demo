import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lightbulb, Layers, Factory, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Design',
    description: 'CAD-based precision engineering tailored to Indian farming conditions.',
  },
  {
    icon: Layers,
    title: 'Material Selection',
    description: 'High-grade steel and components sourced from certified suppliers.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'State-of-the-art CNC machines ensuring consistent quality.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    description: 'Multi-point inspection before every product leaves our facility.',
  },
];

const ManufacturingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-steel">
      <div className="container">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Manufacturing Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            From concept to delivery, every step is optimized for quality and durability.
          </motion.p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-card shadow-card-hover flex items-center justify-center mb-4 border-4 border-accent">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 bg-card rounded-2xl shadow-card"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground mt-2">Every machine tested for field-ready performance</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['ISO 9001 Aligned', 'Steel Grade Certified', 'Field Tested'].map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-display font-bold text-accent">99%</div>
              <p className="text-muted-foreground text-sm">Customer Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
