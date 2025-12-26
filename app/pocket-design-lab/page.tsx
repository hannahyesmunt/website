import { getProjectsByCategory } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function PocketDesignLabPage() {
  const pocketProjects = getProjectsByCategory("pocket-design-lab");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Pocket Design Lab
          </h1>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Curated personal experimentation projects exploring inclusive design, sustainable materials, and innovative silhouettes.
            </p>
          </div>
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

