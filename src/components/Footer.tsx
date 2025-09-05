import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-driftwood text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sand">Coastal Haven</h3>
            <p className="text-secondary/80">
              Where the ocean meets soul. Experience authentic Kenyan coastal hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sand">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Accommodations", "Experiences", "Gallery"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary/80 hover:text-coral transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sand">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">Watamu, Kenya</span>
              </div>
      
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">bookings@coastalhavenresort.co.ke</span>
              </div>
                <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">info@coastalhavenresort.co.ke</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
          <h3 className="text-xl font-semibold mb-4 text-sand">Coastal Haven Resort</h3>
            <p className="text-secondary/80">
          Karibu <span className="text-coral">Coastal Haven</span>
            </p>
          </div>
        </div>

        <div className="border-t border-sand/20 pt-8 text-center">
          <p className="text-secondary/60">
            © 2025 Coastal Haven. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;