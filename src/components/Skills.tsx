import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users, Palette, Code, Figma, Sparkles } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Communication", level: 95, icon: MessageCircle, color: "from-primary to-primary-glow" },
    { name: "Teamwork", level: 90, icon: Users, color: "from-secondary to-accent" },
    { name: "UI/UX Design", level: 80, icon: Palette, color: "from-accent to-primary" },
    { name: "HTML & CSS", level: 75, icon: Code, color: "from-primary to-secondary" },
    { name: "Design Tools", level: 85, icon: Figma, color: "from-secondary to-primary" },
    { name: "Creativity", level: 92, icon: Sparkles, color: "from-accent to-secondary" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of people skills and technical abilities to create exceptional experiences
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-card border-border/50">
            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
