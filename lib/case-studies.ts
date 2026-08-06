export type Tag = { label: string; highlight?: boolean };

export type CaseStudy = {
  slug: string;
  number: string;
  company: string;
  title: string;
  description: string;
  tags: Tag[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "itinerary-builder",
    number: "01",
    company: "Expedia TAAP",
    title: "TAAP Itinerary Builder",
    description:
      "Giving travel agents the power to curate and share personalised itineraries with their clients. Led a 2-day design sprint, built a working prototype with Figma Make, and conducted moderated research with 6 travel agents — from first wireframe to dev handoff.",
    tags: [
      { label: "B2B", highlight: true },
      { label: "Design Sprint" },
      { label: "Usability Research" },
      { label: "2026" },
    ],
  },
  {
    slug: "post-booking-ux",
    number: "02",
    company: "Expedia TAAP",
    title: "TAAP Trips — Post-Booking Experience",
    description:
      "Three design generations — each shipped to production and replaced by the next. Transformed a consumer-borrowed flat list into a professional agent tool through research, friction mapping, and sustained design ownership over three years.",
    tags: [
      { label: "3 Generations", highlight: true },
      { label: "Friction Mapping" },
      { label: "2023–2026" },
    ],
  },
  {
    slug: "reach",
    number: "03",
    company: "Reach (Contract)",
    title: "Reach — AI Booking Platform",
    description:
      "Design Lead on the full Reach platform — end to end, from the first wireframe to a live product used by real businesses. A personalised AI booking experience for clients and a revenue analytics dashboard for business owners.",
    tags: [
      { label: "B2C + B2B", highlight: true },
      { label: "Design System" },
      { label: "2019–2021" },
    ],
  },
];
