import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="block border border-border rounded-lg p-6 bg-surface hover:border-accent hover:shadow-sm transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground leading-tight">
            {project.title}
          </h3>
          <span className="text-sm text-muted whitespace-nowrap flex-shrink-0">
            {project.year}
          </span>
        </div>
        {project.brand && (
          <p className="text-sm font-medium text-foreground">
            {project.brand}
          </p>
        )}
        <p className="text-sm text-muted">
          {project.role}
        </p>
      </div>
    </Link>
  );
}

