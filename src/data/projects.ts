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
    image: "/projects/marina-penthouse-terrace.avif",
    gallery: [
      "/projects/marina-penthouse-terrace.avif",
      "/project/imgi_4_68cc43098d11d3195b15f68e_CSD III 2025 Amy Trowman 273 Bayview 137016.avif",
      "/project/imgi_6_68cc431a3bccb8150af1b71f_CSD III 2025 Amy Trowman 273 Bayview 137070.avif",
      "/visuals/PHOTO-2025-04-15-12-21-16.jpg",
      "/visuals/PHOTO-2025-04-15-12-53-57.jpg",
    ],
  },
  {
    id: "downtown",
    status: "completed" as const,
    image: "/projects/downtown-villa-living.avif",
    gallery: [
      "/projects/downtown-villa-living.avif",
      "/visuals/PHOTO-2025-04-15-12-47-21.jpg",
      "/visuals/PHOTO-2025-04-15-11-41-36.jpg",
      "/projects/villa-exterior.avif",
      "/project/imgi_5_68cc4316a2f5c9ab818834e4_CSD III 2025 Amy Trowman 273 Bayview 137091.avif",
    ],
  },
  {
    id: "albarari",
    status: "concept" as const,
    image: "/projects/al-barari-kitchen.avif",
    gallery: [
      "/projects/al-barari-kitchen.avif",
      "/images/imgi_5_5ec2cc246e545fb9e2700871_NoHo Loft_006.jpg",
      "/images/imgi_4_5ec2cad6308d2152492c7406_Hathaway_003.jpg",
      "/visuals/PHOTO-2025-04-15-13-00-28.jpg",
    ],
  },
  {
    id: "jbr",
    status: "completed" as const,
    image: "/projects/jbr-apartment-bathroom.avif",
    gallery: [
      "/projects/jbr-apartment-bathroom.avif",
      "/visuals/PHOTO-2025-04-15-11-42-51.jpg",
      "/visuals/PHOTO-2025-04-15-12-08-10.jpg",
      "/project/imgi_7_68cc431f4ebc6e70855194d6_CSD III 2025 Amy Trowman 273 Bayview 136980.avif",
    ],
  },
];
