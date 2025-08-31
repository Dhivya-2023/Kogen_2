import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Users, 
  Cog, 
  PenTool, 
  Heart, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "AI Interviews",
      description: "Smart recruitment with AI-powered interview automation and candidate assessment.",
      features: ["Automated Screening", "Bias-Free Assessment", "Real-time Analytics"],
      status: "Live Project"
    },
    {
      icon: MessageCircle,
      title: "AI Customer Support",
      description: "24/7 intelligent chatbots that understand, respond, and resolve customer queries.",
      features: ["Live Chat Integration", "Multi-language Support", "Sentiment Analysis"],
      status: "Available Now"
    },
    {
      icon: Cog,
      title: "AI Business Automation",
      description: "End-to-end process automation that transforms workflows and boosts productivity.",
      features: ["Workflow Optimization", "Data Processing", "Task Automation"],
      status: "Enterprise Ready"
    },
    {
      icon: PenTool,
      title: "AI Content & Marketing",
      description: "Content generation, SEO optimization, and marketing campaigns powered by AI.",
      features: ["Content Creation", "SEO Optimization", "Campaign Analytics"],
      status: "Beta Access"
    },
    {
      icon: Heart,
      title: "AI Healthcare Solutions",
      description: "Medical diagnosis assistance, patient monitoring, and healthcare data analysis.",
      features: ["Diagnostic Support", "Patient Monitoring", "Data Analytics"],
      status: "In Development"
    },
    {
      icon: TrendingUp,
      title: "AI Finance & Analytics",
      description: "Financial forecasting, risk assessment, and advanced analytics for data-driven decisions.",
      features: ["Financial Modeling", "Risk Analysis", "Predictive Analytics"],
      status: "Coming Soon"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations 
            and unlock new possibilities across every industry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-surface rounded-2xl p-8 h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-foreground/10 text-foreground/70">
                    {service.status}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 mb-6 bg-foreground rounded-2xl flex items-center justify-center group-hover:shadow-lg relative z-10"
                >
                  <service.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-foreground font-medium group-hover:text-foreground transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};