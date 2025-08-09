import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/34b93b98-3647-4c92-a870-7774e9da413e.png" 
              alt="The Birdie Bookr logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">The Birdie Bookr</span>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Log In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;