"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 opacity-50 dark:opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 text-center md:text-left"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Building digital <br />
          <span className="text-gradient">experiences that matter.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed md:mx-0 mx-auto">
          I&apos;m Dharun, a student developer passionate about building high-performance web applications. 
          I focus on clean code, minimalist design, and exceptional user experiences.
        </p>
        
        <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
          <Link 
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            View Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
