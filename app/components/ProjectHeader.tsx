import { Project } from "@/data/projects";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="border-b border-border pb-6 md:pb-8 mb-6 md:mb-8">
      <div className="flex flex-col gap-1.5 md:gap-2">
        <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted uppercase">
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

