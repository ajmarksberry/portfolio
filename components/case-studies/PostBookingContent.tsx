export default function PostBookingContent() {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 112px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {["B2B", "TAAP", "Itinerary Management"].map((tag) => (
          <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", background: "var(--paper)", padding: "4px 10px", borderRadius: 4 }}>
            {tag}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)" }}>2026</span>
      </div>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.1", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
        Enhancements to the post-booking experience
      </h1>

      <p style={{ fontSize: 18, lineHeight: "32px", color: "var(--muted)", marginBottom: 64 }}>
        Redesigning how travel agents manage client itineraries — from trip list to cancellation — on Expedia TAAP.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 40px", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "28px 0", marginBottom: 64 }}>
        {[
          ["Role", "Senior UX Designer"],
          ["Team", "AJ Marksberry, Tereza Birch"],
          ["Collaborators", "Sarah Hameed"],
          ["Year", "2026"],
        ].map(([label, value]) => (
          <div key={label} style={{ padding: "8px 0" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, color: "var(--ink)" }}>{value}</p>
          </div>
        ))}
      </div>

      <Section title="Overview">
        <p>TAAP (Travel Agent Affiliate Program) is Expedia's B2B platform for professional travel agents. After booking a trip on behalf of a client, agents needed a reliable way to view itinerary details, track payment status, contact properties, and make modifications — all without leaving the platform.</p>
        <p>The existing experience was fragmented: key information was buried, action buttons were inconsistently placed, and modification flows required agents to navigate to multiple separate pages.</p>
      </Section>

      <Section title="The Problem">
        <p>[Add your research findings and problem statement here — what data, agent feedback, or support ticket themes pointed to this area as a priority?]</p>
        <ul>
          <li>[Key pain point 1]</li>
          <li>[Key pain point 2]</li>
          <li>[Key pain point 3]</li>
        </ul>
      </Section>

      <Section title="Process">
        <p>[Describe your design process — discovery, research methods, iterations, constraints, stakeholder alignment.]</p>
      </Section>

      <Section title="Outcome">
        <p>[Add measurable outcomes — task completion rate improvement, support ticket reduction, agent satisfaction scores, adoption metrics.]</p>
      </Section>

      <Section title="What I Learned">
        <p>[Reflect on the project — what surprised you, what tradeoffs did you navigate, what would you do differently?]</p>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>{title}</p>
      <div style={{ fontSize: 16, lineHeight: "28px", color: "var(--muted)", display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </section>
  );
}
