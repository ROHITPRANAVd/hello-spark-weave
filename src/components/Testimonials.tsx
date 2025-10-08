import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      text: "Working with [Your Name] has been a delight. Their ability to understand our vision and translate it into beautiful designs is remarkable. Plus, they're an excellent communicator!",
      gradient: "from-primary/10 to-accent/10"
    },
    {
      name: "Michael Chen",
      role: "Team Lead",
      text: "Not only are they talented in design, but their collaborative spirit makes every project smooth and enjoyable. They bring positivity and creativity to the team.",
      gradient: "from-secondary/10 to-primary/10"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      text: "Their dedication to learning and growing is inspiring. They're always eager to tackle new challenges and bring fresh perspectives to our design discussions.",
      gradient: "from-accent/10 to-secondary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Others Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kind words from colleagues and collaborators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-8 hover-lift hover:shadow-medium bg-gradient-to-br ${testimonial.gradient} border-border/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
