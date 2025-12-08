import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="container-width">
      <Hero />
      
      <section id="projects" className="section-padding">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </section>

      <Skills skills={portfolioData.skills} />
      
      <section id="contact" className="section-padding max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">Get in Touch</h2>
        <p className="text-xl text-muted-foreground mb-8">
          I&apos;m currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <a 
          href={`mailto:${portfolioData.personal.email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
