import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Solutions",
      avatar: "SC",
      rating: 5,
      content: "Kogenix AI transformed our hiring process completely. The AI interview system reduced our time-to-hire by 75% while maintaining exceptional candidate quality. It's been a game-changer for our HR department.",
      industry: "Technology"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Healthcare Dynamics",
      avatar: "MR",
      rating: 5,
      content: "The healthcare AI assistant has revolutionized our patient care workflow. The diagnostic accuracy and speed of response have significantly improved our service quality and patient satisfaction scores.",
      industry: "Healthcare"
    },
    {
      name: "Emily Watson",
      role: "Chief Data Officer",
      company: "Financial Insights Inc",
      avatar: "EW",
      rating: 5,
      content: "Kogenix's financial analytics AI has given us unprecedented insights into market trends. Our ROI improved by 40% within the first quarter of implementation. The predictive analytics are incredibly accurate.",
      industry: "Finance"
    },
    {
      name: "David Park",
      role: "Head of Customer Success",
      company: "RetailPro Solutions",
      avatar: "DP",
      rating: 5,
      content: "The AI customer support chatbot handles 80% of our queries automatically, allowing our team to focus on complex issues. Customer satisfaction has increased dramatically since implementation.",
      industry: "Retail"
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "HealthSync", logo: "HS" },
    { name: "FinanceAI", logo: "FA" },
    { name: "RetailPro", logo: "RP" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudTech", logo: "CT" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Kogenix AI has helped businesses across industries achieve 
            remarkable results and drive innovation.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-surface rounded-3xl p-8 md:p-12"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-6 bg-foreground/10 rounded-full flex items-center justify-center"
                >
                  <Quote className="w-8 h-8 text-foreground/60" />
                </motion.div>

                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </motion.div>

                {/* Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90"
                >
                  "{testimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-foreground w-6' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-surface rounded-full flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-16 h-16 glass-surface rounded-xl flex items-center justify-center font-bold text-foreground/60 hover:text-foreground transition-colors">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};