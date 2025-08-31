import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const missions = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of AI technology"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamlining processes with intelligent solutions"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Building systems that grow with your business"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Kogenix</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kogenix.ai is a next-gen AI automation company creating smart solutions across industries. 
            We transform businesses through cutting-edge artificial intelligence, empowering organizations 
            to achieve unprecedented efficiency and innovation.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-surface rounded-2xl p-8 h-full text-center hover:shadow-2xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 mx-auto mb-6 bg-foreground rounded-2xl flex items-center justify-center group-hover:shadow-lg"
                >
                  <mission.icon className="w-8 h-8 text-background" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "100+", label: "AI Solutions Deployed" },
            { number: "50+", label: "Industries Served" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "AI Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};