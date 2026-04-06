import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, BookOpen, Code, Brain, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-illustration.jpg";

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "50+", label: "Courses" },
  { value: "95%", label: "Placement Rate" },
  { value: "100+", label: "Hiring Partners" },
];

const services = [
  { icon: GraduationCap, title: "CRT Training", desc: "Campus Recruitment Training to ace placements with aptitude, reasoning & verbal skills." },
  { icon: Briefcase, title: "Internships", desc: "Hands-on industry internships with real projects and mentorship." },
  { icon: Code, title: "Full Stack Development", desc: "Python, Java, MERN stack — build production-ready web applications." },
  { icon: Brain, title: "AI & Data Science", desc: "Machine Learning, Deep Learning, and data-driven decision making." },
  { icon: Shield, title: "Cyber Security", desc: "Learn ethical hacking, network security, and threat analysis." },
  { icon: BookOpen, title: "Soft Skills", desc: "Communication, leadership, and interview preparation workshops." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="gradient-hero">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                  🚀 Launch Your Tech Career
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                  Build Skills.<br />
                  <span className="text-gradient">Build Future.</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-lg">
                  From CRT training to full stack development, Crestsow equips students with everything they need to land their dream job in tech.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services">
                    <Button variant="hero" size="lg">Explore Courses <ChevronRight size={18} /></Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg">Contact Us</Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden md:block"
              >
                <img
                  src={heroImage}
                  alt="Students learning technology at Crestsow"
                  width={1280}
                  height={800}
                  className="rounded-2xl shadow-2xl animate-float"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="What We Offer"
            title="Our Services"
            subtitle="Comprehensive training programs designed to make you industry-ready from day one."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover border border-border transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <service.icon size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">View All Services <ChevronRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="gradient-hero rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join thousands of students who have transformed their careers with Crestsow's industry-focused training programs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Get Started Today</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
