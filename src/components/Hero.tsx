import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/30 relative overflow-hidden">
      {/* Background decoration with enhanced animations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-float"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent mb-6 animate-slide-up">
            AI/ML Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transforming Data into Intelligence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            CS Graduate specialized in AI/ML and Data Science. Passionate about building intelligent systems 
            that solve real-world problems through innovative machine learning solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-foreground hover:from-foreground hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-rotate-6">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Mail size={24} />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;