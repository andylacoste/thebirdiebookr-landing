import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/34b93b98-3647-4c92-a870-7774e9da413e.png" 
                alt="The Birdie Bookr logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold">The Birdie Bookr</span>
            </div>
            <p className="text-background/80 leading-relaxed max-w-md">
              Your trusted partner for finding and booking the perfect tee times 
              across Vancouver's premier golf courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Find Tee Times
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Set Alerts
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Golf Courses
                </Button>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Account</h3>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Log In
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Sign Up
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-background/80 hover:text-background p-0 h-auto">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 The Birdie Bookr. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="text-background/60 hover:text-background p-0 h-auto text-sm">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-background/60 hover:text-background p-0 h-auto text-sm">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;