import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 AI/ML Portfolio. Built with passion for intelligent solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
