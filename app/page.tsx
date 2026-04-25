"use client";

import { caseStudies } from "@/lib/case-studies";
import { useStudy } from "@/lib/study-context";
import HeaderGraphic from "@/components/HeaderGraphic";

export default function Home() {
  const { openStudy } = useStudy();
  const live = caseStudies.filter((s) => s.status === "published");
  const soon = caseStudies.filter((s) => s.status === "coming-soon");

  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "clamp(48px, 10vw, 96px) 24px 0", textAlign: "center" }}>
        <HeaderGraphic />

        <p style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginTop: 32,
          marginBottom: 16,
          fontFamily: "'Inter', sans-serif",
        }}>
          Senior UX Designer · Expedia TAAP
        </p>

        <p style={{
          fontSize: "clamp(15px, 2vw, 17px)",
          lineHeight: "28px",
          color: "var(--muted)",
          maxWidth: 460,
          margin: "0 auto 48px",
        }}>
          10+ years designing B2B tools for travel agents. Complex systems,
          real humans, tight deadlines.
        </p>

        {/* Ornamental divider */}
        <div className="ornament-rule" style={{ maxWidth: 400, margin: "0 auto" }}>
          ✦ ✦ ✦
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--crimson)",
          marginBottom: 40,
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}>
          Selected Work
        </p>

        {live.map((study, i) => (
          <button
            key={study.slug}
            onClick={() => openStudy(study.slug)}
            style={{ display: "block", width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}
          >
            <div className="work-row" style={{ alignItems: "start", borderTop: "1px solid var(--rule)", padding: "32px 0" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 13, color: "var(--rule)", paddingTop: 4, lineHeight: "20px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  {study.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest)", fontFamily: "'Inter', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px, 3vw, 24px)", lineHeight: "32px", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: "24px", color: "var(--muted)", maxWidth: 480 }}>
                  {study.subtitle}
                </p>
              </div>
              <span className="work-row-year" style={{ fontSize: 11, color: "var(--rule)", paddingTop: 4, whiteSpace: "nowrap", lineHeight: "20px", fontFamily: "'Inter', sans-serif" }}>
                {study.year}
              </span>
            </div>
          </button>
        ))}

        {soon.map((study, i) => (
          <div key={study.slug} className="work-row" style={{ alignItems: "start", borderTop: "1px solid var(--rule)", padding: "32px 0", opacity: 0.35 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 13, color: "var(--rule)", paddingTop: 4 }}>
              {String(live.length + i + 1).padStart(2, "0")}
            </span>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10, fontFamily: "'Inter', sans-serif" }}>Coming Soon</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(19px, 3vw, 24px)", lineHeight: "32px", fontWeight: 700, color: "var(--ink)" }}>
                {study.title}
              </h3>
            </div>
            <span className="work-row-year" style={{ fontSize: 11, color: "var(--rule)", paddingTop: 4 }}>{study.year}</span>
          </div>
        ))}

        <div style={{ borderTop: "1px solid var(--rule)" }} />
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: "2px solid var(--rule)", background: "var(--parchment2)" }}>
        <div className="about-grid" style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, lineHeight: "40px", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
              About
            </h2>
            <p style={{ fontSize: 15, lineHeight: "28px", color: "var(--muted)", marginBottom: 16 }}>
              Senior UX Designer with 10+ years on B2B products. Most recently at Expedia TAAP,
              designing tools used by thousands of travel agents worldwide.
            </p>
            <p style={{ fontSize: 15, lineHeight: "28px", color: "var(--muted)" }}>
              I work best on hard problems — complex workflows, messy data, and edge cases
              that make engineers nervous.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, lineHeight: "40px", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
              Currently
            </h2>
            <p style={{ fontSize: 15, lineHeight: "28px", color: "var(--muted)" }}>
              Open to full-time UX and product design roles. Remote-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ borderTop: "2px solid var(--rule)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 96px", textAlign: "center" }}>
          <div className="ornament-rule" style={{ maxWidth: 320, margin: "0 auto 40px" }}>
            ✦
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: "1.15", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
            Let&apos;s work together.
          </h2>
          <p style={{ fontSize: 15, lineHeight: "28px", color: "var(--muted)", maxWidth: 380, margin: "0 auto 40px" }}>
            Actively looking for full-time roles. If you have something interesting, I&apos;d love to hear about it.
          </p>
          <a
            href="mailto:ajmarksberry@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--crimson)",
              color: "#faf6ed",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "12px 28px",
              border: "none",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            AJMARKSBERRY@GMAIL.COM ↗
          </a>
          <div style={{ marginTop: 24 }}>
            <a
              href="https://www.linkedin.com/in/ajmarksberry"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
