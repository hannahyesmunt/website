import { Project } from "@/data/projects";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="border-b border-border pb-8 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-[0.06em] text-muted uppercase">
          {project.brand && (
            <>
              <span>{project.brand}</span>
              <span className="text-border">•</span>
            </>
          )}
          <span>{project.role}</span>
          <span className="text-border">•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </header>
  );
}

