import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* Hero — full dark */}
      <section
        className="relative overflow-hidden px-6 pt-28 pb-32"
        style={{ background: "var(--navy)" }}
      >
        {/* Giant decorative number */}
        <span
          className="absolute right-0 top-0 select-none pointer-events-none text-[28rem] font-bold leading-none opacity-[0.04]"
          style={{ color: "#fff", fontFamily: "var(--font-serif)", lineHeight: 1 }}
          aria-hidden
        >
          AJ
        </span>

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-8"
            style={{ color: "var(--sand)" }}
          >
            Senior UX Designer — B2B
          </p>
          <h1
            className="text-6xl md:text-7xl font-bold leading-[1.05] mb-10 max-w-3xl"
            style={{ color: "#f7f4ee" }}
          >
            I make things easier to use.{" "}
            <em className="not-italic" style={{ color: "var(--teal)", opacity: 0.85 }}>
              I am not, myself, easy to use.
            </em>
          </h1>
          <p className="text-lg max-w-lg leading-relaxed" style={{ color: "#6a9aaa" }}>
            AJ Marksberry — designing B2B tools for travel agents at Expedia TAAP.
            When I&apos;m not untangling user flows, I&apos;m probably untangling a line.
          </p>

          {/* Divider rule */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 opacity-20" style={{ background: "var(--teal)" }} />
            <span className="text-xs uppercase tracking-widest opacity-30" style={{ color: "#f7f4ee" }}>
              scroll
            </span>
            <div className="h-px w-8 opacity-20" style={{ background: "var(--teal)" }} />
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="text-3xl font-bold" style={{ color: "var(--navy)" }}>
            Selected Work
          </h2>
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--sand)" }}>
            {caseStudies.filter(s => s.status === "published").length} case studies
          </span>
        </div>

        <div className="flex flex-col">
          {caseStudies.map((study, i) => {
            const isLive = study.status === "published";
            const card = (
              <div
                key={study.slug}
                className={`group relative border-t py-10 transition-all duration-300 ${
                  isLive ? "cursor-pointer" : "opacity-40 cursor-default"
                }`}
                style={{ borderColor: "#1a6b7a33" }}
              >
                {/* Hover fill */}
                {isLive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -mx-4 px-4"
                    style={{ background: "var(--teal-light)" }}
                  />
                )}

                <div className="relative flex items-start gap-8">
                  {/* Number */}
                  <span
                    className="text-6xl font-bold leading-none shrink-0 transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: isLive ? "var(--sand)" : "#ccc",
                      opacity: 0.5,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{ background: "var(--teal-light)", color: "var(--teal)" }}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs ml-auto" style={{ color: "var(--sand)" }}>
                        {study.year}
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#0e3d4a]"
                      style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                    >
                      {study.title}
                    </h3>
                    <p className="leading-relaxed max-w-xl" style={{ color: "#4a6a7a" }}>
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  {isLive && (
                    <div
                      className="shrink-0 pt-1 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                      style={{ color: "var(--teal)" }}
                    >
                      →
                    </div>
                  )}
                </div>
              </div>
            );

            return isLive ? (
              <Link key={study.slug} href={`/work/${study.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={study.slug}>{card}</div>
            );
          })}

          {/* Bottom border */}
          <div className="border-t" style={{ borderColor: "#1a6b7a33" }} />
        </div>
      </section>

      {/* About — dark panel */}
      <section
        id="about"
        className="border-t border-[#1a6b7a]/20"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#f7f4ee" }}
            >
              About
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "#6a9aaa" }}>
              I specialize in complex B2B workflows — the kind where a single
              poorly-labeled button can ruin someone&apos;s entire Tuesday. I&apos;ve
              sat through hundreds of user interviews, which is basically therapy
              except the client is a travel agent and no one is making progress.
            </p>
            <p className="leading-relaxed" style={{ color: "#6a9aaa" }}>
              Outside of work, I fish. I am not good at fishing either, but at
              least there&apos;s no stakeholder review.
            </p>
          </div>

          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#f7f4ee" }}
            >
              Let&apos;s talk.
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "#6a9aaa" }}>
              Actively looking for full-time UX or product design roles. I work
              hard, ask good questions, and I promise my Figma files are
              organized. (One of those might be a lie.)
            </p>
            <a
              href="mailto:ajmarksberry@gmail.com"
              className="inline-flex items-center gap-3 font-semibold text-lg transition-opacity hover:opacity-70"
              style={{ color: "var(--sand)" }}
            >
              ajmarksberry@gmail.com
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
