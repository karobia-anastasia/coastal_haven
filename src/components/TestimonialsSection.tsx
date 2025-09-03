import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Coastal Haven isn't just a place to stay, it's a journey into the soul of the Kenyan coast. The warmth of the staff, the beauty of the location, and the authenticity of the experience left us transformed.",
      rating: 5,
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      text: "We've traveled the world, but nowhere has captured our hearts like this. The sunset dhow cruise, the incredible food, and the genuine hospitality made this our most memorable vacation.",
      rating: 5,
    },
    {
      name: "Yuki Tanaka",
      location: "Tokyo, Japan",
      text: "The perfect blend of luxury and authenticity. Waking up to ocean views, enjoying fresh seafood, and learning about local culture made every moment special.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Stories from Our <span className="text-coral">Family</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 md:p-12 shadow-large">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-coral fill-current" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div>
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;