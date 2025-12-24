import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProfessionalPage() {
  const professionalProjects = getProjectsByCategory("professional");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-1">
            Professional Work
          </h1>
          <p className="text-foreground/70 mt-4">
            Selected projects from my professional experience in product development and design.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

