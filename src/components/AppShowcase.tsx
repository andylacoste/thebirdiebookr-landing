import appMockup from "@/assets/app-mockup.jpg";

const AppShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Booking Made
              <span className="text-primary block">Simple</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our intuitive interface makes finding and booking tee times a breeze. 
              Browse available slots, compare prices, and secure your preferred time 
              in just a few taps.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Instant Search Results</h4>
                  <p className="text-muted-foreground">See all available times across Vancouver courses in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Smart Filtering</h4>
                  <p className="text-muted-foreground">Filter by course, time, price, and player preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground">One-Click Booking</h4>
                  <p className="text-muted-foreground">Secure your tee time instantly with our streamlined checkout</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={appMockup} 
                alt="The Birdie Bookr app interface" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-fairway rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-hero rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;