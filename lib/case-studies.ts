export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  status: "published" | "coming-soon";
  coverColor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "post-booking-ux",
    title: "Enhancements to the post-booking experience",
    subtitle:
      "Redesigning how travel agents manage client itineraries — from trip list to cancellation — on Expedia TAAP.",
    tags: ["B2B", "TAAP", "Itinerary Management"],
    year: "2026",
    status: "published",
    coverColor: "#e8f4f6",
  },
  {
    slug: "itinerary-builder",
    title: "Itinerary Builder",
    subtitle:
      "Running a 2-day design workshop to align a cross-functional team on a new direction for how travel agents build and share itineraries.",
    tags: ["B2B", "TAAP", "Workshop"],
    year: "2026",
    status: "published",
    coverColor: "#e8f4f6",
  },
  {
    slug: "coming-soon-3",
    title: "Case Study 3",
    subtitle: "Coming soon.",
    tags: ["B2B", "TAAP"],
    year: "2024",
    status: "coming-soon",
    coverColor: "#fdf6e9",
  },
];
