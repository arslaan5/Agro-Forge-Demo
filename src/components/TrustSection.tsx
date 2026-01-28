import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-accent">
      {count}{suffix}
    </div>
  );
};

const stats = [
  { value: 40, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Product Lines' },
  { value: 10000, suffix: '+', label: 'Happy Farmers' },
  { value: 15, suffix: '+', label: 'States Served' },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* India Map Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <MapPin className="w-96 h-96 text-primary" />
        </div>
      </div>

      <div className="container relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Our Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            Serving Farmers Across India
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            From Bhopal to every corner of India, our machinery powers agricultural growth.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-card rounded-2xl shadow-card"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-muted-foreground mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-muted-foreground font-medium">Trusted Credentials:</div>
          {['Made in India', 'Quality Assured', 'Farmer Approved', 'ISO Aligned'].map((badge, index) => (
            <div
              key={index}
              className="px-5 py-3 border-2 border-primary/20 rounded-lg text-foreground font-medium hover:border-primary/40 transition-colors"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
