import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectHeader from "@/app/components/ProjectHeader";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import SpecBlock from "@/app/components/SpecBlock";
import ScrollGallery from "@/app/components/ScrollGallery";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const PolishDivider = () => <div className="my-8 md:my-10 border-t border-border" />;

function getBackLink(category: "case-studies" | "pocket-design-lab"): string {
  switch (category) {
    case "case-studies":
      return "/case-studies";
    case "pocket-design-lab":
      return "/pocket-design-lab";
    default:
      return "/";
  }
}

function getCategoryLabel(category: "case-studies" | "pocket-design-lab"): string {
  switch (category) {
    case "case-studies":
      return "Case Studies";
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
    // Persona data structure - images ordered: hero (highest number) first, then 1, 2, 3, etc.
    const personas = [
      {
        id: "tie-guy",
        title: "TIE GUY",
        callout: "\"Extended-Length Tie:\" built for his extended nights at the office.\nDragging himself through the week — always trying, always tired.",
        folder: "TIE GUY",
        images: ["10.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "11.jpg", "0004324_0004324-R1-E029.jpg", "12.jpg"]
      },
      {
        id: "secretary",
        title: "THE SECRETARY",
        callout: "\"Sitwear\" pencil skirt: built-in exercise ball to encourage \"active sitting,\" reducing the need to leave her desk.",
        folder: "The SECRETARY",
        images: ["10.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpg"]
      },
      {
        id: "intern",
        title: "THE INTERN",
        callout: "\"Wearable filing cabinet\": built for nights when the work has to come home (which is every night).\n$70K in student loans. He can't afford not to get the job offer.",
        folder: "THE INTERN",
        images: ["6.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg", "7.jpg", "8.jpg"]
      },
      {
        id: "ceo",
        title: "THE CEO — \"MR. CORP\"",
        callout: "\"Pink power suit\": the color speaks louder than his company-wide memos.\nA challenge to the masculinity traditionally used to signal power.",
        folder: "THE CEO \"MR. CORP\"",
        images: ["5.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "6.jpg", "7.jpg"]
      },
      {
        id: "corporate-athlete",
        title: "THE CORPORATE ATHLETE",
        callout: "\"Practice penny sweater vest\": built for speed and agility, designed for jumping through hoops.",
        folder: "The CORPORATE ATHLETE",
        images: ["8.jpg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "7.5.png", "9.jpg", "10.jpg", "0004324_0004324-R1-E012.jpg"]
      },
      {
        id: "facilities",
        title: "FACILITIES CREW",
        callout: "\"High-visibility jumpsuit\": modeled after institutional uniforms designed for control.\nThey maintain the corporate ladder without ever being invited to climb it.\nAlways moving. Never upward.",
        folder: "FACILITIES CREW",
        images: ["12.jpeg", "1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpg", "10.jpg", "11.jpg"]
      },
      {
        id: "it-department",
        title: "IT DEPARTMENT",
        callout: "Athletic socks with khakis: done trying to impress, done resetting people's passwords.",
        folder: "IT DEPARTMENT",
        images: ["10.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpg", "9.jpg"]
      }
    ];

    // Moodboard images
    const moodboardImages = [
      { src: "/images/pdl/corpcore/Moodboard/moodboard.png", alt: "CORPCORE moodboard" }
    ];

    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-3 md:py-4">
          <div className="container mx-auto max-w-5xl px-4 md:px-0">
            <div className="flex items-center justify-between gap-3 md:gap-4">
              <Link
                href={backLink}
                className="inline-flex items-center text-xs md:text-sm text-muted hover:text-accent transition-colors py-1 px-1 md:px-2 -ml-1 md:-ml-2"
              >
                <span className="mr-1 md:mr-2 text-accent">←</span>
                <span className="hidden sm:inline">Back to {categoryLabel}</span>
                <span className="sm:hidden text-[10px] uppercase font-mono tracking-wider">Back</span>
              </Link>
              <h1 className="text-xs md:text-lg font-bold text-foreground truncate max-w-[140px] md:max-w-none uppercase font-mono tracking-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
          {/* Project Header */}
          <div className="max-w-3xl mb-8 md:mb-12">
            <header className="border-b border-border pb-6 md:pb-8 mb-6 md:mb-8">
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[11px] md:text-xs font-mono tracking-[0.06em] text-muted uppercase">
                  <span>{project.role}</span>
                  <span className="text-border">•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </header>

            {/* Background / Overview */}
            <section className="mb-8 md:mb-12">
              <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Background</span>
              <div className="max-w-2xl">
                <p className="text-sm md:text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </div>
            </section>

          </div>

          {/* Moodboard / Ideation */}
          <div className="mt-10 md:mt-16 mb-10 md:mb-16">
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-6 md:mb-8">Ideation / Moodboard</h2>
            <div className="max-w-full md:max-w-3xl">
              {moodboardImages.map((image, index) => (
                <figure key={index} className="mb-0">
                  <div className="relative w-full bg-surface rounded-md md:rounded-lg overflow-hidden border border-border">
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
          <div className="mt-12 md:mt-20">
            {personas.map((persona, personaIndex) => (
              <div key={persona.id} className="mb-12 md:mb-24">
                {/* Persona Header */}
                <div className="border-t border-border pt-5 md:pt-8 mb-5 md:mb-8">
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-1.5 md:mb-2 block">
                    Persona {String(personaIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-xl font-bold text-foreground tracking-tight uppercase">
                    {persona.title}
                  </h3>
                </div>

                {/* Persona Callout */}
                <div className="max-w-2xl mb-6 md:mb-10">
                  <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-2 md:mb-3 block">Callouts</span>
                  <p className="text-sm md:text-sm text-foreground leading-relaxed italic border-l-2 border-accent pl-3 md:pl-4 whitespace-pre-line">
                    {persona.callout}
                  </p>
                </div>

                {/* Persona Gallery */}
                <ScrollGallery
                  images={persona.images.map((imageName, imageIndex) => ({
                    src: `/images/pdl/corpcore/${encodeURIComponent(persona.folder)}/${imageName}`,
                    alt: `${persona.title} - Image ${imageIndex + 1}`
                  }))}
                  desktopVisible={3}
                />

              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border">
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 md:mb-6">Skills</h2>
            <ul className="flex flex-wrap gap-1.5 md:gap-2">
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
                <li key={index} className="px-2 md:px-3 py-0.5 md:py-1 bg-surface border border-border rounded-full text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Credits Footer */}
          <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border">
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4">Credits</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed space-y-0.5 md:space-y-1">
              <p>Hannah Yesmunt, Designer/CD</p>
              <p><a href="https://instagram.com/kiernanmckay" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Kiernan McKay</a>, Designer/CD</p>
              <p><a href="https://instagram.com/leigh.ann.cobb.photo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Leigh Ann Cobb</a>, Photography</p>
              <p>Kathy Price, H&MU</p>
              <p>Molly McKay & Sarah Beckett, Production Assists</p>
            </div>
            
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 mt-6 md:mt-8">Talent</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed">
              <p>
                <a href="https://instagram.com/somdbho" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@somdbho</a>
                {" "}<a href="https://instagram.com/allickspurrez" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@allickspurrez</a>
                {" "}<a href="https://instagram.com/bertfromirie" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@bertfromirie</a>
                {" "}<a href="https://instagram.com/christastudent" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@christastudent</a>
                {" "}<a href="https://instagram.com/meleisurelybusy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@meleisurelybusy</a>
                {" "}<a href="https://instagram.com/arabellavanderzee" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@arabellavanderzee</a>
                {" & Jamie of "}<a href="https://instagram.com/endlessmgmt" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@endlessmgmt</a>
                {" & Kathleen E."}
              </p>
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
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-3 md:py-4">
        <div className="container mx-auto max-w-5xl px-4 md:px-0">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <Link
              href={backLink}
              className="inline-flex items-center text-xs md:text-sm text-muted hover:text-accent transition-colors py-1 px-1 md:px-2 -ml-1 md:-ml-2"
            >
              <span className="mr-1 md:mr-2 text-accent">←</span>
              <span className="hidden sm:inline">Back to {categoryLabel}</span>
              <span className="sm:hidden text-[10px] uppercase font-mono tracking-wider">Back</span>
            </Link>
            <h1 className="text-xs md:text-lg font-bold text-foreground truncate max-w-[140px] md:max-w-none uppercase font-mono tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
        <div className="max-w-3xl">
          <ProjectHeader project={project} />
          {slug === "gymnasia-imagining-new-places-to-move" && (
            <p className="text-xs md:text-base text-muted mb-6 md:mb-8 -mt-3 md:-mt-4">
              Imagining New Places to Move
            </p>
          )}
          {slug === "archive-to-future" && (
            <p className="text-xs md:text-base text-muted mb-6 md:mb-8 -mt-3 md:-mt-4">
              Androgynous tailoring inspired by 16th century dress.
            </p>
          )}

          <section className="mb-8 md:mb-12">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Overview</span>
            <div className="max-w-2xl">
              <p className="text-xs md:text-sm text-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>

          {project.problem && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Problem</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </section>
          )}

          {project.researchNotes && project.researchNotes.length > 0 && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Research Notes</span>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.researchNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          {project.output && project.output.length > 0 && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Prototype Capsule</span>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.output.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-8 md:mb-12">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
              {slug === "archive-to-future" ? "Project Highlights" : "Responsibilities"}
            </span>
            <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8 md:mb-12">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Skills</span>
            <ul className="flex flex-wrap gap-1.5 md:gap-2">
              {project.skills.map((skill, index) => (
                <li key={index} className="px-2 md:px-3 py-0.5 md:py-1 bg-surface border border-border rounded-full text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted">{skill}</li>
              ))}
            </ul>
          </section>

          {project.materialSystem && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Material System</span>
              <div className="max-w-2xl">
                <p className="text-xs md:text-sm text-foreground leading-relaxed">
                  {project.materialSystem}
                </p>
              </div>
            </section>
          )}

          {project.theCapsule && project.theCapsule.length > 0 && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">The Capsule</span>
              <div className="max-w-2xl space-y-3 md:space-y-4">
                {project.theCapsule.map((garment, index) => (
                  <div key={index} className="border-b border-border pb-3 md:pb-4 last:border-0">
                    <h4 className="text-xs md:text-sm font-semibold text-foreground mb-0.5 md:mb-1">{garment.name}</h4>
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
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Process</span>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </section>
          )}

          {project.whatILearned && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">What I Learned</span>
              <div className="max-w-2xl">
                {Array.isArray(project.whatILearned) ? (
                  <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                    {project.whatILearned.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs md:text-sm text-muted leading-relaxed italic bg-surface p-4 md:p-6 border-l-4 border-accent rounded-r-lg">
                    {project.whatILearned}
                  </p>
                )}
              </div>
            </section>
          )}

          {project.nextIterations && project.nextIterations.length > 0 && (
            <section className="mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">Next Iterations</span>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted leading-relaxed">
                {project.nextIterations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="mt-10 md:mt-16">
          <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-5 md:mb-8">Documentation & Imagery</h2>
          {slug === "archive-to-future" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
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
            <div className="grid grid-cols-1 gap-4 md:gap-12 max-w-4xl">
              {project.images.map((image, index) => (
                <figure key={index} className="mb-0">
                  <div className="relative w-full bg-surface rounded-md md:rounded-lg overflow-hidden border border-border">
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
            <div className="columns-2 md:columns-3 gap-2 md:gap-3">
              {project.images.map((image, index) => {
                const isMewoBackground = image.src.includes("mewobackground");
                return (
                  <div key={index} className="break-inside-avoid [&>figure]:mb-2 [&>figure]:md:mb-3">
                    {isMewoBackground ? (
                      <figure className="mb-2 md:mb-3 break-inside-avoid">
                        <div className="relative w-full overflow-hidden rounded-md md:rounded-lg">
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
                          <figcaption className="mt-2 md:mt-3 px-1 md:px-2 text-[10px] md:text-xs font-mono tracking-[0.06em] text-muted text-center leading-relaxed">
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

        {/* Credits Footer for SLUSHWORLD */}
        {slug === "slushworld" && (
          <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border">
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4">Credits</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed space-y-0.5 md:space-y-1">
              <p><a href="https://instagram.com/leigh.ann.cobb.photo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Leigh Ann Cobb</a>, Photography (Flat Lays & Final Looks)</p>
            </div>
          </div>
        )}

        {/* Credits Footer for SPORTY BONNET */}
        {slug === "sporty-bonnet-accessory-design" && (
          <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-border">
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4">Credits</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed space-y-0.5 md:space-y-1">
              <p><a href="https://instagram.com/stephholt" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Stephanie Holt</a>, Photography</p>
              <p>Katie Mann, MUA</p>
            </div>
            
            <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 mt-6 md:mt-8">Talent</h2>
            <div className="text-xs md:text-sm text-muted leading-relaxed">
              <p>
                <a href="https://instagram.com/goddamnleanne" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@goddamnleanne</a>
                {" "}<a href="https://instagram.com/bigsyyyy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@bigsyyyy</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

