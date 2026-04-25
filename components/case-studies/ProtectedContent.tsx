import PasswordGate from "@/components/PasswordGate";

function CaseStudyContent() {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 112px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {["B2B", "TAAP", "Confidential"].map((tag) => (
          <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", background: "#f5f5f5", padding: "4px 10px", borderRadius: 4 }}>
            {tag}
          </span>
        ))}
      </div>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 5vw, 48px)", lineHeight: "1.15", fontWeight: 700, color: "var(--ink)", marginBottom: 20 }}>
        [Protected Case Study Title]
      </h1>
      <p style={{ fontSize: 17, lineHeight: "1.7", color: "var(--muted)", marginBottom: 64 }}>
        [Add your protected case study content here.]
      </p>
      <section style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 16 }}>Overview</p>
        <p style={{ fontSize: 16, lineHeight: "1.7", color: "var(--muted)" }}>
          [Protected case study content — only visible after password entry.]
        </p>
      </section>
    </article>
  );
}

export default function ProtectedContent() {
  return (
    <PasswordGate>
      <CaseStudyContent />
    </PasswordGate>
  );
}
