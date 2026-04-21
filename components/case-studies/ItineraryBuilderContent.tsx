export default function ItineraryBuilderContent() {
  return (
    <article style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 112px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {["B2B", "TAAP", "Workshop"].map((tag) => (
          <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", background: "var(--paper)", padding: "4px 10px", borderRadius: 4 }}>
            {tag}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)" }}>2026</span>
      </div>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 5vw, 52px)", lineHeight: "1.1", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>
        Itinerary Builder
      </h1>

      <p style={{ fontSize: 18, lineHeight: "32px", color: "var(--muted)", marginBottom: 64 }}>
        Running a 2-day design workshop to align a cross-functional team on a new direction for how travel agents build and share itineraries.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 40px", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "28px 0", marginBottom: 64 }}>
        {[
          ["Role", "Senior UX Designer"],
          ["Platform", "EXPweb (B2B)"],
          ["Methods", "Design Workshop, Concept Voting"],
          ["Year", "2026"],
        ].map(([label, value]) => (
          <div key={label} style={{ padding: "8px 0" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>{label}</p>
            <p style={{ fontSize: 14, color: "var(--ink)" }}>{value}</p>
          </div>
        ))}
      </div>

      <Section title="Overview">
        <p>The Itinerary Builder is a tool inside EXPweb — Expedia's B2B portal for travel agents — that lets advisors create customized lodging itineraries and share them directly with clients. The existing experience had real friction: editing required navigating a sidesheet that demanded too many clicks.</p>
        <p>Rather than a full redesign, the goal was targeted: refine the flow and key UI elements for editing and sharing itineraries, within the existing page structure.</p>
      </Section>

      <Section title="The Workshop">
        <p>Instead of designing in a vacuum, we ran a 2-day collaborative workshop with designers, researchers, and content strategists. Day 1: reviewed the current builder, presented 3 new concepts, assigned sticky note homework. Day 2: voted on concepts, group discussion, picked a direction.</p>
      </Section>

      <Section title="Three Concepts">
        {[
          { n: "01", title: "New Page from Trips List", body: "Launching the builder into a dedicated full page. Clean separation, but advisors lost sight of the trip list while editing.", winner: false },
          { n: "02", title: "New Browser Tab", body: "Opening the builder in a new tab. Tested positive for multi-tasking but introduced navigation complexity.", winner: false },
          { n: "03", title: "Inline Editing with Modals", body: "Editing in place with modals for focused actions. Fewer clicks, less context-switching, cleaner share flow. Won the team vote.", winner: true },
        ].map(({ n, title, body, winner }) => (
          <div key={n} style={{ padding: "20px", borderRadius: 6, border: `1px solid ${winner ? "var(--accent)" : "var(--rule)"}`, background: winner ? "#fff8f5" : "var(--paper)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600 }}>{n}</span>
              <strong style={{ fontSize: 15, color: "var(--ink)", fontFamily: "var(--font-serif)" }}>{title}</strong>
              {winner && <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>Selected</span>}
            </div>
            <p style={{ fontSize: 14, lineHeight: "22px", margin: 0 }}>{body}</p>
          </div>
        ))}
      </Section>

      <Section title="Outcome">
        <p>Exploration #3 — Inline Editing with Modals — was selected. Next steps: tech review, then presenting the refined concept in Peer Review.</p>
        <p>[Add final shipped state or metrics here once available.]</p>
      </Section>

      <Section title="What I Learned">
        <p>Running a workshop instead of presenting a single solution created real buy-in. The constraint of not redesigning the full page layout forced focus on the interaction model — exactly where the friction lived.</p>
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
