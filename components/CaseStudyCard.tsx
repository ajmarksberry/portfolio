import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isLive = study.status === "published";

  const inner = (
    <div
      className={`group rounded-2xl border border-slate-100 overflow-hidden transition-shadow hover:shadow-lg ${
        isLive ? "cursor-pointer" : "opacity-50 cursor-default"
      }`}
    >
      {/* Cover */}
      <div className={`${study.coverColor} h-48 flex items-center justify-center`}>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          {isLive ? study.tags[0] : "Coming Soon"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-xs text-slate-400">{study.year}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{study.subtitle}</p>
      </div>
    </div>
  );

  if (!isLive) return inner;

  return <Link href={`/work/${study.slug}`}>{inner}</Link>;
}
