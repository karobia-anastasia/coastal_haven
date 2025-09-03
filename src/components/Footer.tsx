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
              {["About Us", "Accommodations", "Experiences", "Gallery", "Blog"].map((link) => (
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
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">Watamu, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral" />
                <span className="text-secondary/80">info@coastalhaven.ke</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sand">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-sand/10 rounded-full flex items-center justify-center hover:bg-coral/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-sand" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-sand/20 pt-8 text-center">
          <p className="text-secondary/60">
            © 2024 Coastal Haven. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;