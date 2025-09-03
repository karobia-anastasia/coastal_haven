import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-sand" />
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--ocean) / 0.1)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground animate-slide-in">
          Karibu <span className="text-coral">Coastal Haven</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-in" style={{ animationDelay: "0.1s" }}>
          Where Every Tide Tells a Story
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          Let the ocean breeze carry you to a place where time slows, the Swahili sun 
          kisses your skin, and your soul begins to dance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <a href="#story">
            <Button size="lg" className="bg-coral hover:bg-coral-light text-foreground">
              Begin Your Coastal Story
            </Button>
          </a>
          <a href="#story">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Watch the Sunset
            </Button>
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
      <a href="#story">
          <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
      </div>
    </section>
  );
};

export default Hero;