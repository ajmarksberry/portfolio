import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isLive = study.status === "published";

  const inner = (
    <div
      className={`group rounded-xl overflow-hidden transition-all border ${
        isLive ? "cursor-pointer hover:shadow-xl hover:-translate-y-0.5" : "opacity-40 cursor-default"
      }`}
      style={{ borderColor: "#1a6b7a33", background: "#fff" }}
    >
      {/* Cover */}
      <div
        className={`h-48 flex items-center justify-center`}
        style={{ background: study.coverColor }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#1a6b7a" }}>
          {isLive ? study.tags[0] : "Coming Soon"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: "var(--teal-light)", color: "var(--teal)" }}
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-xs" style={{ color: "var(--sand)" }}>{study.year}</span>
        </div>
        <h3
          className="text-lg font-semibold mb-2 transition-colors"
          style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
        >
          {study.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#4a6a7a" }}>{study.subtitle}</p>
      </div>
    </div>
  );

  if (!isLive) return inner;

  return <Link href={`/work/${study.slug}`}>{inner}</Link>;
}
