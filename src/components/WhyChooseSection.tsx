import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Shield, 
  Users, 
  IndianRupee, 
  Award, 
  Headphones, 
  CheckCircle2 
} from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Quality-Tested Steel',
    description: 'Every component undergoes rigorous testing for strength and durability.',
  },
  {
    icon: Users,
    title: 'Experienced Engineers',
    description: 'Our team brings decades of agricultural machinery expertise.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Premium quality at competitive prices designed for Indian farmers.',
  },
  {
    icon: Award,
    title: 'Trusted by Farmers',
    description: 'Thousands of satisfied farmers across India rely on our equipment.',
  },
  {
    icon: Headphones,
    title: 'After-Sales Support',
    description: 'Comprehensive service network ensuring peace of mind.',
  },
  {
    icon: CheckCircle2,
    title: 'ISO Quality Approach',
    description: 'Manufacturing processes aligned with international standards.',
  },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Our Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold mt-2"
          >
            Why Choose Lalwani Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto"
          >
            Six reasons why farmers across India trust us for their agricultural machinery needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:border-accent/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{reason.title}</h3>
              <p className="text-primary-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
