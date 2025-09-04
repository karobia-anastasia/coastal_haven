import RoomCard from "./RoomCard";
import { Button } from "@/components/ui/button";

const RoomsSection = () => {
  const rooms = [
    {
      title: "Swahili Suite",
      description: "Elegant suite with carved Lamu doors and ocean breeze",
      price: "Ksh 28,000",
      features: ["Ocean View", "King Bed", "Private Balcony"],
    },
    {
      title: "Baobab Cottage",
      description: "Rustic hideaway shaded by ancient baobab trees",
      price: "Ksh 19,000",
      features: ["Garden View", "Outdoor Lounge", "Rain Shower"],
    },
    {
      title: "Tamu Villa",
      description: "Spacious family villa with coastal charm",
      price: "Ksh 22,500",
      features: ["2 Bedrooms", "Kitchenette", "Hammock Patio"],
    },
    {
      title: "Safari Loft",
      description: "Romantic loft with coastal-safari fusion décor",
      price: "Ksh 17,500",
      features: ["Open Rooftop", "Queen Bed", "Star Gazing Deck"],
    },
  ];

  return (
    <section id="havens" className="py-16 md:py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Your Coastal Haven Awaits
          </h2>
          <p className="text-xl text-coral">
            From Swahili Suites to Stargazing Lofts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          All rooms include: air conditioning, sea or garden views, Swahili breakfast, and free Wi-Fi
        </p>

        <div className="text-center mt-8">
          <a href="#story">
            <Button className="bg-coral hover:bg-coral-light text-foreground">
              Book Your Stay
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
