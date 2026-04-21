export const metadata = {
  title: "Itinerary Builder — AJ Marksberry",
  description: "Case study: Redesigning how travel agents build and share itineraries on Expedia TAAP.",
};

import Link from "next/link";

export default function ItineraryBuilderCaseStudy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm mb-12 transition-colors hover:opacity-80"
        style={{ color: "var(--teal)" }}
      >
        ← Back to work
      </Link>

      {/* Header */}
      <header className="mb-16">
        <div className="flex flex-wrap gap-2 mb-5">
          {["B2B", "TAAP", "Itinerary Management"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: "var(--teal-light)", color: "var(--teal)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold leading-tight mb-6" style={{ color: "var(--navy)" }}>
          Itinerary Builder
        </h1>
        <p className="text-xl leading-relaxed" style={{ color: "#4a6a7a" }}>
          Travel agents on Expedia TAAP needed a faster, more intuitive way to build
          and share lodging itineraries with clients. We ran a focused 2-day design
          workshop to align on a new direction — without blowing up the page layout
          or the engineering budget.
        </p>

        {/* Meta */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b text-sm" style={{ borderColor: "var(--teal-light)" }}>
          <div>
            <p className="mb-1" style={{ color: "var(--sand)" }}>Role</p>
            <p className="font-medium" style={{ color: "var(--navy)" }}>Senior UX Designer</p>
          </div>
          <div>
            <p className="mb-1" style={{ color: "var(--sand)" }}>Platform</p>
            <p className="font-medium" style={{ color: "var(--navy)" }}>EXPweb (B2B)</p>
          </div>
          <div>
            <p className="mb-1" style={{ color: "var(--sand)" }}>Methods</p>
            <p className="font-medium" style={{ color: "var(--navy)" }}>Design Workshop, Concept Voting</p>
          </div>
          <div>
            <p className="mb-1" style={{ color: "var(--sand)" }}>Year</p>
            <p className="font-medium" style={{ color: "var(--navy)" }}>2026</p>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div
        className="rounded-2xl h-72 flex items-center justify-center mb-20 border"
        style={{ background: "var(--teal-light)", borderColor: "#1a6b7a22" }}
      >
        <span className="text-sm font-medium" style={{ color: "var(--teal)" }}>
          TAAP — Itinerary Builder
        </span>
      </div>

      {/* Overview */}
      <Section title="Overview">
        <p>
          The Itinerary Builder is a tool inside EXPweb — Expedia's B2B portal for travel agents —
          that lets advisors create customized lodging itineraries and share them directly with clients.
          The existing experience had real friction: editing required navigating a sidesheet that
          demanded too many clicks, and the flow didn't match how advisors actually worked.
        </p>
        <p>
          Rather than a full redesign, the goal was targeted: refine the flow and key UI elements
          for editing and sharing itineraries, within the existing page structure. Saving itineraries
          was explicitly out of scope. Mobile support was required.
        </p>
      </Section>

      {/* The Problem */}
      <Section title="The Problem">
        <p>
          Advisors were losing time on a task that should be straightforward — customizing a
          lodging itinerary and getting it in front of a client. Three questions framed the work:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: "#4a6a7a" }}>
          <li>What would make the experience more intuitive?</li>
          <li>What would streamline the workflow and save time?</li>
          <li>How can we better align with how advisors actually work?</li>
        </ul>
        <p>
          The sidesheet editing pattern was a recurring pain point — too many clicks to get
          to the action, with no clear payoff at the end.
        </p>
      </Section>

      {/* Process */}
      <Section title="The Workshop">
        <p>
          Instead of designing in a vacuum, we ran a 2-day collaborative workshop with designers,
          researchers, and content strategists. The format was part peer review, part design sprint.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
          <div className="rounded-xl p-5 border" style={{ background: "var(--sand-light)", borderColor: "#c9a96e33" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--navy)" }}>Day 1</p>
            <ul className="text-sm space-y-1" style={{ color: "#4a6a7a" }}>
              <li>Reviewed the current Itinerary Builder</li>
              <li>Presented 3 new direction concepts</li>
              <li>Assigned homework: sticky note feedback</li>
            </ul>
          </div>
          <div className="rounded-xl p-5 border" style={{ background: "var(--teal-light)", borderColor: "#1a6b7a22" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--navy)" }}>Day 2</p>
            <ul className="text-sm space-y-1" style={{ color: "#4a6a7a" }}>
              <li>Reviewed homework responses</li>
              <li>Voted on concepts (1 vote per person)</li>
              <li>Group discussion + final direction decision</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 3 Concepts */}
      <Section title="Three Concepts">
        <p>
          Each concept explored a different interaction model for how advisors would
          enter the builder, customize, and share an itinerary.
        </p>

        <ConceptCard
          number="01"
          title="New Page from Trips List"
          description="Launching the Itinerary Builder from the Trips List into a dedicated full page. Clean separation, but required the advisor to leave their current context entirely."
          outcome="Concern: advisors lost sight of the trip list while editing."
        />

        <ConceptCard
          number="02"
          title="New Browser Tab"
          description="Opening the builder in a new tab, allowing advisors to keep the Trips List open and switch between tasks. Tested positive for multi-tasking — one sticky note specifically called this out as a win."
          outcome="Drawback: introduced navigation complexity and broke the single-page flow."
        />

        <ConceptCard
          number="03"
          title="Inline Editing with Modals"
          winner
          description="Editing happened in place on the same page, with modals handling focused actions. Less context-switching, fewer clicks to reach the edit state, and a cleaner share flow."
          outcome="This concept won the team vote and was selected as the direction to move forward with into tech review and peer review."
        />
      </Section>

      {/* Key Feedback */}
      <Section title="What the Team Said">
        <p>
          Sticky note feedback fell into four buckets: what's working, what's not, ideas, and questions.
          A few themes that shaped the final direction:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: "#4a6a7a" }}>
          <li><strong style={{ color: "var(--navy)" }}>What worked:</strong> Viewing in a new window let advisors work on other tasks in parallel.</li>
          <li><strong style={{ color: "var(--navy)" }}>What didn't:</strong> Editing in a sidesheet required too many clicks.</li>
          <li><strong style={{ color: "var(--navy)" }}>Open question:</strong> The call to action needed to be clearer — "What does this do?" came up more than once.</li>
        </ul>
      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <p>
          Exploration #3 — Inline Editing with Modals — was selected as the direction.
          Next steps were a tech review to validate feasibility, followed by presenting
          the refined concept in Peer Review.
        </p>
        <p>[Add final shipped state, metrics, or follow-on work here once available.]</p>
      </Section>

      {/* Reflections */}
      <Section title="What I Learned">
        <p>
          Running a workshop instead of presenting a single solution created real buy-in.
          When people vote on a direction, they own it — and that makes the handoff to
          engineering and the next review much smoother.
        </p>
        <p>
          The constraint of <em>not</em> redesigning the full page layout was actually useful.
          It forced the team to focus on the interaction model, not aesthetics, which is
          exactly where the friction lived.
        </p>
      </Section>

      {/* Footer nav */}
      <div className="mt-20 pt-8 border-t" style={{ borderColor: "var(--teal-light)" }}>
        <Link
          href="/"
          className="text-sm transition-colors hover:opacity-80"
          style={{ color: "var(--teal)" }}
        >
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--sand)" }}>
        {title}
      </h2>
      <div className="flex flex-col gap-4 leading-relaxed" style={{ color: "#4a6a7a" }}>
        {children}
      </div>
    </section>
  );
}

function ConceptCard({
  number,
  title,
  description,
  outcome,
  winner = false,
}: {
  number: string;
  title: string;
  description: string;
  outcome: string;
  winner?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{
        background: winner ? "var(--teal-light)" : "#f7f4ee",
        borderColor: winner ? "var(--teal)" : "#1a6b7a22",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold" style={{ color: "var(--sand)" }}>{number}</span>
        <h3 className="font-semibold" style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}>
          {title}
        </h3>
        {winner && (
          <span
            className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "var(--teal)", color: "#fff" }}
          >
            Selected
          </span>
        )}
      </div>
      <p className="text-sm mb-3">{description}</p>
      <p className="text-sm italic" style={{ color: winner ? "var(--teal)" : "#4a6a7a" }}>{outcome}</p>
    </div>
  );
}
