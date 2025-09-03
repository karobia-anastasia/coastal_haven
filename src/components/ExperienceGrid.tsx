import { Waves, Trees, Utensils, Ship, Palette, Heart, Sun, Star, Music, Camera, Fish, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExperienceGrid = () => {
  const experiences = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Ocean Adventures",
      description: "Snorkeling, diving, and dolphin watching in crystal waters",
      details: "Join our expert guides for unforgettable underwater experiences. Explore vibrant coral reefs, swim with tropical fish, and encounter playful dolphins in their natural habitat.",
      duration: "3-6 hours",
      price: "From $120",
      highlights: ["Professional dive masters", "Equipment included", "Small groups only"]
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Nature Walks",
      description: "Explore mangroves and coastal forests with local guides",
      details: "Discover the rich biodiversity of our coastal ecosystem. Walk through ancient mangrove forests, spot exotic birds, and learn about medicinal plants from indigenous guides.",
      duration: "2-4 hours",
      price: "From $60",
      highlights: ["Wildlife spotting", "Bird watching", "Photography opportunities"]
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Swahili Cuisine",
      description: "Authentic coastal flavors from our chef's family recipes",
      details: "Savor the rich tapestry of Swahili cuisine. Experience cooking classes, taste exotic spices, and enjoy traditional feasts prepared with locally sourced ingredients.",
      duration: "2-3 hours",
      price: "From $80",
      highlights: ["Cooking classes", "Wine pairing", "Chef's table experience"]
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Dhow Sailing",
      description: "Traditional sunset cruises on hand-carved boats",
      details: "Sail into the sunset aboard an authentic dhow. These traditional vessels have plied these waters for centuries. Enjoy refreshments as you watch the sun paint the sky.",
      duration: "2-3 hours",
      price: "From $100",
      highlights: ["Sunset views", "Traditional music", "Refreshments included"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Cultural Tours",
      description: "Visit local villages and learn traditional crafts",
      details: "Immerse yourself in local culture. Visit artisan workshops, learn traditional crafts like basket weaving and pottery, and connect with the warm-hearted coastal communities.",
      duration: "Half day",
      price: "From $90",
      highlights: ["Craft workshops", "Village visits", "Cultural performances"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness & Spa",
      description: "Beachfront yoga and healing treatments",
      details: "Rejuvenate your body and soul with our wellness programs. From sunrise yoga on the beach to traditional healing massages using local ingredients.",
      duration: "1-2 hours",
      price: "From $75",
      highlights: ["Beach yoga", "Massage therapy", "Meditation sessions"]
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Beach Activities",
      description: "Kayaking, paddleboarding, and beach volleyball",
      details: "Make the most of our pristine beaches with exciting water sports and beach activities. Perfect for families and adventure seekers alike.",
      duration: "Flexible",
      price: "From $40",
      highlights: ["Equipment rental", "Professional instruction", "All skill levels"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Stargazing",
      description: "Astronomy sessions under African skies",
      details: "Experience the magic of unpolluted night skies. Our astronomy guide will take you on a journey through constellations, planets, and African star lore.",
      duration: "2 hours",
      price: "From $50",
      highlights: ["Telescope viewing", "Star maps", "African mythology"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Music Nights",
      description: "Traditional taarab and modern fusion performances",
      details: "Enjoy the rhythms of the coast with live music performances. From traditional taarab to contemporary African fusion, experience the soul of coastal music.",
      duration: "Evening",
      price: "Complimentary",
      highlights: ["Local artists", "Dance performances", "Beach bonfire"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography Tours",
      description: "Capture the beauty of the coast with expert guidance",
      details: "Join our photography tours to capture stunning landscapes, wildlife, and cultural moments. Perfect for both beginners and experienced photographers.",
      duration: "3-4 hours",
      price: "From $85",
      highlights: ["Golden hour shoots", "Wildlife photography", "Post-processing tips"]
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Deep Sea Fishing",
      description: "Sport fishing adventures in the Indian Ocean",
      details: "Experience world-class sport fishing in the rich waters of the Indian Ocean. Target marlin, sailfish, tuna, and other game fish with experienced captains.",
      duration: "Half/Full day",
      price: "From $350",
      highlights: ["Professional crew", "Top equipment", "Catch & release option"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Romantic Packages",
      description: "Special experiences for couples",
      details: "Create unforgettable memories with our romantic packages. Private dinners on the beach, couples spa treatments, and sunset picnics in secluded spots.",
      duration: "Customizable",
      price: "From $200",
      highlights: ["Private dining", "Couples spa", "Champagne sunset"]
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Soul-Stirring <span className="text-ocean">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let our coast whisper its secrets to you
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