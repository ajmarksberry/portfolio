import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  const live = caseStudies.filter((s) => s.status === "published");
  const soon = caseStudies.filter((s) => s.status === "coming-soon");

  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "112px 24px 96px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24, lineHeight: "20px" }}>
          Senior UX Designer
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 72, lineHeight: "80px", fontWeight: 700, color: "var(--ink)", maxWidth: 720, marginBottom: 32 }}>
          Designing products people actually use.
        </h1>
        <p style={{ fontSize: 18, lineHeight: "32px", color: "var(--muted)", maxWidth: 520, marginBottom: 48 }}>
          10+ years designing B2B tools at Expedia. I work at the intersection of complex systems
          and real human beings who just want to get things done.
        </p>
        <Link
          href="/contact"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "var(--white)", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 4, textDecoration: "none" }}
        >
          Available for hire →
        </Link>
      </section>

      {/* Work */}
      <section style={{ borderTop: "1px solid var(--rule)", maxWidth: 960, margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 48 }}>
          Selected Work
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {live.map((study, i) => (
            <Link key={study.slug} href={`/work/${study.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", gap: 32, alignItems: "start", borderTop: "1px solid var(--rule)", padding: "40px 0", cursor: "pointer" }}
                className="work-row"
              >
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "var(--muted)", paddingTop: 4 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    {study.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: "36px", fontWeight: 700, color: "var(--ink)", marginBottom: 12 }}>
                    {study.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: "24px", color: "var(--muted)", maxWidth: 560 }}>
                    {study.subtitle}
                  </p>
                </div>
                <span style={{ fontSize: 13, color: "var(--muted)", paddingTop: 4, whiteSpace: "nowrap" }}>
                  {study.year}
                </span>
              </div>
            </Link>
          ))}

          {soon.map((study, i) => (
            <div
              key={study.slug}
              style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", gap: 32, alignItems: "start", borderTop: "1px solid var(--rule)", padding: "40px 0", opacity: 0.35 }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "var(--muted)", paddingTop: 4 }}>
                {String(live.length + i + 1).padStart(2, "0")}
              </span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>
                  Coming Soon
                </p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, lineHeight: "36px", fontWeight: 700, color: "var(--ink)" }}>
                  {study.title}
                </h3>
              </div>
              <span style={{ fontSize: 13, color: "var(--muted)", paddingTop: 4 }}>
                {study.year}
              </span>
            </div>
          ))}

          <div style={{ borderTop: "1px solid var(--rule)" }} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ background: "var(--paper)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: "44px", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
              About
            </h2>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)", marginBottom: 16 }}>
              I&apos;m a Senior UX Designer with 10+ years working on B2B products. Most recently
              at Expedia TAAP, designing tools used by thousands of travel agents worldwide.
            </p>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)" }}>
              I work best on hard problems — complex workflows, messy data, and the kind of
              edge cases that make engineers nervous.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: "44px", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
              Currently
            </h2>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)", marginBottom: 32 }}>
              Open to full-time UX and product design roles. Based in [city]. Remote-friendly.
            </p>
            <Link
              href="/contact"
              style={{ fontSize: 15, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
