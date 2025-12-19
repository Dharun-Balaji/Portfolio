import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);

  return (
    <div className="container-width">
      <Hero />

      <About />

      <section id="projects" className="section-padding">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of projects I&apos;ve built. Each one taught me something new and pushed my skills further.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              metrics={project.metrics}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      <Skills skills={portfolioData.skills} />

      <Contact />
    </div>
  );
}
