"use client";

import { caseStudies } from "@/lib/case-studies";
import { useStudy } from "@/lib/study-context";

export default function Home() {
  const { openStudy } = useStudy();
  const live = caseStudies.filter((s) => s.status === "published");
  const protected_ = caseStudies.filter((s) => s.status === "protected");
  const soon = caseStudies.filter((s) => s.status === "coming-soon");

  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(64px, 12vw, 112px) 24px clamp(48px, 8vw, 80px)" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 20 }}>
          UX Design Contractor · Expedia TAAP
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
          25+ years designing complex B2B products.
        </h1>
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: "1.7", color: "var(--muted)", maxWidth: 520, marginBottom: 0 }}>
          Senior UX Designer currently embedded on the Expedia TAAP platform —
          tools used by thousands of travel agents worldwide.
          Complex systems, real humans, tight deadlines.
        </p>
      </section>

      {/* Work */}
      <section id="work" style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 40 }}>
          Selected Work
        </p>

        {[...live, ...protected_].map((study, i) => (
          <button
            key={study.slug}
            onClick={() => openStudy(study.slug)}
            style={{ display: "block", width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}
            aria-label={`Open case study: ${study.title}`}
          >
            <div className="work-row">
              <span style={{ fontSize: 11, fontStyle: "italic", color: "var(--rule)", paddingTop: 4, lineHeight: "20px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  {study.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--faint)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(18px, 3vw, 22px)", lineHeight: "1.3", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: "1.6", color: "var(--muted)", maxWidth: 480 }}>
                  {study.subtitle}
                </p>
              </div>
              <span className="work-row-year" style={{ fontSize: 11, color: "var(--rule)", paddingTop: 4, whiteSpace: "nowrap", lineHeight: "20px" }}>
                {study.year}
              </span>
            </div>
          </button>
        ))}

        {soon.map((study, i) => (
          <div key={study.slug} className="work-row" style={{ opacity: 0.35, cursor: "default" }}>
            <span style={{ fontSize: 11, fontStyle: "italic", color: "var(--rule)", paddingTop: 4 }}>
              {String(live.length + protected_.length + i + 1).padStart(2, "0")}
            </span>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 10 }}>Coming Soon</p>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(18px, 3vw, 22px)", lineHeight: "1.3", fontWeight: 700, color: "var(--ink)" }}>
                {study.title}
              </h3>
            </div>
            <span className="work-row-year" style={{ fontSize: 11, color: "var(--rule)", paddingTop: 4 }}>{study.year}</span>
          </div>
        ))}

        <div style={{ borderTop: "1px solid var(--rule)" }} />
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: "2px solid var(--rule)" }}>
        <div className="about-grid" style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, lineHeight: "1.2", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
              About
            </h2>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "var(--muted)", marginBottom: 16 }}>
              25+ years designing B2B products — currently a UX Design Contractor
              at Expedia TAAP, building tools used by travel agents worldwide.
            </p>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "var(--muted)" }}>
              I work best on hard problems: complex workflows, messy data, and
              edge cases that make engineers nervous.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, lineHeight: "1.2", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
              Currently
            </h2>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "var(--muted)" }}>
              Open to full-time UX and product design roles. Remote-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ borderTop: "2px solid var(--rule)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 96px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: "1.15", fontWeight: 700, color: "var(--ink)", marginBottom: 16 }}>
            Let&apos;s work together.
          </h2>
          <p style={{ fontSize: 15, lineHeight: "1.7", color: "var(--muted)", maxWidth: 380, margin: "0 auto 40px" }}>
            Actively looking for full-time roles. If you have something interesting, I&apos;d love to hear about it.
          </p>
          <a
            href="mailto:ajmarksberry@gmail.com"
            style={{
              display: "inline-block",
              background: "var(--ink)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "12px 28px",
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            AJMARKSBERRY@GMAIL.COM ↗
          </a>
          <div style={{ marginTop: 20 }}>
            <a
              href="https://www.linkedin.com/in/ajmarksberry"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
