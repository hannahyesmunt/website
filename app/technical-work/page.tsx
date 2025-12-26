import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function TechnicalWorkPage() {
  const technicalProjects = getProjectsByCategory("technical");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 md:py-12 max-w-7xl">
        <header className="mb-10 md:mb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
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

