import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NeuralBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(initialParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural Grid */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r="1"
            fill="currentColor"
            className="text-foreground/20"
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.id * 0.1,
            }}
          />
        ))}
        
        {/* Connection Lines */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-foreground/10"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-foreground/5 via-transparent to-transparent" />
    </div>
  );
};