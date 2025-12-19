"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  metrics: string[];
  featured?: boolean;
}

export function ProjectCard({
  index,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  metrics,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-6 h-full flex flex-col hover-lift group-hover:border-primary/30 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {githubUrl && githubUrl !== "#" && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary/10"
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && liveUrl !== "#" && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary/10"
              >
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {metrics.map((metric) => (
            <Badge
              key={metric}
              variant="secondary"
              className="text-xs font-medium bg-primary/10 text-primary border-0"
            >
              {metric}
            </Badge>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
