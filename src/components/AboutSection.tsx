import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Users, Wrench, Target } from 'lucide-react';

const timelineItems = [
  {
    year: '1980s',
    title: 'Foundation',
    description: 'Lalwani Industries was established with a vision to empower Indian farmers with quality machinery.',
  },
  {
    year: '1995',
    title: 'Expansion',
    description: 'Expanded product line to include advanced cultivators and ploughs.',
  },
  {
    year: '2010',
    title: 'Modernization',
    description: 'Upgraded manufacturing facility with modern CNC machines and quality testing labs.',
  },
  {
    year: 'Today',
    title: 'Industry Leader',
    description: 'Serving farmers across India with 50+ products and a network of trusted dealers.',
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2"
          >
            About Lalwani Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Four decades of engineering excellence, serving the backbone of India – our farmers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-12 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <span className="text-accent font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-display font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Values & Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-card mb-8"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, title: 'Quality First', desc: 'ISO 9001 approach' },
                  { icon: Users, title: 'Farmer Focus', desc: 'Built for real needs' },
                  { icon: Wrench, title: 'Engineering', desc: 'Precision crafted' },
                  { icon: Target, title: 'Reliability', desc: 'Built to last' },
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Leadership</h3>
              <div className="space-y-4">
                {[
                  { name: 'M.N. Lalwani', role: 'Director', desc: 'Founding visionary with 40+ years in agricultural machinery.' },
                  { name: 'Harish Lalwani', role: 'Partner', desc: 'Leading innovation and modern manufacturing practices.' },
                ].map((leader, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-display font-bold text-lg">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{leader.name}</h4>
                      <p className="text-sm text-accent font-medium">{leader.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">{leader.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
