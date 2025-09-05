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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExperienceGrid = () => {
  const experiences = [
    {
      // icon: <Waves className="w-8 h-8" />,
      title: "Marine Safari",
      description: "Snorkeling & dolphin-spotting in Kisite-Mpunguti",
      details:
        "Join our local guides to explore coral gardens and swim with dolphins near Wasini Island. Experience the vibrant marine life of Kenya's best-kept underwater secrets.",
      duration: "3–6 hours",
      price: "From Ksh 16,000",
      highlights: ["Park fees included", "Lunch in Wasini", "All gear provided"],
    },
    {
      // icon: <Trees className="w-8 h-8" />,
      title: "Baobab Nature Walk",
      description: "Guided walk under ancient baobab trees in Kilifi",
      details:
        "Discover indigenous flora, sacred trees, and hidden trails along the coastal forest. Learn about traditional plant medicine from Giriama elders.",
      duration: "2–4 hours",
      price: "From Ksh 7,000",
      highlights: ["Local guide", "Medicinal plants", "Bird watching"],
    },
    {
      // icon: <Utensils className="w-8 h-8" />,
      title: "Swahili Cooking Class",
      description: "Hands-on cooking with a Mombasa chef",
      details:
        "Master Swahili dishes like biryani, samaki wa kupaka, and mahamri. A culinary dive into centuries of spice trade heritage.",
      duration: "2–3 hours",
      price: "From Ksh 10,000",
      highlights: ["Cooking + dining", "Spice tour", "Vegetarian options"],
    },
    {
      // icon: <Ship className="w-8 h-8" />,
      title: "Lamu Dhow Cruise",
      description: "Sunset sailing with Swahili music and snacks",
      details:
        "Board a handcrafted dhow and cruise through the Lamu archipelago as the sun dips below the horizon. Includes traditional snacks and tamarind juice.",
      duration: "2–3 hours",
      price: "From Ksh 13,000",
      highlights: ["Live taarab music", "Swahili snacks", "Private options"],
    },
    {
      // icon: <Palette className="w-8 h-8" />,
      title: "Cultural Village Tour",
      description: "Visit a Mijikenda kaya and artisan co-op",
      details:
        "Walk through a UNESCO World Heritage kaya forest and visit a local workshop to see traditional basket weaving and Makuti thatching in action.",
      duration: "Half day",
      price: "From Ksh 9,500",
      highlights: ["Kaya forest", "Cultural exchange", "Craft shopping"],
    },
    {
      // icon: <Heart className="w-8 h-8" />,
      title: "Beachfront Wellness",
      description: "Sunrise yoga and Swahili spa treatments",
      details:
        "Stretch and breathe with ocean views followed by healing massages using coconut oil, baobab balm, and local herbs.",
      duration: "1–2 hours",
      price: "From Ksh 9,000",
      highlights: ["Baobab balm massage", "Yoga mats provided", "Oceanfront"],
    },
    {
      // icon: <Sun className="w-8 h-8" />,
      title: "Watamu Beach Fun",
      description: "Paddleboarding, kayaking & beach games",
      details:
        "Spend the day on turquoise waters or the soft white sands. Great for groups and families looking for playful beach action.",
      duration: "Flexible",
      price: "From Ksh 5,000",
      highlights: ["Equipment rental", "Games setup", "Guided or solo"],
    },
    {
      // icon: <Star className="w-8 h-8" />,
      title: "Diani Stargazing",
      description: "Constellations over the Indian Ocean",
      details:
        "Far from city lights, join our astronomy guide for a tour of the night sky, complete with star lore from coastal tribes.",
      duration: "2 hours",
      price: "From Ksh 6,000",
      highlights: ["Telescope", "Mythology talk", "Night picnic optional"],
    },
    {
      // icon: <Music className="w-8 h-8" />,
      title: "Swahili Music Nights",
      description: "Taarab, chakacha & Afro-fusion under the stars",
      details:
        "Dance barefoot in the sand as local musicians and dancers bring coastal rhythms alive around a bonfire.",
      duration: "Evening",
      price: "Complimentary",
      highlights: ["Live performances", "Bonfire vibes", "Cultural immersion"],
    },
    {
      // icon: <Camera className="w-8 h-8" />,
      title: "Photography Safari",
      description: "Golden hour shoots along ruins and reefs",
      details:
        "Perfect your shots at iconic coastal ruins like Gedi or the Vasco da Gama Pillar, with expert guidance on light and composition.",
      duration: "3–4 hours",
      price: "From Ksh 11,000",
      highlights: ["Editing tips", "Scenic spots", "Wildlife optional"],
    },
    {
      // icon: <Fish className="w-8 h-8" />,
      title: "Indian Ocean Fishing",
      description: "Big game sport fishing from Kilifi or Malindi",
      details:
        "Chase marlin, tuna, and sailfish with seasoned Kenyan crews and world-class gear. Optional catch-and-release.",
      duration: "Half/Full day",
      price: "From Ksh 45,000",
      highlights: ["Top gear", "Pro skippers", "Snacks included"],
    },
    {
      // icon: <Sparkles className="w-8 h-8" />,
      title: "Romantic Experiences",
      description: "Private dinners, picnics & dhow proposals",
      details:
        "From rose-petal setups on secluded beaches to lantern-lit dinners on a dhow — our team helps couples craft magical moments.",
      duration: "Custom",
      price: "From Ksh 25,000",
      highlights: ["Secluded locations", "Champagne", "Proposal planning"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Coastal <span className="text-ocean">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the rhythm, flavors, and soul of Kenya’s Swahili coast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-large transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="text-coral mb-4 group-hover:text-ocean transition-colors">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="text-ocean font-semibold">{exp.price}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Highlights:</p>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-foreground flex items-start">
                        <span className="text-coral mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  variant="default"
                  size="sm"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
