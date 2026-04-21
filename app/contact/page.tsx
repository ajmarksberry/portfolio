export const metadata = {
  title: "Contact — AJ Marksberry",
  description: "Get in touch with AJ Marksberry.",
};

import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-28 pb-32">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm mb-12 transition-opacity hover:opacity-70"
        style={{ color: "var(--teal)" }}
      >
        ← Back
      </Link>

      <p
        className="text-xs font-semibold uppercase tracking-[0.25em] mb-8"
        style={{ color: "var(--sand)", lineHeight: "20px" }}
      >
        Contact
      </p>

      <h1
        className="font-bold mb-8"
        style={{ color: "var(--navy)", fontSize: "64px", lineHeight: "72px" }}
      >
        Let&apos;s talk.
      </h1>

      <p
        className="mb-16 max-w-md"
        style={{ color: "#4a6a7a", fontSize: "18px", lineHeight: "28px" }}
      >
        I&apos;m actively looking for full-time UX and product design roles.
        If you&apos;ve got something interesting, I&apos;d love to hear about it.
        If you just want to talk about fishing, that&apos;s fine too.
      </p>

      {/* Email */}
      <div
        className="border-t pt-10 mb-10"
        style={{ borderColor: "#1a6b7a33" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--sand)", lineHeight: "20px" }}
        >
          Email
        </p>
        <a
          href="mailto:ajmarksberry@gmail.com"
          className="font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--navy)", fontSize: "24px", lineHeight: "32px" }}
        >
          ajmarksberry@gmail.com ↗
        </a>
      </div>

      {/* LinkedIn */}
      <div
        className="border-t pt-10 mb-10"
        style={{ borderColor: "#1a6b7a33" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--sand)", lineHeight: "20px" }}
        >
          LinkedIn
        </p>
        <a
          href="https://www.linkedin.com/in/ajmarksberry"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--navy)", fontSize: "24px", lineHeight: "32px" }}
        >
          linkedin.com/in/ajmarksberry ↗
        </a>
      </div>

      {/* Resume */}
      <div
        className="border-t pt-10"
        style={{ borderColor: "#1a6b7a33" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--sand)", lineHeight: "20px" }}
        >
          Resume
        </p>
        <p style={{ color: "#4a6a7a", lineHeight: "28px" }}>
          Available on request — just send an email.
        </p>
      </div>
    </section>
  );
}
