import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      {/* Hero — 112px top, 128px bottom = 28 + 32 units on 4px grid */}
      <section
        className="relative overflow-hidden px-6 pt-28 pb-32"
        style={{ background: "var(--navy)" }}
      >
        <span
          className="absolute right-0 top-0 select-none pointer-events-none font-bold opacity-[0.04]"
          style={{
            color: "#fff",
            fontFamily: "var(--font-serif)",
            fontSize: "320px",      /* 80 × 4px */
            lineHeight: "320px",    /* on grid */
          }}
          aria-hidden
        >
          AJ
        </span>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Label — mb-8 = 32px */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-8"
            style={{ color: "var(--sand)", lineHeight: "var(--line-height-small)" }}
          >
            Senior UX Designer — B2B
          </p>

          {/* H1 — mb-8 = 32px, line-height locked to grid */}
          <h1
            className="font-bold mb-8 max-w-3xl"
            style={{
              color: "#f7f4ee",
              fontSize: "64px",    /* 16 × 4px */
              lineHeight: "72px",  /* 18 × 4px */
            }}
          >
            I make things easier to use.{" "}
            <em className="not-italic" style={{ color: "var(--teal)", opacity: 0.85 }}>
              I am not, myself, easy to use.
            </em>
          </h1>

          {/* Body — mb-0, line-height 28px = 7 × 4px */}
          <p
            className="max-w-lg"
            style={{
              color: "#6a9aaa",
              fontSize: "18px",   /* not 4px-divisible but standard — line-height compensates */
              lineHeight: "28px", /* 7 × 4px */
            }}
          >
            AJ Marksberry — designing B2B tools for travel agents at Expedia TAAP.
            When I&apos;m not untangling user flows, I&apos;m probably untangling a line.
          </p>

          {/* Divider — mt-14 = 56px = 14 × 4px */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 opacity-20" style={{ background: "var(--teal)" }} />
            <span className="text-xs uppercase tracking-widest opacity-30" style={{ color: "#f7f4ee" }}>
              scroll
            </span>
            <div className="h-px w-8 opacity-20" style={{ background: "var(--teal)" }} />
          </div>
        </div>
      </section>

      {/* Work — pt-24 = 96px, pb-24 = 96px */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
        {/* Header — mb-16 = 64px = 16 × 4px */}
        <div className="flex items-baseline justify-between mb-16">
          <h2
            className="font-bold"
            style={{ color: "var(--navy)", fontSize: "32px", lineHeight: "40px" }}
          >
            Selected Work
          </h2>
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--sand)", lineHeight: "var(--line-height-small)" }}
          >
            {caseStudies.filter((s) => s.status === "published").length} case studies
          </span>
        </div>

        <div className="flex flex-col">
          {caseStudies.map((study, i) => {
            const isLive = study.status === "published";
            const card = (
              <div
                key={study.slug}
                className={`group relative border-t transition-all duration-300 ${
                  isLive ? "cursor-pointer" : "opacity-40 cursor-default"
                }`}
                style={{
                  borderColor: "#1a6b7a33",
                  paddingTop: "40px",    /* 10 × 4px */
                  paddingBottom: "40px", /* 10 × 4px */
                }}
              >
                {isLive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -mx-4 px-4"
                    style={{ background: "var(--teal-light)" }}
                  />
                )}

                <div className="relative flex items-start gap-8">
                  {/* Number — 56px = 14 × 4px */}
                  <span
                    className="font-bold leading-none shrink-0"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "56px",
                      lineHeight: "56px", /* on grid */
                      color: isLive ? "var(--sand)" : "#ccc",
                      opacity: 0.5,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1" style={{ paddingTop: "4px" }}>
                    {/* Tags — mb-3 = 12px */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 rounded-full"
                          style={{
                            background: "var(--teal-light)",
                            color: "var(--teal)",
                            paddingTop: "4px",    /* 1 × 4px */
                            paddingBottom: "4px", /* 1 × 4px */
                            lineHeight: "var(--line-height-small)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      <span
                        className="text-xs ml-auto"
                        style={{ color: "var(--sand)", lineHeight: "var(--line-height-small)" }}
                      >
                        {study.year}
                      </span>
                    </div>

                    {/* Title — mb-2 = 8px */}
                    <h3
                      className="font-bold mb-2 transition-colors duration-300"
                      style={{
                        color: "var(--navy)",
                        fontFamily: "var(--font-serif)",
                        fontSize: "24px",
                        lineHeight: "32px", /* 8 × 4px */
                      }}
                    >
                      {study.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className="max-w-xl"
                      style={{
                        color: "#4a6a7a",
                        fontSize: "16px",
                        lineHeight: "28px", /* 7 × 4px */
                      }}
                    >
                      {study.subtitle}
                    </p>
                  </div>

                  {isLive && (
                    <div
                      className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                      style={{
                        color: "var(--teal)",
                        fontSize: "24px",
                        lineHeight: "56px", /* aligns with number */
                      }}
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
          <div className="border-t" style={{ borderColor: "#1a6b7a33" }} />
        </div>
      </section>

      {/* About — pt-24 pb-24 = 96px each */}
      <section
        id="about"
        className="border-t"
        style={{ background: "var(--navy)", borderColor: "rgba(26,107,122,0.2)" }}
      >
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="font-bold mb-6"
              style={{ color: "#f7f4ee", fontSize: "32px", lineHeight: "40px" }}
            >
              About
            </h2>
            {/* mb-4 = 16px between paras */}
            <p className="mb-4" style={{ color: "#6a9aaa", lineHeight: "28px" }}>
              I specialize in complex B2B workflows — the kind where a single
              poorly-labeled button can ruin someone&apos;s entire Tuesday. I&apos;ve
              sat through hundreds of user interviews, which is basically therapy
              except the client is a travel agent and no one is making progress.
            </p>
            <p style={{ color: "#6a9aaa", lineHeight: "28px" }}>
              Outside of work, I fish. I am not good at fishing either, but at
              least there&apos;s no stakeholder review.
            </p>
          </div>

          <div>
            <h2
              className="font-bold mb-6"
              style={{ color: "#f7f4ee", fontSize: "32px", lineHeight: "40px" }}
            >
              Let&apos;s talk.
            </h2>
            <p className="mb-6" style={{ color: "#6a9aaa", lineHeight: "28px" }}>
              Actively looking for full-time UX or product design roles. I work
              hard, ask good questions, and I promise my Figma files are
              organized. (One of those might be a lie.)
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-semibold transition-opacity hover:opacity-70"
              style={{
                color: "var(--sand)",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              Get in touch
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
