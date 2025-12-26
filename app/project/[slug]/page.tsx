import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import ProjectHeader from "@/app/components/ProjectHeader";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import SpecBlock from "@/app/components/SpecBlock";

const PolishDivider = () => <div className="my-8 md:my-10 border-t border-border" />;

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

  // Special layout for Beyond The Bikini Case Study
  if (slug === "case-study-beyond-the-bikini") {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-20 bg-background border-b border-border py-4">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center justify-between gap-4">
              <Link
                href={backLink}
                className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors"
              >
                <span className="mr-2 text-accent">←</span>
                Back to {categoryLabel}
              </Link>
              <h1 className="text-lg font-semibold text-foreground truncate">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 mt-2">
            {project.title}
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>

          {project.specs && <SpecBlock items={project.specs} />}
          
          <PolishDivider />

          {project.designGoals && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Design Goals</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground/90">
                {project.designGoals.map((goal, index) => (
                  <li key={index} className="leading-relaxed">{goal}</li>
                ))}
              </ul>
            </section>
          )}

          <PolishDivider />

          {project.features && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Material & Technical Features</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground/90">
                {project.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </section>
          )}

          <PolishDivider />

          {project.process && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Process & Approach</h2>
              <ul className="list-disc list-inside space-y-3 text-foreground/90">
                {project.process.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ul>
            </section>
          )}

          <PolishDivider />

          {project.outcome && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Outcome</h2>
              <p className="text-foreground/90 leading-relaxed">
                {project.outcome}
              </p>
            </section>
          )}

          <div className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Documentation & Imagery</h2>
            <div className="grid grid-cols-1 gap-8">
              {project.images.map((image, index) => (
                <ImageWithCaption
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="mr-2 text-accent">←</span>
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
          <p className="text-foreground leading-relaxed">
            {project.overview}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4 border-l-2 border-accent pl-4">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4 border-l-2 border-accent pl-4">Skills</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {project.skills.map((skill, index) => (
              <li key={index} className="px-3 py-1 bg-surface border border-border rounded-full text-muted">{skill}</li>
            ))}
          </ul>
        </section>

        {project.whatILearned && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4 border-l-2 border-accent pl-4">What I Learned</h2>
            <p className="text-muted leading-relaxed italic bg-surface p-6 border-l-4 border-accent rounded-r-lg">
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

