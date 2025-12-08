"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  index: number;
}

export function ProjectCard({ title, description, tech, link, github, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-2xl glass-card hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative flex flex-col h-full justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
            <div className="flex gap-3">
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-4">
          {tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
