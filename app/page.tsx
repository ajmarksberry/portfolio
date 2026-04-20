import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-4">
          UX Designer
        </p>
        <h1 className="text-5xl font-bold leading-tight text-slate-900 mb-6 max-w-2xl">
          Designing for the people who help people travel.
        </h1>
        <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
          I&apos;m AJ Marksberry — a Senior UX Designer at Expedia, focused on B2B tools
          that empower travel agents to do their best work.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-100" />

      {/* Case Studies */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">
          Selected Work
        </h2>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
            <p className="text-slate-500 leading-relaxed">
              I specialize in complex B2B workflows — the kind where a single design decision
              affects thousands of travel agents and millions of traveler itineraries.
              I care deeply about systems thinking, clear hierarchy, and shipping things
              that actually get used.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Open to freelance projects and full-time opportunities.
            </p>
            <a
              href="mailto:ajmarksberry@gmail.com"
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline"
            >
              ajmarksberry@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
