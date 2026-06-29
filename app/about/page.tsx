import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="container mx-auto py-6 md:py-16 max-w-5xl px-4 md:px-0">
        {/* Text Content */}
        <div className="mb-8 md:mb-16">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.08em] text-muted mb-3 md:mb-4 block">
            About
          </span>
          <h1 className="text-lg md:text-2xl font-bold text-foreground tracking-tight mb-4 md:mb-8">
            Hannah Yesmunt
          </h1>
          <div className="max-w-3xl space-y-4 md:space-y-5">
            <p className="text-xs md:text-base text-foreground leading-relaxed">
              I am a Los Angeles-based technical apparel designer focused on fit development,
              patternmaking, and garment construction. I specialize in translating design concepts
              into production-ready garments through technical flats, CLO 3D prototyping, and
              iterative physical sampling.
            </p>
            <p className="text-xs md:text-base text-foreground leading-relaxed">
              My work centers on precise fit, functional construction, and designing garments that
              support freedom of movement and real-body performance.
            </p>
            <p className="text-xs md:text-base text-foreground leading-relaxed">
              I bring a background in product development, color, trim, and materials from
              performance apparel roles at Skechers and Fabletics, along with startup founder
              experience, which informs my understanding of how garments move from concept through
              commercialization.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 max-w-3xl">
          <div className="relative w-full rounded-md md:rounded-lg border border-border bg-surface shadow-sm overflow-hidden [&>span]:block [&>span]:m-0 [&>span]:p-0 [&>span]:leading-none [&>span>img]:block [&>span>img]:m-0 [&>span>img]:p-0">
            <Image
              src="/images/about/SAdetroit1.jpg"
              alt="Hannah Yesmunt"
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="relative w-full rounded-md md:rounded-lg border border-border bg-surface shadow-sm overflow-hidden [&>span]:block [&>span]:m-0 [&>span]:p-0 [&>span]:leading-none [&>span>img]:block [&>span>img]:m-0 [&>span>img]:p-0">
            <Image
              src="/images/about/Screenshot+2023-03-01+at+12.15.16+PM.jpeg"
              alt="Hannah Yesmunt"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

