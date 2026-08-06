import AnchorNav from "@/components/case-study/AnchorNav";
import Byline from "@/components/case-study/Byline";
import ArticleMeta from "@/components/case-study/ArticleMeta";
import { PlaceholderFigure } from "@/components/case-study/Figure";
import Findings from "@/components/case-study/Findings";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";

export const metadata = {
  title: "TAAP Itinerary Builder — AJ Marksberry",
  description:
    "TAAP Itinerary Builder — UX case study by AJ Marksberry. A design sprint, Figma Make prototype, and moderated usability research with 6 travel agents.",
};

export default function ItineraryBuilderCaseStudy() {
  return (
    <>
      <AnchorNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "challenge", label: "Challenge" },
          { id: "solution", label: "Solution" },
          { id: "results", label: "Results" },
        ]}
      />

      <article className="article">
        <Byline meta="Senior Product Designer · Expedia Group · 2026 · 8 min read" />

        <section id="overview" aria-labelledby="article-title">
          <h1 className="article-title" id="article-title">TAAP Itinerary Builder</h1>
          <p className="article-deck">
            Giving travel agents the power to curate and share personalised trip itineraries with their clients — across desktop and mobile.
          </p>

          <ArticleMeta
            items={[
              ["Client", "Expedia TAAP"],
              ["Role", "Design Lead"],
              ["Platform", "Desktop & Mobile"],
              ["Year", "2026"],
              ["Tools", "Figma · Figma Make · Miro · Zoom"],
            ]}
          />

          <p className="body-secondary">
            TAAP agents had powerful booking tools but no way to curate or share what they&apos;d booked with their travelers —
            on desktop or mobile. I led end-to-end design of a new itinerary builder, from discovery through a 2-day design
            sprint, AI-assisted prototyping with Figma Make, and moderated research with 6 travel agents, to a fully
            accessible dev handoff across both platforms.
          </p>
        </section>

        <hr className="rule" />

        <section id="challenge" aria-labelledby="challenge-heading">
          <h2 className="section-h" id="challenge-heading">The challenge</h2>
          <p className="body-text">
            Travel agents using TAAP could book flights, hotels, and experiences — but once bookings were made, there was
            no unified view for the agent or the traveler. Agents were forced to manually compile trip details outside
            the platform, creating extra work and an inconsistent client experience on both desktop and mobile.
          </p>
          <p className="body-secondary">
            From a business perspective, this was also a retention and differentiation challenge. Giving agents a
            branded, professional tool to share with clients — accessible on desktop and mobile — would strengthen the
            agent-traveler relationship and reflect positively on the TAAP platform.
          </p>
          <PlaceholderFigure
            label="[ Original TAAP experience — upload screenshot ]"
            description="Placeholder for original TAAP experience — no itinerary sharing capability"
            caption="The original experience — no way to build or share a cohesive itinerary from within TAAP"
          />
        </section>

        <hr className="rule" />

        <section id="solution" aria-labelledby="solution-heading">
          <h2 className="section-h" id="solution-heading">The solution</h2>

          <div className="step">
            <p className="step-label">Step 01</p>
            <h3 className="step-title">Discovery &amp; competitive audit</h3>
            <p className="body-secondary">
              I began with a competitive audit — reviewing how other platforms handle itinerary sharing across
              desktop and mobile to identify patterns and inspiration before any design work began.
            </p>
          </div>

          <div className="step">
            <p className="step-label">Step 02</p>
            <h3 className="step-title">2-day design sprint — 3 concepts explored</h3>
            <p className="body-secondary">
              I facilitated a structured sprint with UX, Research, and Content. Day 1: reviewed the current TAAP
              experience and presented three distinct interaction concepts. Day 2: dot voting, group discussion, and
              key takeaways. Inline editing was selected as the preferred direction.
            </p>
          </div>

          <PlaceholderFigure
            label="[ Sprint explorations + final UI — upload when ready ]"
            description="Placeholder for design sprint explorations and final Itinerary Builder UI"
            caption="Design sprint explorations (left) and final Itinerary Builder UI — desktop editor, preview/share view, and mobile (right)"
          />

          <div className="pullquote">&ldquo;The inline editing feels most intuitive — like Squarespace, but built for travel agents.&rdquo;</div>

          <div className="step">
            <p className="step-label">Step 03</p>
            <h3 className="step-title">Wireframe explorations — desktop &amp; mobile</h3>
            <p className="body-secondary">
              Multiple rounds of wireframes across both platforms — full itinerary flow, modal states, show/hide
              mechanics, share and export flows, and edge cases.
            </p>
            <PlaceholderFigure
              label="[ Wireframe explorations — upload when ready ]"
              description="Placeholder for desktop and mobile wireframe explorations"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 04</p>
            <h3 className="step-title">Figma Make prototype — built for research</h3>
            <p className="body-secondary">
              I used Figma Make — Figma&apos;s AI-powered prototyping tool — to build a working, interactive
              prototype. This gave research participants a realistic experience rather than a standard click-through,
              surfacing richer and more nuanced feedback.
            </p>
            <PlaceholderFigure
              label="[ Figma Make prototype — upload when ready ]"
              description="Placeholder for Figma Make prototype screenshot"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 05</p>
            <h3 className="step-title">Moderated usability study — 6 travel agents</h3>
            <p className="body-secondary">
              I conducted 8-task think-aloud sessions over Zoom with 6 TAAP travel agents. Findings directly shaped
              the final design before dev handoff.
            </p>
            <PlaceholderFigure
              label="[ Research findings — upload when ready ]"
              description="Placeholder for research findings summary"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 06</p>
            <h3 className="step-title">Final designs — desktop &amp; mobile</h3>
            <p className="body-secondary">
              Production-ready UI with full accessibility annotations, conditional logic, and edge case coverage
              delivered at dev handoff — including focus order, ARIA labels, colour contrast ratios, and keyboard
              navigation patterns.
            </p>
          </div>
        </section>

        <hr className="rule" />

        <section id="results" aria-labelledby="results-heading">
          <h2 className="section-h" id="results-heading">Results</h2>
          <p className="body-secondary">
            The moderated research study validated the core interaction model. Agents consistently discovered and
            successfully completed the primary share flow without assistance, and the layout was received positively
            as clean and professional.
          </p>
          <Findings
            label="Research findings and outcomes"
            items={[
              { text: "Preview and Share with Traveler consistently discovered and used correctly by all 6 participants" },
              { text: "Layout rated clean and professional across the board" },
              { text: "Show/hide section controls rated highly valuable for customisation" },
              { text: "Fully accessible dev handoff delivered with WCAG 2.2 AA annotations" },
              { text: "Agent adoption and share-rate metrics — to follow post-launch", pending: true },
            ]}
          />
        </section>

        <NextCaseStudy href="/work/post-booking-ux" title="TAAP Trips — Post-Booking Experience" />
      </article>
    </>
  );
}
