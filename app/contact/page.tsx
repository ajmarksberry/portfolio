export const metadata = {
  title: "Contact — AJ Marksberry",
  description: "Get in touch with AJ Marksberry.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-heading">
        <p className="hero-eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span className="eyebrow-text">Contact</span>
        </p>
        <h1 className="page-h1" id="page-heading">Let&apos;s talk.</h1>
        <p className="page-sub">
          I&apos;m actively looking for full-time UX and product design roles. If you&apos;ve got something
          interesting, I&apos;d love to hear about it.
        </p>
      </section>

      <div className="full-rule" role="separator" aria-hidden="true"></div>

      <section className="r-section" aria-labelledby="email-heading">
        <h2 className="r-label" id="email-heading">Email</h2>
        <p className="summary-text">
          <a href="mailto:ajmarksberry@gmail.com" style={{ color: "var(--ink)", fontWeight: 600 }}>
            ajmarksberry@gmail.com ↗
          </a>
        </p>
      </section>

      <section className="r-section" aria-labelledby="linkedin-heading">
        <h2 className="r-label" id="linkedin-heading">LinkedIn</h2>
        <p className="summary-text">
          <a
            href="https://www.linkedin.com/in/ajmarksberry"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--ink)", fontWeight: 600 }}
          >
            linkedin.com/in/ajmarksberry ↗
          </a>
        </p>
      </section>

      <section className="r-section" aria-labelledby="resume-heading">
        <h2 className="r-label" id="resume-heading">Resume</h2>
        <p className="summary-text">
          <a href="/resume" style={{ color: "var(--ink)", fontWeight: 600 }}>
            View resume ↗
          </a>
        </p>
      </section>
    </>
  );
}
