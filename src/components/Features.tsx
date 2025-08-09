import { Search, Bell, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Live Tee Time Availability",
      description: "Real-time access to available tee times across all Vancouver golf courses. Never miss out on the perfect slot again."
    },
    {
      icon: Bell,
      title: "Smart Search Alerts",
      description: "Set up custom notifications for your preferred courses and times. Get instant email alerts when tee times become available."
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly & Fast",
      description: "Book on the go with our lightning-fast mobile experience. Optimized for golfers who need quick, reliable access anywhere."
    }
  ];

  return (
    <section className="py-20 bg-gradient-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose The Birdie Bookr?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make finding and booking tee times effortless, so you can focus on your game.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-golf transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;