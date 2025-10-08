import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-accent/20" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Hi, I'm ROHIT PRANAV D
            </h1>
            <p className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
              A People-Centered Web Designer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Combining my passion for connecting with people and creating beautiful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 text-lg px-8 hover:bg-card/80"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
