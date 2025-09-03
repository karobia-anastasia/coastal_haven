import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      alt: "Luxury Pool View",
      category: "Resort",
      title: "Infinity Pool at Sunset"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      alt: "Beach View",
      category: "Beach",
      title: "Private Beach Access"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      alt: "Suite Interior",
      category: "Rooms",
      title: "Ocean View Suite"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      alt: "Dining Experience",
      category: "Dining",
      title: "Beachfront Restaurant"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      alt: "Spa Treatment",
      category: "Wellness",
      title: "Luxury Spa Treatment"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      alt: "Beach Activities",
      category: "Activities",
      title: "Water Sports Paradise"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      alt: "Garden View",
      category: "Resort",
      title: "Tropical Gardens"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      alt: "Couple Experience",
      category: "Experiences",
      title: "Romantic Getaway"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80",
      alt: "Dhow Sailing",
      category: "Activities",
      title: "Traditional Dhow Cruise"
    }
  ];

  const categories = ["All", "Resort", "Beach", "Rooms", "Dining", "Wellness", "Activities", "Experiences"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Visual <span className="text-ocean">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the beauty of our coastal paradise through these moments
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden hover:shadow-large transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-ocean mb-1">{image.category}</p>
                    <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Navigation Controls */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  disabled={selectedImage === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  disabled={selectedImage === filteredImages.length - 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <p className="text-sm font-medium text-ocean mb-1">
                    {filteredImages[selectedImage].category}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {filteredImages[selectedImage].title}
                  </h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;