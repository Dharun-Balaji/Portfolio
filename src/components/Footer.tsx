"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-12 mt-12">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by {portfolioData.personal.name.split(" ")[0]}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">&copy; {new Date().getFullYear()}</span>
          </div>

          {/* Tech Stack */}
          <div className="text-sm text-muted-foreground">
            <span className="text-gradient font-medium">Next.js</span>
            {" • "}
            <span className="text-gradient font-medium">Bun</span>
            {" • "}
            <span className="text-gradient font-medium">shadcn/ui</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full w-10 h-10 glass-card hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
