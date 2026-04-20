import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-medium uppercase tracking-widest mb-5" style={{ color: "var(--teal)" }}>
          UX Designer — allegedly
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6 max-w-2xl" style={{ color: "var(--navy)" }}>
          I make things easier to use. I am not, myself, easy to use.
        </h1>
        <p className="text-xl max-w-xl leading-relaxed" style={{ color: "#4a6a7a" }}>
          I&apos;m AJ Marksberry — a Senior UX Designer at Expedia TAAP. I&apos;ve spent years
          designing B2B tools for travel agents, which means I&apos;ve become very good at
          solving problems I didn&apos;t create. Most of them, anyway.
        </p>
      </section>

      <hr className="water-rule max-w-4xl mx-auto" />

      {/* Case Studies */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--sand)" }}>
          Selected Work
        </h2>
        <p className="text-sm mb-10" style={{ color: "#4a6a7a" }}>
          Projects I&apos;m proud of. The others are in a locked Figma file labeled &ldquo;do not open.&rdquo;
        </p>
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
            <p className="leading-relaxed mb-4" style={{ color: "#a8c5cc" }}>
              I specialize in complex B2B workflows — the kind where a single poorly-labeled
              button can ruin someone&apos;s entire Tuesday. I&apos;ve sat through hundreds of user
              interviews, which is basically therapy except the client is a travel agent
              and no one is making progress.
            </p>
            <p className="leading-relaxed" style={{ color: "#a8c5cc" }}>
              Outside of work, I fish. I am not good at fishing either, but at least
              there&apos;s no stakeholder review.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#f7f4ee" }}>Hire Me</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#a8c5cc" }}>
              Actively looking for full-time UX or product design roles. I work hard,
              ask good questions, and I promise my Figma files are organized.
              (One of those might be a lie.)
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
