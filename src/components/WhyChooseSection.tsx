import { motion } from "framer-motion";
import { Sparkles, Cog, Zap, BarChart3 } from "lucide-react";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Cutting-edge AI",
      description: "Latest machine learning algorithms and neural networks powering our solutions",
      benefits: ["Advanced ML Models", "Neural Networks", "Deep Learning"]
    },
    {
      icon: Cog,
      title: "Custom Automation",
      description: "Tailored AI solutions designed specifically for your business needs and processes",
      benefits: ["Bespoke Solutions", "Industry-Specific", "Scalable Architecture"]
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Rapid implementation with minimal disruption to your existing workflows",
      benefits: ["Quick Setup", "Seamless Integration", "Minimal Downtime"]
    },
    {
      icon: BarChart3,
      title: "Scalable Solutions",
      description: "AI systems that grow with your business and adapt to changing requirements",
      benefits: ["Enterprise Ready", "Cloud Native", "Auto-scaling"]
    }
  ];

  return (
    <section id="why-choose" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Kogenix?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with practical expertise to deliver AI solutions 
            that drive real business transformation and competitive advantage.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-surface rounded-2xl p-8 h-full text-center relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Animated Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -5, 5, 0],
                    transition: { 
                      rotate: { duration: 0.5, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }
                  }}
                  className="w-16 h-16 mx-auto mb-6 bg-foreground rounded-2xl flex items-center justify-center relative z-10 group-hover:shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center text-sm text-muted-foreground"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="w-1.5 h-1.5 bg-foreground/60 rounded-full mr-3 flex-shrink-0"
                        />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-foreground/20 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-foreground/30 rounded-full"
                  animate={{ 
                    y: [0, 5, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with Kogenix AI.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero-primary"
          >
            Start Your AI Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};