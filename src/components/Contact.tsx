"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { email, github, linkedin } = portfolioData.personal;

  const socialLinks = [
    { href: github, icon: Github, label: "GitHub" },
    { href: linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${email}`, icon: Mail, label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I&apos;m currently open to new opportunities and collaborations. Whether you
          have a project in mind or just want to say hi, feel free to reach out!
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <a href={`mailto:${email}`}>
              <Send className="w-5 h-5 mr-2" />
              Say Hello
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              asChild
              variant="outline"
              size="lg"
              className="rounded-full w-14 h-14 glass-card hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300"
            >
              <a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
