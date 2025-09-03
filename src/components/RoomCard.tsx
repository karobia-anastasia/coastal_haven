import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageUrl?: string;
}

const RoomCard = ({ title, description, price, features }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-large transition-shadow duration-300 bg-card">
      <div className="h-48 bg-gradient-ocean" />
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="bg-sand text-foreground">
              {feature}
            </Badge>
          ))}
        </div>
        <p className="text-lg font-semibold text-coral">From {price}/night</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;