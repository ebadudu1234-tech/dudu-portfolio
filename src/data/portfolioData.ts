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

// --------------- ABOUT ME ---------------

const aboutMeContent: ProjectItem[] = [
  {
    id: "about-1",
    title: "About Me",
    year: "",
    category: "About Me",
    description:
      "Hello! I'm a designer passionate about creating thoughtful experiences across brand, interface, print, game, and interactive installation projects. I enjoy blending concept, storytelling, and visual systems into work that feels both expressive and meaningful.\n\nMy practice explores how people connect with images, objects, spaces, and digital systems. I care deeply about atmosphere, interaction, and emotional resonance.\n\nFeel free to explore the folders on this desktop to view different parts of my portfolio.",
  },
];

// --------------- BRAND DESIGN ---------------

const brandDesignProjects: ProjectItem[] = [
  {
    id: "bd-1",
    title: "Aurora Skincare Identity",
    year: "2024",
    category: "Brand Design",
    description:
      "A complete visual identity system for a skincare brand, including logo design, typography, packaging direction, and brand color strategy.",
    link: "#",
  },
  {
    id: "bd-2",
    title: "Mori Café Branding",
    year: "2023",
    category: "Brand Design",
    description:
      "Brand identity for a contemporary café inspired by quiet rituals and natural materials. Includes logo, menu layout, signage, and takeaway packaging.",
    link: "#",
  },
  {
    id: "bd-3",
    title: "Studio Flux Rebrand",
    year: "2023",
    category: "Brand Design",
    description:
      "Rebranding project for a multidisciplinary creative studio. Developed a bold visual language, grid system, and flexible brand applications across digital and print touchpoints.",
  },
];

// --------------- PRINT DESIGN ---------------

const printDesignProjects: ProjectItem[] = [
  {
    id: "pr-1",
    title: "Editorial Booklet — Fragments",
    year: "2024",
    category: "Print Design",
    description:
      "A printed editorial booklet exploring memory and image sequencing through experimental layout, typography, and paper-based storytelling.",
  },
  {
    id: "pr-2",
    title: "Poster Series — Silent Rhythm",
    year: "2023",
    category: "Print Design",
    description:
      "A poster series using layered type, image composition, and color contrast to create a strong visual rhythm across multiple printed formats.",
  },
  {
    id: "pr-3",
    title: "Exhibition Brochure Design",
    year: "2023",
    category: "Print Design",
    description:
      "Designed a foldout exhibition brochure featuring curatorial text, image layouts, and an elegant print hierarchy for a contemporary art show.",
  },
];

// --------------- GAME DESIGN ---------------

const gameDesignProjects: ProjectItem[] = [
  {
    id: "gd-1",
    title: "Dream Archive",
    year: "2024",
    category: "Game Design",
    description:
      "A narrative game concept focused on memory, exploration, and environmental storytelling. Developed the world-building, interaction flow, and visual direction.",
    link: "#",
  },
  {
    id: "gd-2",
    title: "Loop Room",
    year: "2023",
    category: "Game Design",
    description:
      "An experimental puzzle game set in a looping interior space. Designed the spatial logic, player progression, and interactive cues.",
  },
  {
    id: "gd-3",
    title: "Soft Signal",
    year: "2023",
    category: "Game Design",
    description:
      "A concept-driven indie game exploring emotional choice and ambient interaction. Focused on interface language, gameplay mood, and player experience design.",
  },
];

// --------------- UI DESIGN ---------------

const uiDesignProjects: ProjectItem[] = [
  {
    id: "ui-1",
    title: "Wellness Tracker Interface",
    year: "2024",
    category: "UI Design",
    description:
      "A clean and calming mobile UI system for daily wellness tracking, featuring modular cards, intuitive navigation, and clear information hierarchy.",
    link: "#",
  },
  {
    id: "ui-2",
    title: "Creative Portfolio Dashboard",
    year: "2023",
    category: "UI Design",
    description:
      "Designed a dashboard interface for creatives to organize projects, assets, and presentations. Emphasis on usability, visual balance, and scalable components.",
  },
  {
    id: "ui-3",
    title: "Music App Visual Interface",
    year: "2023",
    category: "UI Design",
    description:
      "A concept UI for a music application with immersive album browsing, playback controls, and layered visual transitions.",
  },
];

// --------------- INTERACTIVE INSTALLATIONS ---------------

const interactiveInstallationsProjects: ProjectItem[] = [
  {
    id: "ii-1",
    title: "Echo Chamber",
    year: "2024",
    category: "Interactive Installations",
    description:
      "An interactive spatial installation responding to movement and sound. Designed the audience journey, interaction concept, and visual atmosphere.",
    link: "#",
  },
  {
    id: "ii-2",
    title: "Touch / Trace",
    year: "2023",
    category: "Interactive Installations",
    description:
      "A multisensory installation exploring touch, projection, and responsive light behavior. Focused on physical interaction design and emotional engagement.",
  },
  {
    id: "ii-3",
    title: "Signal Garden",
    year: "2023",
    category: "Interactive Installations",
    description:
      "An installation concept combining sensor input, real-time visuals, and spatial composition to create a participatory public experience.",
  },
];

// --------------- FOLDER STRUCTURE ---------------

export const folders: FolderData[] = [
  { id: "about-me", label: "About Me", items: aboutMeContent },
  { id: "brand-design", label: "Brand Design", items: brandDesignProjects },
  { id: "print-design", label: "Print Design", items: printDesignProjects },
  { id: "game-design", label: "Game Design", items: gameDesignProjects },
  { id: "ui-design", label: "UI Design", items: uiDesignProjects },
  {
    id: "interactive-installations",
    label: "Interactive Installations",
    items: interactiveInstallationsProjects,
  },
];

export const getFolderById = (id: string): FolderData | undefined =>
  folders.find((f) => f.id === id);
