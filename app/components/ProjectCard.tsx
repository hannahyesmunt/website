import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isVertical = project.category === "professional" || project.category === "technical";
  const aspectClass = isVertical ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <Link
      href={`/project/${project.slug}`}
      className="group block transition-all duration-200"
    >
      <div className="flex flex-col">
        {project.thumbnail && (
          <div className={`${aspectClass} overflow-hidden rounded-md md:rounded-lg border border-border bg-surface`}>
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              width={1000}
              height={isVertical ? 1333 : 750}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200 object-center"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        )}
        <h3 className="mt-2 md:mt-3 text-xs md:text-base font-sans font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        {project.category === "professional" && project.brand && (
          <span className="mt-0.5 md:mt-1 text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted">
            {project.brand}
          </span>
        )}
        {project.category === "pocket-design-lab" && project.role && (
          <span className="mt-0.5 md:mt-1 text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted">
            {project.role}
          </span>
        )}
      </div>
    </Link>
  );
}

