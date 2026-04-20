import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: "var(--teal)" }}>
          UX Designer
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6 max-w-2xl" style={{ color: "var(--navy)" }}>
          Good design, like good fishing, is mostly about patience and knowing where to look.
        </h1>
        <p className="text-xl max-w-xl leading-relaxed" style={{ color: "#4a6a7a" }}>
          I&apos;m AJ Marksberry — a Senior UX Designer specializing in B2B tools
          that help travel agents do their best work. When I&apos;m not untangling
          user flows, I&apos;m probably untangling a line.
        </p>
      </section>

      <hr className="water-rule max-w-4xl mx-auto" />

      {/* Case Studies */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: "var(--sand)" }}>
          Selected Work
        </h2>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* About strip */}
      <section id="about" className="border-t border-[#1a6b7a]/20" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#f7f4ee" }}>About</h2>
            <p className="leading-relaxed" style={{ color: "#a8c5cc" }}>
              I specialize in complex B2B workflows — the kind where a single design decision
              affects thousands of travel agents and millions of traveler itineraries.
              I care deeply about systems thinking, clear hierarchy, and shipping things
              that actually get used.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#f7f4ee" }}>Contact</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#a8c5cc" }}>
              Open to full-time opportunities and the right freelance projects.
            </p>
            <a
              href="mailto:ajmarksberry@gmail.com"
              className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--sand)" }}
            >
              ajmarksberry@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
