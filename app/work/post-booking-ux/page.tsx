import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Post-Booking UX — AJ Marksberry",
  description:
    "Case study: Enhancements to the post-booking experience on Expedia TAAP.",
};

const screens = [
  {
    src: "/case-studies/post-booking/trips-list.png",
    alt: "Trips list with split-pane itinerary view",
    caption: "Split-pane trips list — agents can scan all clients and drill into any itinerary without leaving the page.",
  },
  {
    src: "/case-studies/post-booking/trip-detail.png",
    alt: "Trip detail with commission bar and booking info",
    caption: "Persistent action bar surfaces commission, print, and email actions. Booking confirmation and property details are all above the fold.",
  },
  {
    src: "/case-studies/post-booking/change-stay.png",
    alt: "Change your stay side sheet",
    caption: "\"Change your stay\" side sheet — modular sections for dates, traveler count, room, and traveler details reduce back-and-forth with the property.",
  },
  {
    src: "/case-studies/post-booking/manage-booking.png",
    alt: "Manage booking mobile view",
    caption: "Mobile manage booking — cancellation policy first, then tiered support (property → Expedia) to deflect unnecessary contacts.",
  },
];

export default function PostBookingCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 mb-12 transition-colors"
      >
        ← Back to work
      </Link>

      {/* Header */}
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-5">
          {["B2B", "TAAP", "Itinerary Management"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
          Enhancements to the post-booking user experience
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Travel agents on Expedia TAAP had limited visibility into client itineraries
          after booking. We redesigned the full post-booking workflow — from trips list
          to modification — so agents could manage reservations confidently and quickly.
        </p>

        {/* Meta */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-slate-100 text-sm">
          <div>
            <p className="text-slate-400 mb-1">Role</p>
            <p className="font-medium text-slate-800">Senior UX Designer</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Team</p>
            <p className="font-medium text-slate-800">AJ Marksberry, Tereza Birch</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Collaborators</p>
            <p className="font-medium text-slate-800">Sarah Hameed</p>
          </div>
          <div>
            <p className="text-slate-400 mb-1">Year</p>
            <p className="font-medium text-slate-800">2026</p>
          </div>
        </div>
      </header>

      {/* Cover image placeholder */}
      <div className="bg-emerald-50 rounded-2xl h-72 flex items-center justify-center mb-20 border border-emerald-100">
        <span className="text-sm text-slate-400 font-medium">TAAP — Post-Booking UX</span>
      </div>

      {/* Overview */}
      <Section title="Overview">
        <p>
          TAAP (Travel Agent Affiliate Program) is Expedia&apos;s B2B platform for professional
          travel agents. After booking a trip on behalf of a client, agents needed a reliable
          way to view itinerary details, track payment status, contact properties, and make
          modifications — all without leaving the platform or calling Expedia support.
        </p>
        <p>
          The existing experience was fragmented: key information was buried, action buttons
          were inconsistently placed, and modification flows required agents to navigate to
          multiple separate pages.
        </p>
      </Section>

      {/* Problem */}
      <Section title="The Problem">
        <p>
          [Add your research findings and problem statement here — what data, agent feedback,
          or support ticket themes pointed to this area as a priority?]
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>[Key pain point 1 — e.g. agents couldn&apos;t quickly find confirmation numbers]</li>
          <li>[Key pain point 2 — e.g. modification flow required 4+ page navigations]</li>
          <li>[Key pain point 3 — e.g. commission visibility was a top agent request]</li>
        </ul>
      </Section>

      {/* Process */}
      <Section title="Process">
        <p>
          [Describe your design process — discovery, research methods, iterations, constraints,
          stakeholder alignment. What did early explorations look like? What got cut and why?]
        </p>
      </Section>

      {/* Screens */}
      <Section title="The Design">
        <div className="flex flex-col gap-16 mt-2">
          {screens.map((screen) => (
            <figure key={screen.alt} className="flex flex-col gap-4">
              <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center min-h-64 p-4">
                <span className="text-xs text-slate-400">[Screenshot: {screen.alt}]</span>
              </div>
              <figcaption className="text-sm text-slate-500 leading-relaxed">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          [Add measurable outcomes — task completion rate improvement, support ticket reduction,
          agent satisfaction scores, adoption metrics, etc.]
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>[Metric 1]</li>
          <li>[Metric 2]</li>
          <li>[Metric 3]</li>
        </ul>
      </Section>

      {/* Reflections */}
      <Section title="What I Learned">
        <p>
          [Reflect on the project — what surprised you, what tradeoffs did you navigate,
          what would you do differently?]
        </p>
      </Section>

      {/* Nav footer */}
      <div className="mt-20 pt-8 border-t border-slate-100">
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
        >
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-slate-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
