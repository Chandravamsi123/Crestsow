import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Brain, Shield, BookOpen, GraduationCap, Briefcase, Users, Monitor, Lightbulb, Cpu, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const technicalCourses = [
  { icon: Code, title: "Python DSA", desc: "Master Data Structures and Algorithms with Python. Solve 500+ problems for placement prep.", tag: "Popular" },
  { icon: Cpu, title: "Java Programming", desc: "Core Java, OOPs, Collections, and advanced Java for enterprise applications.", tag: null },
  { icon: Globe, title: "Python Full Stack", desc: "Django/Flask backend + React frontend. Build complete web applications from scratch.", tag: "Trending" },
  { icon: Monitor, title: "Java Full Stack", desc: "Spring Boot + Angular/React. Enterprise-grade full stack development.", tag: null },
  { icon: Database, title: "MERN Stack", desc: "MongoDB, Express, React, Node.js — the most in-demand stack in the industry.", tag: "Hot" },
  { icon: Shield, title: "Cyber Security", desc: "Ethical hacking, network security, penetration testing, and security auditing.", tag: null },
  { icon: Brain, title: "AI & Machine Learning", desc: "Neural networks, NLP, Computer Vision. Build intelligent applications.", tag: "Trending" },
  { icon: Lightbulb, title: "Data Science", desc: "Statistics, data analysis, visualization, and predictive modeling with Python.", tag: null },
];

const otherServices = [
  { icon: GraduationCap, title: "CRT Training", desc: "Comprehensive Campus Recruitment Training covering aptitude, logical reasoning, verbal ability, and group discussions to help students ace placement drives." },
  { icon: Briefcase, title: "Internships", desc: "Industry-relevant internship programs with real projects, mentorship from experts, and certification upon completion." },
  { icon: Users, title: "Project Building", desc: "Guided project development with real-world problem statements. Build a strong portfolio with live deployable projects." },
  { icon: BookOpen, title: "Aptitude & Reasoning", desc: "Quantitative aptitude, logical reasoning, and verbal ability classes designed for competitive exams and placements." },
  { icon: Monitor, title: "Online Live Classes", desc: "Interactive live sessions with industry experts. Flexible timings, recorded sessions, and doubt-clearing support." },
  { icon: Lightbulb, title: "Soft Skills Training", desc: "Communication skills, presentation skills, leadership, team management, and interview preparation workshops." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Everything You Need to Succeed"
            subtitle="From foundational skills to advanced specializations, we provide end-to-end training for your tech career."
          />
        </div>
      </section>

      {/* Technical Courses */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">💻 Technical Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCourses.map((course, i) => (
              <motion.div
                key={course.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover border border-border transition-all duration-300 hover:-translate-y-1"
              >
                {course.tag && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full gradient-accent text-accent-foreground text-xs font-semibold">
                    {course.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-lg gradient-secondary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <course.icon size={22} className="text-secondary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-card-foreground mb-2">{course.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">🎯 Training & Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon size={22} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-card-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="gradient-hero rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Can't Decide? Let Us Help!
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Talk to our counselors who will help you choose the right program based on your goals and background.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">Book a Free Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
