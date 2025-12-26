import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProfessionalPage() {
  const professionalProjects = getProjectsByCategory("professional");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 md:py-12 max-w-7xl">
        <header className="mb-10 md:mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Professional Work
          </h1>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Selected projects from my professional experience in product development and design.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

