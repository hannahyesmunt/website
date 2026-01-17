import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectHeader from "@/app/components/ProjectHeader";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import SpecBlock from "@/app/components/SpecBlock";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

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
      return "Professional";
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

  // Special layout for CORPCORE
  if (slug === "corpcore") {
    // Hero images array
    const heroImages: { src: string; alt: string; caption?: string }[] = [
      { src: "/images/corpcore/hero/Corpcore2001-0771_expsr.jpg", alt: "CORPCORE editorial image", caption: "" },
      { src: "/images/corpcore/hero/Corpcore2001-1236_expsr.jpg", alt: "CORPCORE editorial image", caption: "" },
      { src: "/images/corpcore/hero/corpLadderDepartment1.jpg", alt: "CORPCORE Corporate Ladder Department", caption: "" },
      { src: "/images/corpcore/hero/corpLadderDepartment2.jpg", alt: "CORPCORE Corporate Ladder Department", caption: "" },
      { src: "/images/corpcore/hero/corporateAthlete1.jpg", alt: "CORPCORE Corporate Athlete", caption: "" },
      { src: "/images/corpcore/hero/corporateAthlete2.jpg", alt: "CORPCORE Corporate Athlete", caption: "" },
      { src: "/images/corpcore/hero/corporateAthlete3.jpg", alt: "CORPCORE Corporate Athlete", caption: "" },
      { src: "/images/corpcore/hero/intern1.jpg", alt: "CORPCORE Intern", caption: "" },
      { src: "/images/corpcore/hero/intern2.jpg", alt: "CORPCORE Intern", caption: "" },
      { src: "/images/corpcore/hero/IThelp1.jpg", alt: "CORPCORE IT Help", caption: "" },
      { src: "/images/corpcore/hero/IThelp2.jpg", alt: "CORPCORE IT Help", caption: "" },
      { src: "/images/corpcore/hero/IThelp3.jpg", alt: "CORPCORE IT Help", caption: "" },
      { src: "/images/corpcore/hero/Mr.Corp1.jpg", alt: "CORPCORE Mr. Corp", caption: "" },
      { src: "/images/corpcore/hero/Mr.Corp2.jpg", alt: "CORPCORE Mr. Corp", caption: "" },
      { src: "/images/corpcore/hero/secretarysitwear1.jpg", alt: "CORPCORE Secretary Sitwear", caption: "" },
      { src: "/images/corpcore/hero/secretarysitwear2.jpg", alt: "CORPCORE Secretary Sitwear", caption: "" },
      { src: "/images/corpcore/hero/tieGuy1.jpg", alt: "CORPCORE Tie Guy", caption: "" },
      { src: "/images/corpcore/hero/tieGuy2.jpg", alt: "CORPCORE Tie Guy", caption: "" },
      { src: "/images/corpcore/hero/tieGuy3.jpg", alt: "CORPCORE Tie Guy", caption: "" },
    ];

    // Ideation / Moodboard images array
    const ideationImages: { src: string; alt: string; caption?: string }[] = [
      { src: "/images/corpcore/process/PNG image.jpeg", alt: "CORPCORE ideation and moodboard", caption: "" },
    ];

    // Process images array
    const processImages: { src: string; alt: string; caption?: string }[] = [
      { src: "/images/corpcore/process/Corpcore_LeighAnnCobb-151.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Corpcore_LeighAnnCobb-154 (1).jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_5640.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_6575.jpg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_6579.jpg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_8955.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_8999.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/IMG_9393.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/PNG image (1).jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-2-gDONG.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-2-OCkiG.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-2-OGjeD.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-2-wxw22 (1).jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-2-wxw22.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-3.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-4-LYWb1.jpeg", alt: "CORPCORE process documentation", caption: "" },
      { src: "/images/corpcore/process/Unknown-5-7h7lV.jpeg", alt: "CORPCORE process documentation", caption: "" },
    ];

    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between gap-4">
              <Link
                href={backLink}
                className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors py-1 px-2 -ml-2"
              >
                <span className="mr-2 text-accent">←</span>
                <span className="hidden sm:inline">Back to {categoryLabel}</span>
                <span className="sm:hidden text-xs uppercase font-mono tracking-wider">Back</span>
              </Link>
              <h1 className="text-sm md:text-lg font-bold text-foreground truncate max-w-[200px] md:max-w-none uppercase font-mono tracking-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 md:py-16 max-w-5xl">
          {/* Project Header */}
          <div className="max-w-3xl mb-10 md:mb-12">
            <header className="border-b border-border pb-8 mb-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-[0.06em] text-muted uppercase">
                  <span>{project.role}</span>
                </div>
              </div>
            </header>

            {/* Overview */}
            <div className="max-w-2xl mb-10 md:mb-12">
              <p className="text-xs md:text-sm text-foreground leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </div>

            {/* My Contributions */}
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">My Contributions</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  Co-developed the creative concept and world narrative, led look development and styling direction, and supported garment/prop execution and storytelling from early ideation through final imagery.
                </p>
              </div>
            </section>
          </div>

          {/* Hero Gallery */}
          <div className="mt-16 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Hero Gallery</h2>
            {heroImages.length > 0 ? (
              <div className="columns-2 md:columns-3 gap-3 md:gap-2">
                {heroImages.map((image, index) => (
                  <div key={index} className="mb-4 md:mb-2 break-inside-avoid">
                    <figure className="mb-0">
                      <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={900}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="mt-3 px-2 text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
              </div>
            ) : (
              <div className="columns-2 md:columns-3 gap-3 md:gap-2">
                <div className="mb-4 md:mb-2 break-inside-avoid">
                  <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border aspect-[4/3] flex items-center justify-center">
                    <p className="text-xs font-mono tracking-[0.06em] text-muted">Hero images placeholder</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ideation / Moodboard */}
          <div className="mt-16 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Ideation / Moodboard</h2>
            {ideationImages.length > 0 ? (
              <div className="max-w-4xl">
                {ideationImages.map((image, index) => (
                  <figure key={index} className="mb-0">
                    <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1200}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="mt-3 px-2 text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="max-w-4xl">
                <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border aspect-[4/3] flex items-center justify-center">
                  <p className="text-xs font-mono tracking-[0.06em] text-muted">Ideation images placeholder</p>
                </div>
              </div>
            )}
          </div>

          {/* Process Gallery */}
          <div className="mt-16 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Process Gallery</h2>
            {processImages.length > 0 ? (
              <div className="columns-2 md:columns-3 gap-3 md:gap-2">
                {processImages.map((image, index) => (
                  <div key={index} className="mb-4 md:mb-2 break-inside-avoid">
                    <figure className="mb-0">
                      <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={900}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="mt-3 px-2 text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
              </div>
            ) : (
              <div className="columns-2 md:columns-3 gap-3 md:gap-2">
                <div className="mb-4 md:mb-2 break-inside-avoid">
                  <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border aspect-[4/3] flex items-center justify-center">
                    <p className="text-xs font-mono tracking-[0.06em] text-muted">Process images placeholder</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Credits Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Credits</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed space-y-1">
              <p>Design / Co-Creative Direction: Hannah Yesmunt + Kiernan McKay</p>
              <p>Photography: Leigh Ann Cobb</p>
              <p>Makeup: Kathy Price</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Special layout for Beyond The Bikini Case Study
  if (slug === "case-study-beyond-the-bikini") {
    return (
      <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors py-1 px-2 -ml-2"
            >
              <span className="mr-2 text-accent">←</span>
              <span className="hidden sm:inline">Back to {categoryLabel}</span>
              <span className="sm:hidden text-xs uppercase font-mono tracking-wider">Back</span>
            </Link>
            <h1 className="text-sm md:text-lg font-bold text-foreground truncate max-w-[200px] md:max-w-none uppercase font-mono tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

        <div className="container mx-auto py-8 md:py-16 max-w-5xl">
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-6 mt-2">
              {project.title}
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm text-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>

            {project.specs && <SpecBlock items={project.specs} />}
          </div>
          
          <div className="max-w-3xl">
            <PolishDivider />

            {project.designGoals && (
              <section>
                <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4">Design Goals</h2>
                <ul className="list-disc list-inside space-y-3 text-foreground/90 text-xs md:text-sm">
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
                <ul className="list-disc list-inside space-y-3 text-foreground/90 text-xs md:text-sm">
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
                <ul className="list-disc list-inside space-y-3 text-foreground/90 text-xs md:text-sm">
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
                <p className="text-foreground/90 leading-relaxed text-xs md:text-sm">
                  {project.outcome}
                </p>
              </section>
            )}
          </div>

          <div className="mt-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Documentation & Imagery</h2>
            <div className="grid grid-cols-1 gap-8 md:gap-12">
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
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors py-1 px-2 -ml-2"
            >
              <span className="mr-2 text-accent">←</span>
              <span className="hidden sm:inline">Back to {categoryLabel}</span>
              <span className="sm:hidden text-xs uppercase font-mono tracking-wider">Back</span>
            </Link>
            <h1 className="text-sm md:text-lg font-bold text-foreground truncate max-w-[200px] md:max-w-none uppercase font-mono tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-16 max-w-5xl">
        <div className="max-w-3xl">
          <ProjectHeader project={project} />

          <section className="mb-10 md:mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Overview</span>
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm text-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Responsibilities</span>
            <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Skills</span>
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <li key={index} className="px-3 py-1 bg-surface border border-border rounded-full text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted">{skill}</li>
              ))}
            </ul>
          </section>

          {project.whatILearned && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">What I Learned</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-muted leading-relaxed italic bg-surface p-5 md:p-6 border-l-4 border-accent rounded-r-lg">
                  {project.whatILearned}
                </p>
              </div>
            </section>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Documentation & Imagery</h2>
          <div className="grid grid-cols-1 gap-8 md:gap-12">
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

