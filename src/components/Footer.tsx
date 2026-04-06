import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Crestsow" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering students with industry-ready skills through comprehensive training, internships, and real-world project experience.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/services", label: "Services" }, { to: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Programs</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>CRT Training</span>
              <span>Internships</span>
              <span>Full Stack Development</span>
              <span>AI & Data Science</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2"><Mail size={16} /> info@crestsow.com</div>
              <div className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> Hyderabad, India</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Crestsow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
