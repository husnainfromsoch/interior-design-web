export type Project = {
  id: string;
  status: "completed" | "concept";
  image: string;
};

export const projects: Project[] = [
  {
    id: "marina",
    status: "completed" as const,
    image: "/projects/marina-penthouse-terrace.avif",
  },
  {
    id: "downtown",
    status: "completed" as const,
    image: "/projects/downtown-villa-living.avif",
  },
  {
    id: "albarari",
    status: "concept" as const,
    image: "/projects/al-barari-kitchen.avif",
  },
  {
    id: "jbr",
    status: "completed" as const,
    image: "/projects/jbr-apartment-bathroom.avif",
  },
];
