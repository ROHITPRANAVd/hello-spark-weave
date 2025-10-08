import { Heart, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "People First",
      description: "Building genuine connections and understanding user needs is at the heart of everything I do."
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Combining creativity with functionality to design experiences that delight and inspire."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with diverse teams to bring visions to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm passionate about creating meaningful digital experiences that bring people together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 text-center hover-lift hover:shadow-medium bg-gradient-card border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Hi! I'm a web designer who believes that the best websites are built on understanding people. 
                My journey in web design is driven by a genuine love for connecting with others and creating 
                digital spaces that feel welcoming and intuitive.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether I'm learning the latest design trends or collaborating with a team, I'm always eager 
                to grow and help bring ideas to life. Let's create something amazing together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
