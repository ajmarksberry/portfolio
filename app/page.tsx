import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  const live = caseStudies.filter((s) => s.status === "published");
  const soon = caseStudies.filter((s) => s.status === "coming-soon");

  return (
    <>
      {/* Hero — not a nav target, flows into #work */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "128px 24px 96px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24, lineHeight: "20px" }}>
          AJ Marksberry — Senior UX Designer
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 64, lineHeight: "72px", fontWeight: 700, color: "var(--ink)", maxWidth: 640, marginBottom: 28 }}>
          Designing products people actually use.
        </h1>
        <p style={{ fontSize: 18, lineHeight: "32px", color: "var(--muted)", maxWidth: 480 }}>
          10+ years designing B2B tools at Expedia. Complex systems,
          real humans, tight deadlines.
        </p>
      </section>

      {/* Work */}
      <section id="work" style={{ borderTop: "1px solid var(--rule)", maxWidth: 800, margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 48, lineHeight: "20px" }}>
          Selected Work
        </p>

        {live.map((study, i) => (
          <Link key={study.slug} href={`/work/${study.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div style={{ display: "grid", gridTemplateColumns: "40px 1fr auto", gap: 28, alignItems: "start", borderTop: "1px solid var(--rule)", padding: "40px 0" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 12, color: "var(--muted)", paddingTop: 4, lineHeight: "20px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  {study.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: "36px", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: "24px", color: "var(--muted)", maxWidth: 480 }}>
                  {study.subtitle}
                </p>
              </div>
              <span style={{ fontSize: 12, color: "var(--muted)", paddingTop: 4, whiteSpace: "nowrap", lineHeight: "20px" }}>
                {study.year}
              </span>
            </div>
          </Link>
        ))}

        {soon.map((study, i) => (
          <div key={study.slug} style={{ display: "grid", gridTemplateColumns: "40px 1fr auto", gap: 28, alignItems: "start", borderTop: "1px solid var(--rule)", padding: "40px 0", opacity: 0.3 }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 12, color: "var(--muted)", paddingTop: 4 }}>
              {String(live.length + i + 1).padStart(2, "0")}
            </span>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Coming Soon</p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: "36px", fontWeight: 700, color: "var(--ink)" }}>
                {study.title}
              </h3>
            </div>
            <span style={{ fontSize: 12, color: "var(--muted)", paddingTop: 4 }}>{study.year}</span>
          </div>
        ))}

        <div style={{ borderTop: "1px solid var(--rule)" }} />
      </section>

      {/* About */}
      <section id="about" style={{ background: "var(--paper)", borderTop: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: "44px", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
              About
            </h2>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)", marginBottom: 16 }}>
              Senior UX Designer with 10+ years on B2B products. Most recently at Expedia TAAP,
              designing tools used by thousands of travel agents worldwide.
            </p>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)" }}>
              I work best on hard problems — complex workflows, messy data, and edge cases
              that make engineers nervous.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: "44px", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
              Currently
            </h2>
            <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)" }}>
              Open to full-time UX and product design roles. Remote-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ borderTop: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 128px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 52, lineHeight: "60px", fontWeight: 700, color: "var(--ink)", maxWidth: 480, marginBottom: 32 }}>
            Let&apos;s work together.
          </h2>
          <p style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)", maxWidth: 400, marginBottom: 48 }}>
            I&apos;m actively looking for full-time roles. If you have something interesting,
            I&apos;d love to hear about it.
          </p>
          <a
            href="mailto:ajmarksberry@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "var(--white)", fontSize: 14, fontWeight: 500, padding: "12px 24px", borderRadius: 4, textDecoration: "none" }}
          >
            ajmarksberry@gmail.com ↗
          </a>
          <div style={{ marginTop: 28 }}>
            <a
              href="https://www.linkedin.com/in/ajmarksberry"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
