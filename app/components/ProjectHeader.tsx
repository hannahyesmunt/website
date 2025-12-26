import { Project } from "@/data/projects";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="border-b border-accent pb-8 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {project.brand && (
            <>
              <span>{project.brand}</span>
              <span>•</span>
            </>
          )}
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </header>
  );
}

