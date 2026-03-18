// ============================================================
// Portfolio Data — Replace placeholder content with your own!
// ============================================================

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;

  // Level 1 — Short preview popup
  thumbnail?: string;       // Cover image for the short popup
  shortDescription: string; // Short summary shown in popup

  // Level 2 — Full project view
  heroImage?: string;       // Large hero image for full view
  fullDescription: string;  // Long-form description / case study text
  detailImages?: string[];  // Additional gallery images for full view

  // Legacy / shared
  description?: string;     // (kept for backward compat, optional)
  images?: string[];        // (kept for backward compat, optional)
  link?: string;
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
    shortDescription:
      "Hello! I'm a designer passionate about creating thoughtful experiences across brand, interface, print, game, and interactive installation projects.",
    fullDescription:
      "Hello! I'm a designer passionate about creating thoughtful experiences across brand, interface, print, game, and interactive installation projects. I enjoy blending concept, storytelling, and visual systems into work that feels both expressive and meaningful.\n\nMy practice explores how people connect with images, objects, spaces, and digital systems. I care deeply about atmosphere, interaction, and emotional resonance.\n\nFeel free to explore the folders on this desktop to view different parts of my portfolio.",
    heroImage: "/images/about/profile-cover.jpg",
    detailImages: [
      "/images/about/gallery-1.jpg",
      "/images/about/gallery-2.jpg",
      "/images/about/gallery-3.jpg",
      "/images/about/gallery-4.jpg",
      "/images/about/gallery-5.jpg",
      "/images/about/gallery-6.jpg",
    ],
    images: [
      "/images/about/gallery-1.jpg",
      "/images/about/gallery-2.jpg",
      "/images/about/gallery-3.jpg",
      "/images/about/gallery-4.jpg",
      "/images/about/gallery-5.jpg",
      "/images/about/gallery-6.jpg",
    ],
  },
];

// --------------- BRAND DESIGN ---------------

const brandDesignProjects: ProjectItem[] = [
  {
    id: "bd-1",
    title: "Aurora Skincare Identity",
    year: "2024",
    category: "Brand Design",
    shortDescription:
      "A complete visual identity system for a skincare brand, including logo design, typography, and brand color strategy.",
    fullDescription:
      "A complete visual identity system for a skincare brand, including logo design, typography, packaging direction, and brand color strategy.\n\nThe project started with deep research into the skincare market, competitive landscape, and target audience. From there, I developed a brand strategy rooted in simplicity, natural beauty, and trust.\n\nThe visual system includes a custom wordmark, secondary logo lockups, a curated color palette inspired by natural minerals, and a comprehensive typography system. Packaging concepts were designed to feel premium yet approachable.",
    link: "#",
  },
  {
    id: "bd-2",
    title: "Mori Café Branding",
    year: "2023",
    category: "Brand Design",
    shortDescription:
      "Brand identity for a contemporary café inspired by quiet rituals and natural materials.",
    fullDescription:
      "Brand identity for a contemporary café inspired by quiet rituals and natural materials. Includes logo, menu layout, signage, and takeaway packaging.\n\nThe concept centers around the Japanese idea of 'mori' (forest), bringing the calm of nature into an urban café setting. Every touchpoint was designed to evoke warmth and tranquility.\n\nDeliverables include a hand-drawn logo, menu system, environmental signage, custom packaging, and a social media template kit.",
    link: "#",
  },
  {
    id: "bd-3",
    title: "Studio Flux Rebrand",
    year: "2023",
    category: "Brand Design",
    shortDescription:
      "Rebranding project for a multidisciplinary creative studio with a bold new visual language.",
    fullDescription:
      "Rebranding project for a multidisciplinary creative studio. Developed a bold visual language, grid system, and flexible brand applications across digital and print touchpoints.\n\nThe rebrand involved a complete overhaul of the studio's identity — from strategy and naming refinement to a modular design system that adapts fluidly across web, print, and environmental applications.\n\nA key challenge was creating a system that felt cohesive yet flexible enough for the studio's diverse range of projects.",
  },
];

// --------------- PRINT DESIGN ---------------

const printDesignProjects: ProjectItem[] = [
  {
    id: "pr-1",
    title: "DADA Newspaper Vol. 1",
    year: "2025",
    category: "Print Design",
    thumbnail: "/images/print/dada/dada-v5_heropage.jpg",
    shortDescription:
      "A print editorial project presented as a sequence of newspaper spreads, exploring pacing, layout, and typographic rhythm.",
    heroImage: "/images/print/dada/dada-v5_heropage.jpg",
    fullDescription:
      "DADA Newspaper Vol. 1 is a print design project exploring editorial pacing, visual sequencing, and spread-based storytelling.\n\nThe project is structured as a sequence of newspaper spreads, where typography, image placement, and composition work together to build rhythm across the publication.\n\nThis work focuses on how printed matter can guide attention, create pauses, and shape narrative flow through layout decisions.",
    detailImages: [
      "/images/print/dada/dada-v5_Page_01.jpg",
      "/images/print/dada/dada-v5_Page_02.jpg",
      "/images/print/dada/dada-v5_Page_03.jpg",
      "/images/print/dada/dada-v5_Page_04.jpg",
      "/images/print/dada/dada-v5_Page_05.jpg",
      "/images/print/dada/dada-v5_Page_06.jpg",
      "/images/print/dada/dada-v5_Page_07.jpg",
      "/images/print/dada/dada-v5_Page_08.jpg",
      "/images/print/dada/dada-v5_Page_09.jpg",
      "/images/print/dada/dada-v5_Page_10.jpg",
      "/images/print/dada/dada-v5_Page_11.jpg",
      "/images/print/dada/dada-v5_Page_12.jpg",
      "/images/print/dada/dada-v5_Page_13.jpg",
      "/images/print/dada/dada-v5_Page_14.jpg",
      "/images/print/dada/dada-v5_Page_15.jpg",
      "/images/print/dada/dada-v5_Page_16.jpg",
      "/images/print/dada/dada-v5_Page_17.jpg",
      "/images/print/dada/dada-v5_Page_18.jpg",
      "/images/print/dada/dada-v5_Page_19.jpg",
    ],
    images: [
      "/images/print/dada/dada-v5_Page_01.jpg",
      "/images/print/dada/dada-v5_Page_02.jpg",
      "/images/print/dada/dada-v5_Page_03.jpg",
      "/images/print/dada/dada-v5_Page_04.jpg",
      "/images/print/dada/dada-v5_Page_05.jpg",
      "/images/print/dada/dada-v5_Page_06.jpg",
      "/images/print/dada/dada-v5_Page_07.jpg",
      "/images/print/dada/dada-v5_Page_08.jpg",
      "/images/print/dada/dada-v5_Page_09.jpg",
      "/images/print/dada/dada-v5_Page_10.jpg",
      "/images/print/dada/dada-v5_Page_11.jpg",
      "/images/print/dada/dada-v5_Page_12.jpg",
      "/images/print/dada/dada-v5_Page_13.jpg",
      "/images/print/dada/dada-v5_Page_14.jpg",
      "/images/print/dada/dada-v5_Page_15.jpg",
      "/images/print/dada/dada-v5_Page_16.jpg",
      "/images/print/dada/dada-v5_Page_17.jpg",
      "/images/print/dada/dada-v5_Page_18.jpg",
      "/images/print/dada/dada-v5_Page_19.jpg",
    ],
  },
  {
    id: "pr-2",
    title: "The Eye That Dreams",
    year: "2025",
    category: "Print Design",
    thumbnail: "/images/print/the-eye-that-dreams/After_Dadda_Page_HERO.jpg",
    shortDescription:
      "A print design project exploring sequencing, visual rhythm, and dreamlike editorial composition.",
    heroImage: "/images/print/the-eye-that-dreams/After_Dadda_Page_HERO.jpg",
    fullDescription:
      "The Eye That Dreams is a print design project developed through a sequence of editorial pages and spreads.\n\nThe project explores visual rhythm, narrative pacing, and the relationship between image, typography, and layout. Each page contributes to a dreamlike reading experience, where composition and sequencing shape the emotional flow of the publication.\n\nThis work focuses on how print can create atmosphere through structure, repetition, contrast, and page-to-page transitions.",
    detailImages: [
      "/images/print/the-eye-that-dreams/After_Dadda_Page_01.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_02.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_03.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_04.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_05.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_06.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_07.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_08.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_09.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_10.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_11.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_12.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_13.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_14.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_15.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_16.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_17.jpg",
    ],
    images: [
      "/images/print/the-eye-that-dreams/After_Dadda_Page_01.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_02.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_03.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_04.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_05.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_06.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_07.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_08.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_09.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_10.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_11.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_12.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_13.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_14.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_15.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_16.jpg",
      "/images/print/the-eye-that-dreams/After_Dadda_Page_17.jpg",
    ],
  },
  {
    id: "pr-3",
    title: "Low Battery No Childhood",
    year: "2025",
    category: "Print Design",
    thumbnail: "/images/print/siminar-4/Siminar_4_W4_Page_HERO.jpg",
    shortDescription:
      "A print design project exploring editorial sequencing, graphic rhythm, and page-based visual storytelling.",
    heroImage: "/images/print/siminar-4/Siminar_4_W4_Page_HERO.jpg",
    fullDescription:
      "Siminar 4 is a print design project developed as a sequence of editorial pages and spreads.\n\nThe project explores pacing, visual hierarchy, and the relationship between image, typography, and layout across multiple pages.\n\nThis work focuses on how print can communicate atmosphere and narrative through structured composition, repetition, and variation from page to page.",
    detailImages: [
      "/images/print/siminar-4/Siminar_4_W4_Page_1.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_2.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_3.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_4.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_5.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_6.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_7.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_8.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_9.jpg",
    ],
    images: [
      "/images/print/siminar-4/Siminar_4_W4_Page_1.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_2.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_3.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_4.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_5.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_6.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_7.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_8.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_9.jpg",
    ],
  },
];
// --------------- GAME DESIGN ---------------

const gameDesignProjects: ProjectItem[] = [
  {
    id: "gd-1",
    title: "Dream Archive",
    year: "2024",
    category: "Game Design",
    shortDescription:
      "A narrative game concept focused on memory, exploration, and environmental storytelling.",
    fullDescription:
      "A narrative game concept focused on memory, exploration, and environmental storytelling. Developed the world-building, interaction flow, and visual direction.\n\nThe game places the player in a surreal archive of dream fragments, where each room represents a different memory. Interaction is slow and contemplative, emphasizing discovery over challenge.\n\nI designed the spatial logic, narrative structure, visual mood boards, and key interaction moments.",
    link: "#",
  },
  {
    id: "gd-2",
    title: "Loop Room",
    year: "2023",
    category: "Game Design",
    shortDescription:
      "An experimental puzzle game set in a looping interior space.",
    fullDescription:
      "An experimental puzzle game set in a looping interior space. Designed the spatial logic, player progression, and interactive cues.\n\nThe core mechanic revolves around spatial loops — rooms that reconfigure based on the player's actions. The game explores themes of repetition, memory, and architectural impossibility.\n\nI was responsible for level design, interaction patterns, and the visual atmosphere of the game world.",
  },
  {
    id: "gd-3",
    title: "Soft Signal",
    year: "2023",
    category: "Game Design",
    shortDescription:
      "A concept-driven indie game exploring emotional choice and ambient interaction.",
    fullDescription:
      "A concept-driven indie game exploring emotional choice and ambient interaction. Focused on interface language, gameplay mood, and player experience design.\n\nSoft Signal is a game about listening — to the environment, to subtle cues, and to the emotional state of the player character. The interface is minimal, using color, sound, and gentle motion to communicate.\n\nI designed the full interaction framework, emotional arc mapping, and visual direction.",
  },
];

// --------------- UI DESIGN ---------------

const uiDesignProjects: ProjectItem[] = [
  {
    id: "ui-1",
    title: "Wellness Tracker Interface",
    year: "2024",
    category: "UI Design",
    shortDescription:
      "A clean and calming mobile UI system for daily wellness tracking.",
    fullDescription:
      "A clean and calming mobile UI system for daily wellness tracking, featuring modular cards, intuitive navigation, and clear information hierarchy.\n\nThe design system includes over 40 components across light and dark themes. Key screens include daily check-in, habit tracking, mood journaling, and progress visualization.\n\nDesigned with accessibility in mind, using high-contrast color tokens and scalable typography.",
    link: "#",
  },
  {
    id: "ui-2",
    title: "Creative Portfolio Dashboard",
    year: "2023",
    category: "UI Design",
    shortDescription:
      "A dashboard interface for creatives to organize projects, assets, and presentations.",
    fullDescription:
      "Designed a dashboard interface for creatives to organize projects, assets, and presentations. Emphasis on usability, visual balance, and scalable components.\n\nThe dashboard supports drag-and-drop project organization, asset tagging, and presentation mode. The component library was built with reusability in mind, using a strict design token system.\n\nPrototyped in Figma with full interactive flows and micro-interactions.",
  },
  {
    id: "pr-3",
    title: "Siminar 4",
    year: "2025",
    category: "Print Design",
    thumbnail: "/images/print/siminar-4/Siminar_4_W4_Page_HERO.jpg",
    shortDescription:
      "A print design project exploring editorial sequencing, graphic rhythm, and page-based visual storytelling.",
    heroImage: "/images/print/siminar-4/Siminar_4_W4_Page_HERO.jpg",
    fullDescription:
      "Siminar 4 is a print design project developed as a sequence of editorial pages and spreads.\n\nThe project explores pacing, visual hierarchy, and the relationship between image, typography, and layout across multiple pages.\n\nThis work focuses on how print can communicate atmosphere and narrative through structured composition, repetition, and variation from page to page.",
    detailImages: [
      "/images/print/siminar-4/Siminar_4_W4_Page_1.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_2.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_3.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_4.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_5.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_6.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_7.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_8.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_9.jpg",
    ],
    images: [
      "/images/print/siminar-4/Siminar_4_W4_Page_1.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_2.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_3.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_4.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_5.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_6.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_7.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_8.jpg",
      "/images/print/siminar-4/Siminar_4_W4_Page_9.jpg",
    ],
  },
];

// --------------- INTERACTIVE INSTALLATIONS ---------------

const interactiveInstallationsProjects: ProjectItem[] = [
  {
    id: "ii-1",
    title: "Echo Chamber",
    year: "2024",
    category: "Interactive Installations",
    shortDescription:
      "An interactive spatial installation responding to movement and sound.",
    fullDescription:
      "An interactive spatial installation responding to movement and sound. Designed the audience journey, interaction concept, and visual atmosphere.\n\nEcho Chamber uses depth sensors and microphones to create a responsive environment where visitors' movements and voices generate visual and auditory feedback. The space evolves over time, creating a collective audiovisual memory.\n\nI led the interaction design, spatial planning, and visual direction.",
    link: "#",
  },
  {
    id: "ii-2",
    title: "Touch / Trace",
    year: "2023",
    category: "Interactive Installations",
    shortDescription:
      "A multisensory installation exploring touch, projection, and responsive light.",
    fullDescription:
      "A multisensory installation exploring touch, projection, and responsive light behavior. Focused on physical interaction design and emotional engagement.\n\nVisitors interact with a tactile surface that responds to pressure and gesture. Projections shift and morph based on touch patterns, creating unique visual traces that fade over time.\n\nThe installation explores themes of impermanence, presence, and the relationship between body and light.",
  },
  {
    id: "ii-3",
    title: "Signal Garden",
    year: "2023",
    category: "Interactive Installations",
    shortDescription:
      "An installation combining sensor input, real-time visuals, and spatial composition.",
    fullDescription:
      "An installation concept combining sensor input, real-time visuals, and spatial composition to create a participatory public experience.\n\nSignal Garden transforms a public space into a reactive garden where visitors' proximity and movement trigger generative visuals and ambient sound. Each 'plant' in the garden is a sensor node that responds to nearby presence.\n\nI designed the interaction framework, visual language, and spatial layout.",
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

export const getProjectById = (id: string): ProjectItem | undefined => {
  for (const folder of folders) {
    const project = folder.items.find((p) => p.id === id);
    if (project) return project;
  }
  return undefined;
};
