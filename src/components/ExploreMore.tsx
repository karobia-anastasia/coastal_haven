import {
  Waves,
  Trees,
  Utensils,
  Ship,
  Palette,
  Heart,
  Sun,
  Star,
  Music,
  Camera,
  Fish,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    icon: <Waves className="w-10 h-10 text-ocean" />,
    title: "Marine Safari at Kisite",
    image: "/images/marine-safari.jpg", // optional if you use images
    fullDescription:
      "Dive into Kenya’s premier marine park near Wasini Island. Snorkel among vibrant coral reefs, swim with dolphins, and savor a seafood Swahili lunch in a serene island setting.",
    duration: "3–6 hours",
    price: "From Ksh 16,000",
    highlights: ["Park fees included", "Lunch in Wasini", "All gear provided"],
  },
  {
    icon: <Trees className="w-10 h-10 text-ocean" />,
    title: "Baobab Forest Walk – Kilifi",
    image: "/images/baobab-walk.jpg",
    fullDescription:
      "Walk beneath towering baobabs and learn their sacred significance. Spot hornbills and sunbirds, and hear ancient Giriama stories passed through generations.",
    duration: "2–4 hours",
    price: "From Ksh 7,000",
    highlights: ["Local guide", "Medicinal plants", "Bird watching"],
  },
  {
    icon: <Utensils className="w-10 h-10 text-ocean" />,
    title: "Swahili Cooking Class",
    image: "/images/swahili-cooking.jpg",
    fullDescription:
      "From spicy biryani to freshly fried mahamri, learn how to prepare beloved Swahili dishes with our chef. Visit a local spice market and cook in an open-air kitchen.",
    duration: "2–3 hours",
    price: "From Ksh 10,000",
    highlights: ["Cooking + dining", "Spice tour", "Vegetarian options"],
  },
  // Add more experience objects as needed
];

const ExploreMore = () => {
  return (
    <section id="explore" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore More Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted adventures that connect you with the soul of Kenya’s Swahili coast.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-muted rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:items-center gap-8 p-6 md:p-10"
            >
              {/* Image (optional) */}
              {exp.image && (
                <div className="md:w-1/3">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  {exp.icon}
                  <h2 className="text-2xl font-semibold">{exp.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {exp.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold text-ocean">{exp.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="text-foreground">{item}</li>
                    ))}
                  </ul>
                </div>

                <Button variant="default" className="bg-coral hover:bg-coral-light text-white">
                  Book This Experience
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
