import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground scroll-smooth">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <LiveDemoSection />
          <CaseStudiesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="py-12 px-6 bg-foreground text-background">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-xl">Kogenix AI</span>
            </div>
            <p className="text-background/80 mb-4">
              Think. Build. Evolve. The future of AI automation.
            </p>
            <p className="text-background/60 text-sm">
              © 2024 Kogenix AI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
