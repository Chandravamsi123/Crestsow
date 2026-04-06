import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We're on a mission to bridge the gap between academic learning and industry expectations." },
  { icon: Eye, title: "Innovation", desc: "Constantly updating curriculum to match the latest industry trends and technologies." },
  { icon: Heart, title: "Student-First", desc: "Every decision we make puts student success and growth at the center." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in training quality and mentorship." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="About Us"
            title="Shaping the Future of Tech Education"
            subtitle="Crestsow was founded with one goal — to empower every student with the skills, confidence, and experience needed to succeed in the tech industry."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div {...fadeUp}>
              <img
                src={aboutImage}
                alt="Crestsow team collaborating"
                width={1024}
                height={768}
                className="rounded-2xl shadow-card"
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-foreground">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crestsow is an edutech company dedicated to providing comprehensive training solutions for students aspiring to build successful careers in technology. We offer a wide range of programs including Campus Recruitment Training (CRT), internships, real-world project building, and online classes across multiple domains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expert instructors bring years of industry experience, ensuring that every student receives practical, job-ready skills. From aptitude and reasoning to advanced technical domains like AI/ML and Cyber Security, we cover it all.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-2xl font-heading font-bold text-secondary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Trainers</div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-secondary">20+</div>
                  <div className="text-sm text-muted-foreground">College Partners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Our Values" title="What Drives Us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card shadow-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-secondary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-card-foreground mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
