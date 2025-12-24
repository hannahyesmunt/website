import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import ProjectHeader from "@/app/components/ProjectHeader";
import ImageWithCaption from "@/app/components/ImageWithCaption";

function getBackLink(category: "professional" | "technical" | "pocket-design-lab"): string {
  switch (category) {
    case "professional":
      return "/professional";
    case "technical":
      return "/technical-work";
    case "pocket-design-lab":
      return "/pocket-design-lab";
    default:
      return "/";
  }
}

function getCategoryLabel(category: "professional" | "technical" | "pocket-design-lab"): string {
  switch (category) {
    case "professional":
      return "Professional Work";
    case "technical":
      return "Technical Work";
    case "pocket-design-lab":
      return "Pocket Design Lab";
    default:
      return "Portfolio";
  }
}

export default async function ProjectPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const backLink = getBackLink(project.category);
  const categoryLabel = getCategoryLabel(project.category);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background border-b border-accent py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <span className="mr-2">←</span>
              Back to {categoryLabel}
            </Link>
            <h1 className="text-lg font-semibold text-foreground truncate">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <ProjectHeader project={project} />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-foreground/80 leading-relaxed">
            {project.overview}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {project.whatILearned && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What I Learned</h2>
            <p className="text-foreground/80 leading-relaxed">
              {project.whatILearned}
            </p>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <ImageWithCaption
                key={index}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

