import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <p className="hero-eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span className="eyebrow-text">Senior Product Designer</span>
        </p>
        <h1 className="hero-h1" id="hero-heading">
          Designing <span className="accent">with</span> intent.
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Product design, visual systems, and research-driven thinking — from{" "}
            <strong>enterprise B2B platforms</strong> to <strong>consumer AI experiences</strong>.
            Every project here shipped to real users.
          </p>
          <dl className="hero-stats">
            <div>
              <dt className="hero-stat-label">Years experience</dt>
              <dd className="hero-stat-num">26+</dd>
            </div>
            <div>
              <dt className="hero-stat-label">Platforms built</dt>
              <dd className="hero-stat-num">End to end</dd>
            </div>
            <div>
              <dt className="hero-stat-label">Research studies</dt>
              <dd className="hero-stat-num">6</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="full-rule" role="separator" aria-hidden="true"></div>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="work-header">
          <h2 className="work-label" id="work-heading">Selected Work</h2>
          <span className="work-sub">{caseStudies.length} case studies</span>
        </div>
        <ul className="cards-grid">
          {caseStudies.map((study) => (
            <li className="card" key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="card-link"
                aria-describedby={`${study.slug}-desc`}
              >
                <span className="card-num" aria-hidden="true">{study.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
                <p className="card-co">{study.company}</p>
                <h3 className="card-title">{study.title}</h3>
                <p className="card-desc" id={`${study.slug}-desc`}>{study.description}</p>
                <span className="card-tags">
                  {study.tags.map((tag) => (
                    <span key={tag.label} className={`tag${tag.highlight ? " highlight" : ""}`}>
                      {tag.label}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-strip" id="about" aria-labelledby="about-heading">
        <div>
          <h2 className="about-strip-label" id="about-heading">About</h2>
          <p className="about-strip-h2">Design that&apos;s <span className="accent">grounded</span> in how people work.</p>
        </div>
        <div>
          <p className="about-strip-body">
            I&apos;m a Senior Product Designer with deep experience in <strong>enterprise product design,
            consumer-facing applications, and end-to-end platform design</strong>. I&apos;ve led design
            across B2B and B2C products — from discovery and research through design sprints,
            wireframing, visual design, accessibility, and dev handoff.
          </p>
          <p className="about-strip-body">
            I&apos;m also the Design Lead on everything I touch — responsible for the full design
            language, atomic component systems, and every screen from first wireframe to
            production-ready UI.
          </p>
        </div>
      </section>
    </>
  );
}
