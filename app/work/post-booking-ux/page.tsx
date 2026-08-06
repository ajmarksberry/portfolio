import AnchorNav from "@/components/case-study/AnchorNav";
import Byline from "@/components/case-study/Byline";
import ArticleMeta from "@/components/case-study/ArticleMeta";
import { PlaceholderFigure } from "@/components/case-study/Figure";
import Findings from "@/components/case-study/Findings";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";

export const metadata = {
  title: "TAAP Trips — Post-Booking Experience — AJ Marksberry",
  description:
    "Three design generations of Expedia TAAP's post-booking trip management tool, each shipped to production and replaced by the next.",
};

export default function PostBookingCaseStudy() {
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
        <Byline meta="Senior UX Designer · Expedia TAAP · 2023–2026" />

        <section id="overview" aria-labelledby="article-title">
          <h1 className="article-title" id="article-title">TAAP Trips — Post-Booking Experience</h1>
          <p className="article-deck">
            Three design generations, each shipped to production and replaced by the next — turning a consumer-borrowed
            flat list into a professional tool travel agents rely on every day.
          </p>

          <ArticleMeta
            items={[
              ["Client", "Expedia TAAP"],
              ["Role", "Design Lead, all 3 gens"],
              ["Platform", "Desktop & Mobile"],
              ["Team", "AJ Marksberry, Tereza Birch"],
              ["Year", "2023–2026"],
            ]}
          />

          <p className="body-secondary">
            TAAP (Travel Agent Affiliate Program) is Expedia&apos;s B2B platform for professional travel agents. After
            booking a trip on behalf of a client, agents needed a reliable way to view itinerary details, track payment
            status, contact properties, and make modifications — all without leaving the platform. Over three years and
            three shipped generations, I owned the full design of this experience — from an inherited consumer-style
            list to a purpose-built tool for how agents actually work, with Sarah Hameed collaborating on later
            generations.
          </p>
        </section>

        <hr className="rule" />

        <section id="challenge" aria-labelledby="challenge-heading">
          <h2 className="section-h" id="challenge-heading">The challenge</h2>
          <p className="body-text">
            The original &ldquo;My Trips&rdquo; view was borrowed almost directly from Expedia&apos;s consumer app: a
            flat list split into just two tabs (Upcoming/Past and Canceled), with no search, no traveler name shown, no
            line-of-business icons, and an Expedia app banner that had no place in a professional B2B tool.
          </p>
          <PlaceholderFigure
            label="[ Original “My Trips” experience — upload screenshot ]"
            description="Placeholder for the original My Trips consumer-borrowed screenshot"
            caption="The original “My Trips” view — inherited from the consumer app, not built for agents"
          />
          <p className="body-secondary">
            That gap showed up directly in agent workflows: no way to jump to an itinerary from a confirmation number,
            no cancel button, no visible refund status, and sharing a trip required leaving the page entirely — with no
            visibility into earnings along the way.
          </p>
        </section>

        <hr className="rule" />

        <section id="solution" aria-labelledby="solution-heading">
          <h2 className="section-h" id="solution-heading">The solution</h2>

          <div className="step">
            <p className="step-label">Step 01</p>
            <h3 className="step-title">Requirements workshop &amp; design sprint</h3>
            <p className="body-secondary">
              I ran a workshop to gather structured requirements — covering Receipt, Export, Edit, Share, and Email
              needs, each prioritised P0/P1 — followed by a 2-day design sprint exploring three interaction concepts
              for surfacing these actions: an overlay, a new tab, and inline modals. Inline editing won the team vote,
              consistent with the direction we landed on for the Itinerary Builder.
            </p>
          </div>

          <div className="step">
            <p className="step-label">Step 02</p>
            <h3 className="step-title">
              <span className="gen-badge g1">Gen 1 · 2023</span>
              Trips table
            </h3>
            <p className="gen-status">Shipped to production</p>
            <p className="body-secondary">
              Renamed from &ldquo;My Trips&rdquo; to &ldquo;Trips&rdquo; and rebuilt as a sortable table: four status
              tabs, line-of-business icons, pagination, and universal search — giving agents a real, professional tool
              for the first time.
            </p>
            <div className="gen-strip">
              <p className="gen-strip-label">What changed</p>
              <ul>
                <li>Renamed &ldquo;My Trips&rdquo; → &ldquo;Trips&rdquo;</li>
                <li>Four status tabs instead of two</li>
                <li>Sortable table with line-of-business icons</li>
                <li>Pagination and universal search added</li>
              </ul>
            </div>
            <PlaceholderFigure
              label="[ Gen 1 — Trips table — upload screenshot ]"
              description="Placeholder for Gen 1 Trips table screenshot"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 03</p>
            <h3 className="step-title">
              <span className="gen-badge g2">Gen 2 · 2024–2025</span>
              Three-column panel view
            </h3>
            <p className="gen-status">Replaced Gen 1 in production</p>
            <p className="body-secondary">
              Driven by research and a product pivot, Gen 2 moved to a 3-column, Outlook-style panel layout. Before
              designing, I mapped the friction in Gen 1 so the new structure would actually close the gaps agents were
              hitting daily.
            </p>
            <div className="gen-strip">
              <p className="gen-strip-label">Friction identified</p>
              <ul>
                <li>No link from an itinerary number to its trip</li>
                <li>No cancel button</li>
                <li>No visible refund status</li>
                <li>Sharing required leaving the page</li>
                <li>No earnings visibility</li>
              </ul>
            </div>
            <PlaceholderFigure
              label="[ Gen 2 — Three-column panel view — upload screenshot ]"
              description="Placeholder for Gen 2 three-column panel view screenshot"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 04</p>
            <h3 className="step-title">
              <span className="gen-badge g3">Gen 3 · 2026</span>
              Post-launch enhancements
            </h3>
            <p className="gen-status">In progress</p>
            <p className="body-secondary">
              20+ changes spanning bug fixes, new features, design updates, and content — driven by ongoing agent
              feedback since Gen 2&apos;s launch. One notable change: removing the map from the itinerary view, a
              decision validated across two separate research studies — a cross-project insight that also shaped the
              Itinerary Builder work.
            </p>
          </div>
        </section>

        <hr className="rule" />

        <section id="results" aria-labelledby="results-heading">
          <h2 className="section-h" id="results-heading">Results</h2>
          <p className="body-secondary">
            Gen 1 and Gen 2 both shipped to production and were used daily by travel agents; Gen 3 is in progress with
            agent feedback actively shaping the roadmap.
          </p>
          <Findings
            label="Outcomes across all three generations"
            items={[
              { text: "Gen 1 shipped — replaced the consumer-borrowed list with a searchable, sortable table" },
              { text: "Gen 2 shipped — replaced Gen 1 with a friction-mapped, 3-column panel view" },
              { text: "Map removed from the itinerary view, validated across 2 separate research studies" },
              { text: "Gen 2 / Gen 3 adoption and satisfaction metrics — to follow post-launch", pending: true },
            ]}
          />
        </section>

        <NextCaseStudy href="/work/reach" title="Reach — AI Booking Platform" />
      </article>
    </>
  );
}
