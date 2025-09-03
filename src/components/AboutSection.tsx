const AboutSection = () => {
  const timeline = [
    { year: "2012", event: "Vision born in Watamu" },
    { year: "2015", event: "Land restored, villas built" },
    { year: "2017", event: "First guests arrived" },
    { year: "Today", event: "100% local team, 100% authentic" },
  ];

  return (
    <section id="story" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              More Than a <span className="text-ocean">Destination</span>
            </h2>
            <p className="text-xl text-coral mb-6">A Living Story</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Before our first guest arrived, this land was sacred. Fishermen sang to the sea. 
              Grandmothers told stories under baobab trees. Coastal Haven was born from that 
              spirit — built with the land, not on it.
            </p>
            <blockquote className="border-l-4 border-coral pl-4 mb-6 italic text-muted-foreground">
              "We don't just welcome guests. We welcome family."
            </blockquote>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every corner of Coastal Haven tells a story of respect for nature, celebration 
              of culture, and commitment to our community. When you stay with us, you become 
              part of this continuing narrative.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Our Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-coral rounded-full" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-8 bg-coral/20" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.year}</p>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;