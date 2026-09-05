export type Project = {
  id: string;
  status: "completed" | "concept";
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "marina",
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1783667818798-38903081f98f?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1783667818798-38903081f98f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611021061285-16c871740efa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1751283226474-869937c075d6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1659930087003-2d64e33181f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1693892985308-44965a6060d1?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "downtown",
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1753893558281-9acda0662bbd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1758448755856-01d3add0177b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "albarari",
    status: "concept" as const,
    image: "https://images.unsplash.com/photo-1682888813913-e13f18692019?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1682888813913-e13f18692019?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1764526624453-db32c24eca55?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1751283226474-869937c075d6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1755816764831-2803235f0099?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "jbr",
    status: "completed" as const,
    image: "https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];
