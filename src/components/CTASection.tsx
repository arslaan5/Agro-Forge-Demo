import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from './ui/button';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6"
          >
            Looking for Reliable<br />
            <span className="text-accent">Agricultural Machinery?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Partner with Lalwani Industries for quality equipment that stands the test of time. 
            Whether you're a dealer or a farmer, we're here to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="cta" size="xl">
              Become a Dealer
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Request Product Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70"
          >
            <a
              href="tel:+917554000000"
              className="flex items-center gap-3 hover:text-accent transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+91 755 400 0000</span>
            </a>
            <a
              href="https://wa.me/917554000000"
              className="flex items-center gap-3 hover:text-accent transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-medium">WhatsApp Us</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
