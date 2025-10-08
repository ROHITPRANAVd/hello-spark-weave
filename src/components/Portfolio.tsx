import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Redesign",
      description: "Modern, user-friendly shopping experience with intuitive navigation",
      tags: ["UI/UX", "Responsive", "Figma"],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Personal Blog Platform",
      description: "Clean and engaging blog design focused on readability",
      tags: ["HTML/CSS", "Typography", "Minimal"],
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      title: "Restaurant Landing Page",
      description: "Appetizing design with smooth animations and vibrant imagery",
      tags: ["Animation", "Branding", "Interactive"],
      gradient: "from-accent/20 to-secondary/20"
    },
    {
      title: "Fitness App Concept",
      description: "Motivating and energetic interface for workout tracking",
      tags: ["Mobile-First", "UI Design", "Prototype"],
      gradient: "from-primary/20 to-secondary/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              My Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects I've worked on, each with its own unique story
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover-lift hover:shadow-medium cursor-pointer border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/10 group-hover:to-foreground/20 transition-all duration-300" />
                  <ExternalLink className="w-12 h-12 text-foreground/30 group-hover:text-foreground/50 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
