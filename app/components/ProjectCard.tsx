import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="block border border-accent/30 rounded-lg p-6 bg-background hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-200"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground leading-tight">
            {project.title}
          </h3>
          <span className="text-sm text-foreground/50 whitespace-nowrap flex-shrink-0">
            {project.year}
          </span>
        </div>
        {project.brand && (
          <p className="text-sm font-medium text-foreground/80">
            {project.brand}
          </p>
        )}
        <p className="text-sm text-foreground/70">
          {project.role}
        </p>
      </div>
    </Link>
  );
}

