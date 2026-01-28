import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProfessionalPage() {
  const professionalProjects = getProjectsByCategory("professional");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
        <header className="mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
            Professional
          </span>
          <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight mb-4 md:mb-6">
            Professional Work
          </h1>
          <div className="max-w-2xl">
            <p className="text-xs md:text-base text-muted leading-relaxed">
              Selected projects from my professional experience in product development and design.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

