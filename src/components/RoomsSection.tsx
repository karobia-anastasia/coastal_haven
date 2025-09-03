import RoomCard from "./RoomCard";
import { Button } from "@/components/ui/button";

const RoomsSection = () => {
  const rooms = [
    {
      title: "Dhow Suite",
      description: "Oceanfront luxury with driftwood design",
      price: "$250",
      features: ["Ocean View", "King Bed", "Private Terrace"],
    },
    {
      title: "Palm House",
      description: "Family-friendly villa with hammock terrace",
      price: "$180",
      features: ["Garden View", "2 Bedrooms", "Kitchen"],
    },
    {
      title: "Stargazer Hut",
      description: "Romantic eco-hut with lantern lighting",
      price: "$150",
      features: ["Skylight", "Queen Bed", "Outdoor Shower"],
    },
    {
      title: "Coral Villa",
      description: "Coral stone luxury meets tradition",
      price: "$350",
      features: ["Sea View", "Suite", "Private Pool"],
    },
  ];

  return (
    <section id="havens" className="py-16 md:py-24 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Stay Your Way
          </h2>
          <p className="text-xl text-coral">Each Room, a Coastal Poem</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
        
        <p className="text-center text-muted-foreground">
          All rooms include: AC, sea or garden views, and breakfast
        </p>
        
        <div className="text-center mt-8">
          <a href="#story">          
            <Button className="bg-coral hover:bg-coral-light text-foreground">
            Book Your Stay
          </Button></a>

        </div>
      </div>
    </section>
  );
};

export default RoomsSection;