import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aussie Tom",
      role: "Avid Golfer",
      content: "Finally, a way to find last-minute tee times! I'm never prepared so this app is a life saver.",
      rating: 5
    },
    {
      name: "Lucas F",
      role: "Weekend Warrior",
      content: "The Birdie Bookr has completely changed how I book golf. Another brilliant app from the Birdie Bookr team.",
      rating: 5
    },
    {
      name: "Brick Bickus",
      role: "Golf Enthusiast",
      content: "Having access to all the courses in one place is amazing. Whoever made the app is a genius, smartest man alive.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-fairway">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Golfers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join satisfied golfers who've transformed their booking experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft bg-background/95 backdrop-blur-sm hover:shadow-golf transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;