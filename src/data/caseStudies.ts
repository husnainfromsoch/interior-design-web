// Homepage case-study tiles (spec §5 H03). Full case-study pages (P15–P18) are a
// separate, later task — this is only the data needed for the homepage grid.
// Images are placeholders from the client's own supplied photography (public/visuals),
// not final project-to-photo assignments; the client confirms which photo belongs to
// which project before this goes live (spec §38).
export type CaseStudy = {
  id: string;
  titleKey: string;
  roleKey: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "jumeirah-islands",
    titleKey: "jumeirahIslands",
    roleKey: "jumeirahIslandsRole",
    image: "/visuals/PHOTO-2025-04-15-09-20-47(1).jpg",
  },
  {
    id: "vista-tower",
    titleKey: "vistaTower",
    roleKey: "vistaTowerRole",
    image: "/visuals/PHOTO-2025-04-15-11-30-59(1).jpg",
  },
  {
    id: "arabian-ranches",
    titleKey: "arabianRanches",
    roleKey: "arabianRanchesRole",
    image: "/visuals/PHOTO-2025-04-15-11-47-05(1).jpg",
  },
  {
    id: "business-bay",
    titleKey: "businessBay",
    roleKey: "businessBayRole",
    image: "/visuals/PHOTO-2025-04-15-12-06-40(1).jpg",
  },
];
