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
    coverColor: "bg-emerald-50",
  },
  {
    slug: "coming-soon-2",
    title: "Case Study 2",
    subtitle: "Coming soon.",
    tags: ["B2B", "TAAP"],
    year: "2025",
    status: "coming-soon",
    coverColor: "bg-indigo-50",
  },
  {
    slug: "coming-soon-3",
    title: "Case Study 3",
    subtitle: "Coming soon.",
    tags: ["B2B", "TAAP"],
    year: "2024",
    status: "coming-soon",
    coverColor: "bg-amber-50",
  },
];
