"use client";

import { caseStudies } from "@/lib/case-studies";
import { useStudy } from "@/lib/study-context";

export default function Home() {
  const { openStudy } = useStudy();
  const live = caseStudies.filter((s) => s.status === "published");
  const protected_ = caseStudies.filter((s) => s.status === "protected");
  const soon = caseStudies.filter((s) => s.status === "coming-soon");
  const clickable = [...live, ...protected_];

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
        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: "1.7", color: "var(--muted)", maxWidth: 520 }}>
          Senior UX Designer currently embedded on the Expedia TAAP platform —
          tools used by thousands of travel agents worldwide.
          Complex systems, real humans, tight deadlines.
        </p>
      </section>

      {/* Work — giant text nav */}
      <section id="work" style={{ borderTop: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--faint)", padding: "32px 0 0" }}>
            Selected Work
          </p>
        </div>

        {clickable.map((study, i) => (
          <button
            key={study.slug}
            onClick={() => openStudy(study.slug)}
            className="giant-work-item"
            aria-label={`Open case study: ${study.title}`}
          >
            <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="giant-work-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="giant-work-title">{study.title}</span>
                <div className="giant-work-meta">
                  {study.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="giant-work-year">{study.year} ↗</span>
            </div>
          </button>
        ))}

        {soon.map((study) => (
          <div key={study.slug} className="giant-work-item giant-work-soon">
            <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span className="giant-work-title">{study.title}</span>
                <div className="giant-work-meta"><span>Coming Soon</span></div>
              </div>
              <span className="giant-work-year">{study.year}</span>
            </div>
          </div>
        ))}
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: "2px solid var(--rule)", marginTop: 0 }}>
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
