import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@crestsow.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✅",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Contact Us"
            title="Let's Connect"
            subtitle="Have questions about our programs? Want to enroll? We'd love to hear from you."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a student looking for the right course, a college seeking training partnerships, or a company looking for skilled graduates — reach out to us.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card border border-border">
                    <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl gradient-hero text-primary-foreground">
                <h4 className="font-heading font-semibold mb-2">🕐 Working Hours</h4>
                <p className="text-primary-foreground/80 text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-primary-foreground/80 text-sm">Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card shadow-card border border-border space-y-5">
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-2">Send a Message</h3>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell us what you're looking for..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send size={18} /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
