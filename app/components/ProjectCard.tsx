import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group block transition-all duration-200"
    >
      <div className="flex flex-col">
        {project.thumbnail && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <h3 className="mt-3 text-lg md:text-xl font-sans font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

