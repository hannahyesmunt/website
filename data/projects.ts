export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "professional" | "technical" | "pocket-design-lab";
  year: string;
  brand?: string;
  role: string;
  overview: string;
  responsibilities: string[];
  skills: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "skechers-mens-apparel",
    title: "Men's Apparel Product Development",
    category: "professional",
    year: "2025",
    brand: "Skechers Apparel",
    role: "Associate Product & Material Developer",
    overview:
      "Supported the development of men's lifestyle and performance apparel from concept through production, collaborating across design, technical design, and sourcing teams.",
    responsibilities: [
      "Supported product development for 100+ men's apparel styles",
      "Prepared technical flats and development handoffs",
      "Tracked revisions across design, fit, and costing iterations",
      "Assisted in developing tunnel looks for NBA athlete presentations",
      "Organized seasonal assets and ensured accuracy across line plans"
    ],
    skills: [
      "Product development workflow",
      "Technical sketch interpretation",
      "Fit and revision tracking",
      "Collaboration with cross-functional teams"
    ],
    images: [
      { src: "/images/skechers/IMG_3907.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4286.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4431.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4512.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4631.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4720.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4724.jpeg", alt: "Skechers development process", caption: "Development process" },
      { src: "/images/skechers/IMG_4725.jpeg", alt: "Skechers development process", caption: "Development process" }
    ]
  },
  {
    slug: "saint-andro-swimwear",
    title: "Androgynous Swimwear Collection",
    category: "professional",
    year: "2022-2025",
    brand: "Saint Andro Swimwear",
    role: "Founder & Designer",
    overview:
      "Developed an inclusive androgynous swimwear collection focused on gender-neutral design principles, technical fit solutions, and sustainable material selection.",
    responsibilities: [
      "Collaborated on concept development and design ideation",
      "Created technical flats and specification packages",
      "Participated in fit sessions and prototype iterations",
      "Researched sustainable fabric options and material sourcing",
      "Developed size-inclusive grading and fit standards"
    ],
    skills: [
      "Gender-neutral design principles",
      "Swimwear technical design",
      "Fit and pattern development",
      "Sustainable material research"
    ],
    images: [
      { src: "/images/saint-andro_collection.jpg", alt: "Saint Andro swimwear collection", caption: "Androgynous swimwear collection overview" },
      { src: "/images/saint-andro_technical.jpg", alt: "Technical flat of swimwear", caption: "Technical flat for androgynous swimwear design" }
    ]
  },
  {
    slug: "lattc-final-patternmaking",
    title: "Final Patternmaking Project",
    category: "technical",
    year: "2025",
    role: "Student",
    overview: "Designed and constructed a garment from concept to final fit, demonstrating technical patternmaking and garment construction skills.",
    responsibilities: [
      "Created technical flats and pattern drafts",
      "Produced muslin mockups and adjusted fit",
      "Documented iteration process with photos and notes",
      "Executed final garment construction with attention to seam finishes and proportions"
    ],
    skills: ["Pattern drafting", "Technical flat creation", "Garment fitting", "Construction techniques"],
    images: [
      { src: "/images/IMG_5703.jpeg", alt: "LATTC project final", caption: "Final garment" },
      { src: "/images/IMG_5578.jpeg", alt: "LATTC project process", caption: "Pattern drafting" },
      { src: "/images/IMG_5650.jpeg", alt: "LATTC project process", caption: "Fit testing" },
      { src: "/images/IMG_5654.jpeg", alt: "LATTC project process", caption: "Pattern card" },
      { src: "/images/IMG_5655 2.jpeg", alt: "LATTC project process", caption: "Extended sleeve cap with darts" },
      { src: "/images/IMG_5662 2.jpeg", alt: "LATTC project process", caption: "Final patterns" },
      { src: "/images/IMG_5677.jpeg", alt: "LATTC project process", caption: "Detail work" },
      { src: "/images/IMG_5681.jpeg", alt: "LATTC project process", caption: "Process documentation" },
      { src: "/images/IMG_5692.jpeg", alt: "LATTC project process", caption: "Final garment, back side" },
      { src: "/images/IMG_5700.jpeg", alt: "LATTC project process", caption: "Final details" }
    ]
  },
  {
    slug: "pocket-design-lab-baggy-shorts",
    title: "Baggy Swim Shorts Experiment",
    category: "pocket-design-lab",
    year: "2025",
    role: "Designer / Product Developer",
    overview: "Explored loose, gender-inclusive swimwear silhouettes with focus on fit, comfort, and sustainable fabric use.",
    responsibilities: [
      "Drafted patterns for unisex sizing from XS–3X",
      "Experimented with fabric drape and stretch ratios",
      "Created 3D visualizations and mockups",
      "Documented iterations for potential production use"
    ],
    skills: ["Pattern drafting", "3D visualization", "Inclusive sizing", "Fabric experimentation"],
    images: [
      { src: "/images/pdl_shorts_flat.jpg", alt: "Flat sketch of baggy swim shorts", caption: "Technical flat for baggy swim shorts" },
      { src: "/images/pdl_shorts_mockup.jpg", alt: "Mockup photo", caption: "First prototype mockup" }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter(project => project.category === category);
}

