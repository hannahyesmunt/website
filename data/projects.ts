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
  whatILearned?: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "skechers-mens-product-development",
    title: "Men's Performance and Lifestyle Apparel",
    category: "professional",
    year: "2025",
    brand: "Skechers Apparel",
    role: "Product Development",
    overview:
      "At Skechers, I worked on the men's product development team supporting lifestyle and performance apparel across basketball, golf, court sports, and outerwear. My role focused on guiding styles from early design intent through sample development, ensuring each product aligned with performance needs, brand standards, and production realities.",
    responsibilities: [
      "Partnered with design, technical design, and merchandising to translate concepts into executable products",
      "Maintained clarity across the development process—tracking updates, flagging issues early, and keeping styles moving through proto and SMS stages",
      "Led material, trim, and color development, testing new fabrics, finishes, and construction details",
      "Balanced cost, quality, and factory capabilities across all development decisions",
      "Supported NBA athlete tunnel looks along with additional special projects for Skechers-sponsored professional athletes in golf and pickleball",
      "Sharpened ability to balance design vision with real-world constraints including cost targets, materials availability, and production timelines"
    ],
    skills: [
      "Apparel product development workflow",
      "Materials, trim, and color development",
      "Sample tracking (Proto & SMS)",
      "Technical flat interpretation",
      "PLM & BOM accuracy",
      "Cross-functional collaboration",
      "Vendor communication"
    ],
    whatILearned: "Developing at scale sharpened my ability to balance design intent with cost, materials, and production constraints—skills I now apply to smaller, more experimental projects as well.",
    images: [
      { src: "/images/skechers/final%20images/550430447_17934039627086715_8389909274568741390_n.jpg", alt: "Skechers final product", caption: "Final product" },
      { src: "/images/skechers/final%20images/590402588_17942281062086715_2578124886817200815_n.jpg", alt: "Skechers final product", caption: "Final product" },
      { src: "/images/skechers/final%20images/1753985055479.jpeg", alt: "Skechers final product", caption: "Final product" },
      { src: "/images/skechers/final%20images/JA297_BLK.avif", alt: "Skechers final product", caption: "Final product" },
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
    slug: "case-study-beyond-the-bikini",
    title: "Case Study: Beyond The Bikini",
    category: "professional",
    year: "2022-2025",
    brand: "Saint Andro Swimwear",
    role: "Founder & Designer",
    overview:
      "This case study highlights one of the key products we developed at Saint Andro: the Oh Cool Compression Zip Top. The garment is a versatile, high-performance piece designed to balance function, comfort, and inclusivity. Inspired by sporty, outdoor lifestyles, it supports movement, sun protection, and thermal regulation, making it ideal for swimming, water sports, or casual wear.\n\nThe focus here is on the design process, material exploration, and performance innovation that differentiate this top from conventional activewear.",
    responsibilities: [
      "Provide adjustable, mid-level coverage to accommodate multiple body types",
      "Integrate sun protection (UPF-rated) for outdoor use",
      "Use scuba-style fabric to simulate cooling, thermoregulating properties",
      "Maintain freedom of movement for sport or daily activity",
      "Create a unisex silhouette that is functional and fashion-forward",
      "Tested various scuba-style and thermo-regulating fabrics for stretch, cooling, and drape",
      "Selected sustainable and recycled fabric options to align with brand values",
      "Evaluated mobility, range of motion, and sun coverage",
      "Used CLO 3D to create virtual prototypes and refine style lines before physical production"
    ],
    skills: [
      "Product development & pattern drafting",
      "Functional design for activewear and swimwear",
      "Material and textile innovation",
      "Inclusive sizing and unisex pattern engineering",
      "Prototype iteration & performance testing",
      "CLO 3D garment visualization and virtual prototyping"
    ],
    whatILearned: "The Oh Cool Compression Zip Top combines technical innovation with thoughtful design, providing a garment that is adaptable, performance-ready, and inclusive. It exemplifies Saint Andro's commitment to high-quality, functional, and fashion-forward swimwear for all bodies.",
    images: [
      { src: "/images/sa/1sa.png", alt: "Saint Andro Oh Cool Compression Zip Top", caption: "Conceptual ideation" },
      { src: "/images/sa/2ST.A S1.4 ZIP UP TOP.png", alt: "Saint Andro Zip Up Top technical flat", caption: "Technical flat" },
      { src: "/images/sa/3ZIP TOP RENDER.png", alt: "Saint Andro Zip Top render", caption: "3D render" },
      { src: "/images/sa/4ZIP TOP RENDER_Custom_View_1.png", alt: "Saint Andro Zip Top custom view", caption: "3D render custom view" },
      { src: "/images/sa/5000055980003_websize.webp", alt: "Saint Andro product photography", caption: "Product photography" },
      { src: "/images/sa/6untitled0398_expsr_faze_websize.jpg", alt: "Saint Andro editorial", caption: "Editorial" },
      { src: "/images/sa/7Maxcam_PST00041_websize.jpg", alt: "Saint Andro fit testing", caption: "Fit testing" }
    ]
  },
  {
    slug: "passenger-princess-commuter-jacket",
    title: "Passenger Princess Commuter Jacket",
    category: "technical",
    year: "Fall 2025",
    role: "Student — Pattern Making & Design I",
    overview: "Passenger Princess Commuter Jacket is a technical outerwear project developed as the final assignment for the Pattern Making & Design I evening course. The jacket reinterprets classic princess-seam tailoring through a commuter-focused lens, integrating high-visibility elements and performance materials to support nighttime travel, safety, and freedom of movement. The project was motivated by a personal accident, which sharpened my focus on designing garments that prioritize protection, visibility, and mobility.",
    responsibilities: [
      "Drafted mid-armhole princess seams (front and back) to shape the body while supporting mobility",
      "Developed an extended sleeve cap with dart placement to improve range of motion",
      "Integrated elbow darts for ergonomic bending and comfort",
      "Designed a mandarin collar for wind protection and a streamlined silhouette",
      "Patterned a center-front lightweight zipper for ease of wear",
      "Applied reflective piping along darts and style lines for nighttime visibility",
      "Used reflective webbing at center-front panel and collar for high-contrast safety detailing",
      "Constructed using 3.4 oz Nylon Taslan / Supplex with eco DWR finish",
      "Developed and tested pattern in size 10"
    ],
    skills: [
      "Pattern drafting",
      "Garment engineering",
      "Fit and mobility problem-solving",
      "Technical outerwear design",
      "Material selection for performance apparel",
      "Concept-to-pattern execution"
    ],
    images: [
      { src: "/images/IMG_5703.jpeg", alt: "Passenger Princess Commuter Jacket front view", caption: "Final garment" },
      { src: "/images/IMG_5578.jpeg", alt: "Pattern drafting process", caption: "Pattern drafting" },
      { src: "/images/IMG_5650.jpeg", alt: "Fit testing session", caption: "Fit testing" },
      { src: "/images/IMG_5654.jpeg", alt: "Pattern card documentation", caption: "Pattern card" },
      { src: "/images/IMG_5655 2.jpeg", alt: "Extended sleeve cap with darts", caption: "Extended sleeve cap with darts" },
      { src: "/images/IMG_5662 2.jpeg", alt: "Final patterns laid out", caption: "Final patterns" },
      { src: "/images/IMG_5677.jpeg", alt: "Reflective piping detail", caption: "Detail work" },
      { src: "/images/IMG_5681.jpeg", alt: "Construction process", caption: "Process documentation" },
      { src: "/images/IMG_5692.jpeg", alt: "Passenger Princess Commuter Jacket back view", caption: "Final garment, back side" },
      { src: "/images/IMG_5700.jpeg", alt: "Final details and finishing", caption: "Final details" }
    ]
  },
  {
    slug: "gymnasia-imagining-new-places-to-move",
    title: "Gymnasia — Imagining New Places to Move",
    category: "pocket-design-lab",
    year: "July 2025",
    role: "Designer / Concept Developer",
    overview: "Gymnasia is a conceptual exploration into the future of fitness spaces, reimagining where and how people move, train, and connect. The project considers fitness environments not only as functional spaces, but as sites of identity, ritual, and expression.",
    responsibilities: [
      "Developed a narrative-driven concept exploring inclusive movement spaces",
      "Conducted visual and historical research to inform world-building",
      "Directed the creative vision and spatial mood of the project",
      "Used AI as a collaborative tool for early-stage ideation and visual exploration",
      "Translated abstract concepts into cohesive visual systems"
    ],
    skills: [
      "Concept development",
      "World-building",
      "Visual direction",
      "Research-driven design",
      "AI-assisted ideation",
      "Narrative storytelling"
    ],
    images: [
      { src: "/images/PDL/GYMNASIA — PDL_files/GYMNASIA.jpeg", alt: "Gymnasia conceptual space", caption: "Conceptual fitness space" },
      { src: "/images/PDL/GYMNASIA — PDL_files/gymnasia+exterior+2.png", alt: "Gymnasia exterior concept", caption: "Exterior concept" },
      { src: "/images/PDL/GYMNASIA — PDL_files/gymnasia-interior.png", alt: "Gymnasia visual exploration", caption: "Visual exploration" }
    ]
  },
  {
    slug: "sporty-bonnet-accessory-design",
    title: "Sporty Bonnet — Accessory Design Exploration",
    category: "pocket-design-lab",
    year: "June 2024",
    role: "Designer / Accessory Developer",
    overview: "Sporty Bonnet is a conceptual accessory design project that reinterprets the traditional bonnet through a contemporary, performance-driven lens. Developed in collaboration with a Los Angeles–based artist, the project merges historical silhouette with modern materials and functionality.",
    responsibilities: [
      "Developed a contemporary reinterpretation of a historical accessory silhouette",
      "Conducted material research focused on performance and durability",
      "Applied outdoor-focused technical fabrics to a traditionally decorative form",
      "Evaluated construction approaches for functionality and modern wearability",
      "Led accessory styling and visual execution for the final shoot"
    ],
    skills: [
      "Accessory design",
      "Material research",
      "Performance textile application",
      "Concept development",
      "Functional design thinking",
      "Styling and visual presentation"
    ],
    images: [
      { src: "/images/PDL/Technical Bonnet — PDL_files/2024_06_05_Pocket_Design_Lab_113.jpeg", alt: "Contemporary technical bonnet made with ripstop nylon", caption: "Accessory design exploration combining a historic bonnet silhouette with modern ripstop nylon." },
      { src: "/images/PDL/Technical Bonnet — PDL_files/2024_06_05_Pocket_Design_Lab_394.jpeg", alt: "Detail view of technical bonnet construction", caption: "Material study highlighting lightweight, UV-protective, water-repellent performance fabric." },
      { src: "/images/PDL/Technical Bonnet — PDL_files/2024_06_05_Pocket_Design_Lab_501.jpeg", alt: "Styled technical bonnet worn in outdoor environment", caption: "Styled final look demonstrating the accessory's balance of form, function, and modern utility." }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter(project => project.category === category);
}

