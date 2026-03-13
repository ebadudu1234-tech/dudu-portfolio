// ============================================================
// Portfolio Data — Replace placeholder content with your own!
// ============================================================

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  thumbnail?: string; // URL or import path
  images?: string[];  // Additional images
  link?: string;      // External link
}

export interface FolderData {
  id: string;
  label: string;
  items: ProjectItem[];
}

// --------------- PLACEHOLDER PROJECTS ---------------

const productDesignProjects: ProjectItem[] = [
  {
    id: "pd-1",
    title: "Weather Dashboard App",
    year: "2024",
    category: "Product Design",
    description: "A minimal weather dashboard designed for daily use. Focused on clarity, readability, and delightful micro-interactions. Built with a mobile-first approach.",
    link: "#",
  },
  {
    id: "pd-2",
    title: "Task Manager Redesign",
    year: "2023",
    category: "Product Design",
    description: "Complete redesign of a task management tool. Simplified workflows, reduced cognitive load, and introduced smart grouping features.",
    link: "#",
  },
  {
    id: "pd-3",
    title: "Music Streaming Interface",
    year: "2023",
    category: "Product Design",
    description: "Concept design for a music streaming app emphasizing album art, listening history, and social sharing features.",
  },
];

const brandingProjects: ProjectItem[] = [
  {
    id: "br-1",
    title: "Café Lumière Identity",
    year: "2024",
    category: "Branding",
    description: "Brand identity for a French-inspired café. Includes logo, typography system, color palette, packaging, and signage design.",
  },
  {
    id: "br-2",
    title: "Neon Studio Rebrand",
    year: "2023",
    category: "Branding",
    description: "Complete rebrand for a creative studio. Developed a bold visual identity with custom wordmark, iconography, and brand guidelines.",
    link: "#",
  },
];

const visualDesignProjects: ProjectItem[] = [
  {
    id: "vd-1",
    title: "Poster Series — Seasons",
    year: "2024",
    category: "Visual Design",
    description: "A four-part poster series exploring seasonal transitions through abstract color fields and typographic composition.",
  },
  {
    id: "vd-2",
    title: "Editorial Layout — Volume 3",
    year: "2023",
    category: "Visual Design",
    description: "Art direction and layout design for an independent magazine. Focus on grid systems, whitespace, and photographic storytelling.",
  },
  {
    id: "vd-3",
    title: "Icon Set — Essentials",
    year: "2023",
    category: "Visual Design",
    description: "A collection of 48 pixel-perfect icons designed for UI applications. Consistent stroke width, optical alignment, and scalable from 16px to 64px.",
  },
];

const caseStudyProjects: ProjectItem[] = [
  {
    id: "cs-1",
    title: "E-Commerce Checkout Optimization",
    year: "2024",
    category: "Case Studies",
    description: "A deep dive into optimizing the checkout experience for an e-commerce platform. Reduced cart abandonment by 23% through iterative testing and user research.",
    link: "#",
  },
  {
    id: "cs-2",
    title: "Healthcare Portal UX Audit",
    year: "2023",
    category: "Case Studies",
    description: "Comprehensive UX audit of a patient portal. Identified 15 critical usability issues and delivered an actionable improvement roadmap.",
  },
];

const aboutMeContent: ProjectItem[] = [
  {
    id: "about-1",
    title: "About Me",
    year: "",
    category: "About",
    description: "Hello! I'm a designer passionate about creating thoughtful digital experiences. I love blending nostalgia with modern interaction design. When I'm not designing, you can find me exploring vintage software, collecting records, or hiking.\n\nI specialize in product design, branding, and visual storytelling. I believe great design should feel invisible — intuitive, delightful, and human.\n\nFeel free to explore my work through the folders on this desktop. Each project represents a piece of my creative journey.",
  },
];

const contactContent: ProjectItem[] = [
  {
    id: "contact-1",
    title: "Get In Touch",
    year: "",
    category: "Contact",
    description: "I'd love to hear from you! Whether it's a project inquiry, collaboration opportunity, or just a friendly hello — don't hesitate to reach out.\n\n📧 Email: hello@youremail.com\n🌐 Website: yourwebsite.com\n💼 LinkedIn: linkedin.com/in/yourname\n🐦 Twitter: @yourhandle\n📍 Based in: Your City, Country",
  },
];

// --------------- FOLDER STRUCTURE ---------------

export const folders: FolderData[] = [
  { id: "product-design", label: "Product Design", items: productDesignProjects },
  { id: "branding", label: "Branding", items: brandingProjects },
  { id: "visual-design", label: "Visual Design", items: visualDesignProjects },
  { id: "case-studies", label: "Case Studies", items: caseStudyProjects },
  { id: "about-me", label: "About Me", items: aboutMeContent },
  { id: "contact", label: "Contact", items: contactContent },
];

export const getFolderById = (id: string): FolderData | undefined =>
  folders.find((f) => f.id === id);
