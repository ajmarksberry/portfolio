import AnchorNav from "@/components/case-study/AnchorNav";
import Byline from "@/components/case-study/Byline";
import ArticleMeta from "@/components/case-study/ArticleMeta";
import Figure, { PlaceholderFigure } from "@/components/case-study/Figure";
import Findings from "@/components/case-study/Findings";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";

export const metadata = {
  title: "Reach — AI Booking Platform — AJ Marksberry",
  description:
    "Case study: Design Lead on the full Reach AI booking platform, end to end — a two-sided experience for clients and business owners.",
};

export default function ReachCaseStudy() {
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
        <Byline meta="Senior Product Designer · Reach.ai (Contract) · 2019–2021" />

        <section id="overview" aria-labelledby="article-title">
          <h1 className="article-title" id="article-title">Reach — AI Booking Platform</h1>
          <p className="article-deck">
            A personalised AI-powered booking experience for clients, and a business analytics dashboard for the
            providers who serve them — designed end to end, from first wireframe to a live product.
          </p>

          <ArticleMeta
            items={[
              ["Client", "Reach.ai (Contract)"],
              ["Role", "Design Lead, sole designer"],
              ["Platform", "Web & Mobile"],
              ["Year", "2019–2021"],
              ["Tools", "Figma"],
            ]}
          />

          <p className="body-secondary">
            Reach is a SaaS appointment booking and customer engagement platform. I was the sole designer on the full
            Reach platform — end to end, from the first wireframe to a live product used by real businesses — building
            a two-sided experience for both the clients booking appointments and the business owners running them.
          </p>

          <Figure
            breakout
            src="/case-studies/reach/reach-dashboard-imac.png"
            alt="The Reach Results Dashboard shown on an iMac: a left sidebar with Results, My Business, My Providers and My Services; the client's salon branding and a booking-portal link; headline figures for hours of vacant bookings filled and total revenue; a three-part revenue breakdown; and side-by-side email and SMS campaign result panels."
            width={949}
            height={788}
            caption="The business-side Results Dashboard — where owners see the revenue Reach recovered for them"
          />
        </section>

        <hr className="rule" />

        <section id="challenge" aria-labelledby="challenge-heading">
          <h2 className="section-h" id="challenge-heading">The challenge</h2>
          <p className="body-text">
            Reach&apos;s clients needed a booking flow that felt personal rather than transactional — recognising
            returning customers, surfacing relevant offers, and handling edge cases like an expired offer or a
            provider who&apos;d left the business, without confusing the client. On the business side, owners needed
            visibility into how well Reach was actually driving revenue: bookings, upsells, and where the funnel was
            leaking.
          </p>
          <p className="body-secondary">
            There was no existing design system to build from — every component, colour, and breakpoint had to be
            defined from scratch.
          </p>
          <PlaceholderFigure
            label="[ Early wireframe-era screens — upload when ready ]"
            description="Placeholder for early Reach wireframe-era screens"
          />
        </section>

        <hr className="rule" />

        <section id="solution" aria-labelledby="solution-heading">
          <h2 className="section-h" id="solution-heading">The solution</h2>

          <div className="step">
            <p className="step-label">Step 01</p>
            <h3 className="step-title">Atomic design system, from scratch</h3>
            <p className="body-secondary">
              I built Reach&apos;s entire design system from first principles: a 3-level type scale, a colour system
              with clear semantic meaning (blue for interactive elements, amber for discounts, green for success and
              additive actions, pink/red reserved for urgency only), and responsive breakpoints at
              1200 / 1024 / 768 / 375px.
            </p>
          </div>

          <div className="step">
            <p className="step-label">Step 02</p>
            <h3 className="step-title">Personalised booking flow</h3>
            <p className="body-secondary">
              The core consumer flow — Find, Review, Confirm — adapted to 6+ distinct entry states depending on who
              was booking: a returning client with an active offer, an expired offer, a redeemed offer, a client whose
              provider had left, someone booking for the first time, and a returning client with no offer. Clients
              could also book by service or by a specific provider, and join a waitlist when a slot wasn&apos;t
              available — kept visually distinct from the primary booking flow with a dedicated green call to action.
            </p>
            <PlaceholderFigure
              label="[ Booking flow — entry states — upload when ready ]"
              description="Placeholder for personalised booking flow entry states"
            />
          </div>

          <div className="step">
            <p className="step-label">Step 03</p>
            <h3 className="step-title">Account portal &amp; communications</h3>
            <p className="body-secondary">
              Beyond booking, clients had a full account portal — My Account, My Appointments (including a refund
              pipeline), and Preferences — along with dynamic, personalised email templates built with Handlebars.
            </p>
          </div>

          <div className="step">
            <p className="step-label">Step 04</p>
            <h3 className="step-title">Business-side analytics</h3>
            <p className="body-secondary">
              For business owners, I designed a Results Dashboard tracking the funnel from Reach to Open to Click to
              Book, with Reach-driven bookings shown alongside service upsells. Revenue Details let owners drill into
              specific transactions, and My Business / My Profile / My Providers rounded out the account-management
              side — including an avatar upload-and-crop flow for provider profiles.
            </p>
            <PlaceholderFigure
              label="[ Results Dashboard — upload when ready ]"
              description="Placeholder for the business-side Results Dashboard"
            />
          </div>
        </section>

        <hr className="rule" />

        <section id="results" aria-labelledby="results-heading">
          <h2 className="section-h" id="results-heading">Results</h2>
          <p className="body-secondary">
            Reach shipped as a full two-sided platform used by real businesses and their clients, with the design
            system evolving visibly over the engagement — from an early dark, wireframe-era UI to a polished,
            consistent blue-accented system used across every surface.
          </p>
          <Findings
            label="Outcomes from the Reach engagement"
            items={[
              { text: "Full two-sided platform shipped — consumer booking experience and business analytics dashboard" },
              { text: "Atomic design system built from scratch, used consistently across web and mobile" },
              { text: "Personalised booking flow handled 6+ distinct client entry states without added complexity" },
              { text: "Platform adoption and revenue-impact metrics — to confirm", pending: true },
            ]}
          />
        </section>

        <NextCaseStudy href="/work/itinerary-builder" title="TAAP Itinerary Builder" />
      </article>
    </>
  );
}
