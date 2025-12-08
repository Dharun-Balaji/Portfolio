export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 mt-20 bg-background/50 backdrop-blur-sm">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Dharun. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
