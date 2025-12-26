import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function TechnicalWorkPage() {
  const technicalProjects = getProjectsByCategory("technical");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Technical Work
          </h1>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Technical design, patternmaking, and garment construction projects from LATTC coursework.
            </p>
          </div>
        </header>
        {technicalProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted">Coming soon.</p>
        )}
      </div>
    </div>
  );
}

