import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import ExperienceGrid from "@/components/ExperienceGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <ExperienceGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
