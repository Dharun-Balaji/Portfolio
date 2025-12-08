"use strict";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-width flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
          dharun.dev
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          
          <div className="h-4 w-px bg-border mx-2" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
