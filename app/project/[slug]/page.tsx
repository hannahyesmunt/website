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
    // Persona data structure
    const personas = [
      {
        id: "tie-guy",
        title: "TIE GUY",
        callout: "The eternal middle manager. A man defined by his collection of statement ties—each one a desperate bid for personality within dress code compliance.",
        folder: "TIE GUY",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpg", "11.jpg", "0004324_0004324-R1-E029.jpg"],
        heroImage: "12.jpg"
      },
      {
        id: "secretary",
        title: "THE SECRETARY",
        callout: "Keeper of schedules, gatekeeper of the corner office. Her ergonomic keyboard and sensible heels are the tools of quiet corporate power.",
        folder: "The SECRETARY",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpg"],
        heroImage: "10.jpg"
      },
      {
        id: "intern",
        title: "THE INTERN",
        callout: "Fresh out of college, armed with a lanyard and unearned confidence. The coffee runner, the note-taker, the future of this company (allegedly).",
        folder: "THE INTERN",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg", "7.jpg", "8.jpg"],
        heroImage: "6.jpg"
      },
      {
        id: "ceo",
        title: "THE CEO — \"MR. CORP\"",
        callout: "The corner office incarnate. Power suits, power moves, power lunches. He built this company from the ground up (with a small loan from his father).",
        folder: "THE CEO \"MR. CORP\"",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg", "6.jpg"],
        heroImage: "7.jpg"
      },
      {
        id: "corporate-athlete",
        title: "THE CORPORATE ATHLETE",
        callout: "Peloton before sunrise, protein shake at her standing desk. She treats quarterly reports like marathon training—everything is a competition.",
        folder: "The CORPORATE ATHLETE",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "7.5.png", "9.jpg", "10.jpg", "0004324_0004324-R1-E012.jpg"],
        heroImage: "8.jpg"
      },
      {
        id: "facilities",
        title: "FACILITIES CREW",
        callout: "The unsung heroes who keep the lights on. They know every secret of the building—the broken elevator, the haunted supply closet, where the good snacks are hidden.",
        folder: "FACILITIES CREW",
        images: ["1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpg", "10.jpg", "11.jpg"],
        heroImage: "12.jpeg"
      },
      {
        id: "it-department",
        title: "IT DEPARTMENT",
        callout: "Have you tried turning it off and on again? The wizards behind the curtain, fluent in jargon, allergic to fluorescent lighting.",
        folder: "IT DEPARTMENT",
        images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpg", "10.jpg"],
        heroImage: "9.jpg"
      }
    ];

    // Moodboard images
    const moodboardImages = [
      { src: "/images/PDL/corpcore/Moodboard/moodboard.png", alt: "CORPCORE moodboard" }
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
                  <span className="text-border">•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </header>

            {/* Background / Overview */}
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Background</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </div>
            </section>

          </div>

          {/* Moodboard / Ideation */}
          <div className="mt-16 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Ideation / Moodboard</h2>
            <div className="max-w-3xl">
              {moodboardImages.map((image, index) => (
                <figure key={index} className="mb-0">
                  <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 1000px"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Persona Sections */}
          <div className="mt-20">
            <h2 className="text-lg md:text-xl font-bold text-foreground tracking-tight mb-4 uppercase">The Personas</h2>
            <p className="text-xs md:text-sm text-muted leading-relaxed max-w-2xl mb-12">
              Seven characters inhabit the CORPCORE universe—each one a satirical reflection of corporate archetypes, brought to life through styling, garment design, and world-building.
            </p>

            {/* Hero Gallery - All Personas Preview */}
            <div className="columns-2 md:columns-3 gap-4 md:gap-5 mb-20">
              {/* Reordered for better visual balance */}
              {[
                personas.find(p => p.id === "tie-guy"),
                personas.find(p => p.id === "ceo"),
                personas.find(p => p.id === "secretary"),
                personas.find(p => p.id === "corporate-athlete"),
                personas.find(p => p.id === "intern"),
                personas.find(p => p.id === "facilities"),
                personas.find(p => p.id === "it-department"),
              ].filter(p => p && p.heroImage).map((persona) => (
                <div key={persona!.id} className="mb-4 md:mb-5 break-inside-avoid">
                  <figure className="mb-0">
                    <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                      <Image
                        src={`/images/PDL/corpcore/${encodeURIComponent(persona!.folder)}/${persona!.heroImage}`}
                        alt={`${persona!.title} - Featured`}
                        width={1200}
                        height={900}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </figure>
                </div>
              ))}
            </div>

            {personas.map((persona, personaIndex) => (
              <div key={persona.id} className="mb-20 md:mb-24">
                {/* Persona Header */}
                <div className="border-t border-border pt-8 mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2 block">
                    Persona {String(personaIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight uppercase">
                    {persona.title}
                  </h3>
                </div>

                {/* Persona Callout */}
                <div className="max-w-2xl mb-10">
                  <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 block">Character Notes</span>
                  <p className="text-xs md:text-sm text-foreground leading-relaxed italic border-l-2 border-accent pl-4">
                    {persona.callout}
                  </p>
                </div>

                {/* Persona Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {persona.images.map((imageName, imageIndex) => (
                    <figure key={imageIndex} className="mb-0">
                      <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                        <Image
                          src={`/images/PDL/corpcore/${encodeURIComponent(persona.folder)}/${imageName}`}
                          alt={`${persona.title} - Image ${imageIndex + 1}`}
                          width={1000}
                          height={750}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </figure>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-6">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {[
                "World-Building",
                "Creative Direction",
                "Styling",
                "Garment Design",
                "Patternmaking",
                "Cut + Sew Construction",
                "Character Development",
                "Prop Design",
                "Collaborative Design",
                "Concept Development",
                "Visual Storytelling"
              ].map((skill, index) => (
                <li key={index} className="px-3 py-1 bg-surface border border-border rounded-full text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted">
                  {skill}
                </li>
              ))}
            </ul>
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
            <div className="columns-2 md:columns-3 gap-3 md:gap-2">
              {project.images.map((image, index) => (
                <div key={index} className="break-inside-avoid [&>figure]:mb-4 [&>figure]:md:mb-2">
                  <ImageWithCaption
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                  />
                </div>
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
          {slug === "gymnasia-imagining-new-places-to-move" && (
            <p className="text-sm md:text-base text-muted mb-8 -mt-4">
              Imagining New Places to Move
            </p>
          )}
          {slug === "archive-to-future" && (
            <p className="text-sm md:text-base text-muted mb-8 -mt-4">
              Androgynous tailoring inspired by 16th century dress.
            </p>
          )}

          <section className="mb-10 md:mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Overview</span>
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm text-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>

          {project.problem && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Problem</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </section>
          )}

          {project.researchNotes && project.researchNotes.length > 0 && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Research Notes</span>
              <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.researchNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          {project.output && project.output.length > 0 && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Prototype Capsule</span>
              <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.output.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-10 md:mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
              {slug === "archive-to-future" ? "Project Highlights" : "Responsibilities"}
            </span>
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

          {project.materialSystem && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Material System</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  {project.materialSystem}
                </p>
              </div>
            </section>
          )}

          {project.theCapsule && project.theCapsule.length > 0 && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">The Capsule</span>
              <div className="max-w-2xl space-y-4">
                {project.theCapsule.map((garment, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h4 className="text-xs md:text-sm font-semibold text-foreground mb-1">{garment.name}</h4>
                    <p className="text-xs md:text-sm text-muted leading-relaxed">
                      <span className="font-medium">Material:</span> {garment.material}
                    </p>
                    <p className="text-xs md:text-sm text-muted leading-relaxed">
                      <span className="font-medium">Function:</span> {garment.function}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.process && project.process.length > 0 && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Process</span>
              <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </section>
          )}

          {project.whatILearned && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">What I Learned</span>
              <div className="max-w-2xl">
                {Array.isArray(project.whatILearned) ? (
                  <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                    {project.whatILearned.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs md:text-sm text-muted leading-relaxed italic bg-surface p-5 md:p-6 border-l-4 border-accent rounded-r-lg">
                    {project.whatILearned}
                  </p>
                )}
              </div>
            </section>
          )}

          {project.nextIterations && project.nextIterations.length > 0 && (
            <section className="mb-10 md:mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">Next Iterations</span>
              <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.nextIterations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-8">Documentation & Imagery</h2>
          {slug === "archive-to-future" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.images.map((image, index) => (
                <ImageWithCaption
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                />
              ))}
            </div>
          ) : slug === "gymnasia-imagining-new-places-to-move" || slug === "sporty-bonnet-accessory-design" ? (
            <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-4xl">
              {project.images.map((image, index) => (
                <figure key={index} className="mb-0">
                  <div className="relative w-full bg-surface rounded-lg overflow-hidden border border-border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1200}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 1200px"
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
            <div className="columns-2 md:columns-3 gap-3 md:gap-2">
              {project.images.map((image, index) => {
                const isMewoBackground = image.src.includes("mewobackground");
                return (
                  <div key={index} className="break-inside-avoid [&>figure]:mb-4 [&>figure]:md:mb-2">
                    {isMewoBackground ? (
                      <figure className="mb-4 break-inside-avoid">
                        <div className="relative w-full overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1000}
                            height={750}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                        {image.caption && (
                          <figcaption className="mt-3 px-2 text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <ImageWithCaption
                        src={image.src}
                        alt={image.alt}
                        caption={image.caption}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

