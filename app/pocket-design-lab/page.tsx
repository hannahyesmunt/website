import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function PocketDesignLabPage() {
  const pocketProjects = getProjectsByCategory("pocket-design-lab");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-1">
            Pocket Design Lab
          </h1>
          <p className="text-muted mt-4">
            Curated personal experimentation projects exploring inclusive design, sustainable materials, and innovative silhouettes.
          </p>
        </header>
        {pocketProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pocketProjects.map((project) => (
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

