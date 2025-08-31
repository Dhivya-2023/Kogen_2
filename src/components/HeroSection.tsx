import { motion } from "framer-motion";
import { ArrowDown, Brain, Zap } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface mb-8"
        >
          <Brain className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">AI Innovation • Neural Evolution</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          Think.{" "}
          <span className="inline-block">
            Build.
          </span>{" "}
          <span className="inline-block">
            Evolve.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Kogenix.ai is pioneering the future of artificial intelligence with 
          neural-driven solutions that transform industries and elevate human potential.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <button className="btn-hero-primary group">
            <span>Get Started</span>
            <Zap className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </button>
          <button className="btn-hero-ghost">
            Explore AI Services
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-2 h-2 border border-foreground/20 rounded-full"
        />
      </div>
      
      <div className="absolute right-8 top-1/3 hidden lg:block">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-1 h-1 bg-foreground/30 rounded-full"
        />
      </div>
    </section>
  );
};