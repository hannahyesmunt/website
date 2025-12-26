import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="container mx-auto py-8 md:py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Text Content */}
          <div className="flex flex-col max-w-full">
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
              About
            </span>
            <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-8 break-words">
              Hannah Yesmunt
            </h1>
            <div className="max-w-full">
              <p className="text-xs md:text-sm text-foreground leading-relaxed break-words">
                I'm a Los Angeles–based designer and product developer exploring the intersections of fashion, sports, and identity. I specialize in translating concepts into functional apparel, from technical flats and patterns to prototypes and finished garments. At the center of my work is creating designs that prioritize freedom of movement, self-expression, and play.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-col gap-8 w-full">
            <div className="relative w-full rounded-lg border border-border bg-surface shadow-sm overflow-hidden">
              <Image
                src="/about/SAdetroit1.jpg"
                alt="Hannah Yesmunt"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="relative w-full rounded-lg border border-border bg-surface shadow-sm overflow-hidden">
              <Image
                src="/about/Screenshot+2023-03-01+at+12.15.16+PM.jpeg"
                alt="Hannah Yesmunt"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

