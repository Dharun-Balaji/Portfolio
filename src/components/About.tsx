"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { about } = portfolioData.personal;

  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 tracking-tight">About Me</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A little more about who I am and what drives me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">My Journey</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {about.story}
            </p>
          </div>
        </motion.div>

        {/* Interests & Focus */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Interests */}
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="glass-card p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Current Focus</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {about.currentFocus}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
