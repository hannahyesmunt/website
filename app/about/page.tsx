import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-[0.08em] text-muted mb-4 block">
          About
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">
          Hannah Yesmunt
        </h1>
        <div className="max-w-none">
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-8">
            I'm a Los Angeles–based designer and product developer exploring the intersections of fashion, sports, and identity. I specialize in translating concepts into functional apparel, from technical flats and patterns to prototypes and finished garments. At the center of my work is creating designs that prioritize freedom of movement, self-expression, and play. I am excited about the future of fashion.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <Image
              src="/images/about — PDL_files/SAdetroit1.jpg"
              alt="Hannah Yesmunt"
              width={300}
              height={400}
              className="rounded-lg border border-border h-[350px] w-auto object-cover"
            />
            <Image
              src="/images/main/Screenshot+2023-03-01+at+12.15.16+PM.webp"
              alt="Hannah Yesmunt"
              width={400}
              height={300}
              className="rounded-lg border border-border h-[350px] w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

