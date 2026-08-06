import Image from "next/image";
import AnchorNav from "@/components/case-study/AnchorNav";
import Byline from "@/components/case-study/Byline";
import ArticleMeta from "@/components/case-study/ArticleMeta";
import Figure from "@/components/case-study/Figure";
import Findings from "@/components/case-study/Findings";
import NextCaseStudy from "@/components/case-study/NextCaseStudy";

export const metadata = {
  title: "REACH Dashboard Redesign — AJ Marksberry",
  description:
    "Improving the merchant's dashboard interface with proven design patterns — a UX/UI case study on the REACH.ai Merchant Portal.",
};

const responsibilities = [
  "Heuristic evaluation",
  "User interviews",
  "Discovery sessions",
  "Competitive analysis",
  "User flows + sitemap",
  "Sketching and wireframing",
  "UX/UI design",
  "Atomic design system",
  "Prototyping",
  "Developer handoff",
];

const personas = [
  {
    image: "/case-studies/reach-dashboard/persona-owner.png",
    alt: "Portrait of the Small Business Owner persona",
    role: "Small Business Owner\nSalon/Barber",
    quote:
      "I would like to leverage an automated tool that fills seats while maintaining a personal touch with my clients.",
    facts: [
      ["Age", "35–45"],
      ["Status", "Married"],
      ["Location", "Phoenix, AZ"],
      ["Archetype", "Decision Maker"],
    ],
    motivation:
      "Motivated to free up time to focus on acquiring new clients, with confidence that the current client book is being maintained.",
    goals: [
      "Fill as many appointments as possible",
      "Client retention",
      "Keep costs low",
      "Easy to use, hands-off technology",
    ],
    frustrations: [
      "Paying for multiple communication tools",
      "Ability to remain proactive with clients",
      "Manual processes",
    ],
  },
  {
    image: "/case-studies/reach-dashboard/persona-receptionist.png",
    alt: "Portrait of the Receptionist persona",
    role: "Receptionist\nSalon/Barber",
    quote:
      "I need an easy-to-use interface to gain quick, high-level insights into our client's booking habits and how it affects our stylist's schedule.",
    facts: [
      ["Age", "28"],
      ["Status", "Single"],
      ["Location", "Scottsdale, AZ"],
      ["Archetype", "Task Manager"],
    ],
    motivation:
      "Motivated to stay up-to-date on the business's appointment schedule, easily identify important revenue information, and understand where clients are booking from.",
    goals: [
      "Ability to bubble up information to the business owner when asked",
      "Manage fewer inbound calls and emails regarding bookings",
      "Leverage a proactive communication tool to alleviate manual processes",
    ],
    frustrations: [
      "Managing multiple, complex communication tools",
      "Ability to remain proactive with clients",
      "Appointment details exist in several separate systems",
    ],
  },
];

export default function ReachDashboardCaseStudy() {
  return (
    <>
      <AnchorNav
        sections={[
          { id: "overview", label: "Overview" },
          { id: "challenge", label: "Challenge" },
          { id: "research", label: "Research" },
          { id: "design", label: "Design" },
          { id: "results", label: "Results" },
        ]}
      />

      <article className="article">
        <Byline meta="UX/UI Designer · REACH.ai · 2021–2022" />

        <section id="overview" aria-labelledby="article-title">
          <h1 className="article-title" id="article-title">REACH Dashboard Redesign</h1>
          <p className="article-deck">
            Improving the merchant&apos;s dashboard interface with proven design patterns.
          </p>

          <ArticleMeta
            items={[
              ["Year", "2021–2022"],
              ["Client", "REACH.ai"],
              ["Project", "REACH.ai Merchant Portal"],
              ["Role", "UX/UI Designer"],
            ]}
          />

          <div className="split">
            <div>
              <p className="persona-block-label">My responsibilities</p>
              <ul className="body-list">
                {responsibilities.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
            <div>
              <p className="persona-block-label">Contributors</p>
              <ul className="body-list">
                <li>AJ Marksberry — UX/UI designer + Product designer</li>
                <li>Brad Flahive — Product owner</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section aria-labelledby="what-heading">
          <h2 className="section-h" id="what-heading">What is REACH.ai?</h2>
          <p className="body-secondary">
            REACH integrates with your scheduling software (think hair salon) and scans your live appointment book to
            look for last-minute openings and cancellations. REACH then contacts your customers on your behalf to fill
            these appointments, using machine learning algorithms to predict who is most likely to fill the opening.
          </p>
          <p className="body-secondary">
            The Merchant Portal is where business owners and their staff see the results of all that activity — revenue
            recovered, appointments filled, and how each campaign performed.
          </p>
        </section>

        <hr className="rule" />

        <section id="challenge" aria-labelledby="challenge-heading">
          <h2 className="section-h" id="challenge-heading">The challenge</h2>
          <p className="body-text">
            Our task was to simplify the interface and improve the overall experience of the Merchant Portal. The goal
            was to reduce the cognitive overload of the design, consolidate data, and create a more pleasant experience
            for users.
          </p>

          <Figure
            breakout
            src="/case-studies/reach-dashboard/before-dashboard.png"
            alt="The original REACH Results Dashboard: a dense layout with a blue icon rail, a promotional welcome card, four brightly colored revenue tiles, an Autofill Agent summary, a Client Connect donut chart with a line graph, and a Reputation Radar review panel — all competing for attention on one screen."
            width={904}
            height={869}
            caption="The dashboard we inherited — six competing sections, five accent colors, and no clear visual hierarchy"
          />

          <h3 className="step-title">The solution</h3>
          <ul className="body-list">
            <li>Interview users to learn about their current experience.</li>
            <li>Evaluate the existing page designs, and take inventory of design assets.</li>
            <li>Define a hierarchy of important information for desktop and mobile devices.</li>
            <li>Simplify the dashboard design using UX/UI best practices.</li>
            <li>Create an atomic design system and pattern library.</li>
          </ul>
        </section>

        <hr className="rule" />

        <section id="research" aria-labelledby="research-heading">
          <h2 className="section-h" id="research-heading">Our users</h2>
          <p className="body-secondary">
            To empathize with the users, we needed to know who we were designing for.
          </p>

          {personas.map((p) => (
            <div className="persona" key={p.role}>
              <div>
                <Image
                  className="persona-portrait"
                  src={p.image}
                  alt={p.alt}
                  width={275}
                  height={275}
                />
                <p className="persona-role">
                  {p.role.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </p>
              </div>
              <div>
                <p className="persona-quote">&ldquo;{p.quote}&rdquo;</p>
                <ul className="persona-facts">
                  {p.facts.map(([label, value]) => (
                    <li key={label}><strong>{label}:</strong> {value}</li>
                  ))}
                </ul>
                <div className="persona-block">
                  <p className="persona-block-label">Motivation</p>
                  <p>{p.motivation}</p>
                </div>
                <div className="persona-block">
                  <p className="persona-block-label">Goals</p>
                  <ul>{p.goals.map((g) => <li key={g}>{g}</li>)}</ul>
                </div>
                <div className="persona-block">
                  <p className="persona-block-label">Frustrations</p>
                  <ul>{p.frustrations.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}

          <h3 className="step-title">User interviews</h3>
          <p className="body-secondary">
            Because we couldn&apos;t afford dedicated user testing or interviews, we gave the customer success team a
            list of questions to ask customers during sales and support calls:
          </p>
          <ul className="body-list">
            <li>How do you feel about the design?</li>
            <li>How would you improve the design?</li>
            <li>What features are most important to you, and visited most?</li>
          </ul>

          <h3 className="step-title">What we heard</h3>
          <ul className="quote-list">
            <li>&ldquo;There is a lot of information on the dashboard.&rdquo;</li>
            <li>&ldquo;I can&apos;t find what I&apos;m looking for.&rdquo;</li>
            <li>&ldquo;Too much going on in the page.&rdquo;</li>
            <li>&ldquo;I look at dashboard and results the most.&rdquo;</li>
            <li>&ldquo;It&apos;s difficult to change locations.&rdquo;</li>
          </ul>

          <h3 className="step-title">Heuristic evaluation</h3>
          <p className="body-secondary">
            We reviewed the existing designs and identified areas of improvement for the visual design and user
            experience.
          </p>
          <Figure
            src="/case-studies/reach-dashboard/heuristic-eval.png"
            alt="Annotated heuristic evaluation of the existing dashboard, with issues marked directly on the interface."
            width={655}
            height={425}
          />

          <h3 className="step-title">Recommendations</h3>
          <p className="body-secondary">Updates to the UX/UI based on our analysis:</p>
          <ul className="body-list">
            <li>Simplify the color palette.</li>
            <li>Define and maintain a design system for consistent styles, reusable components, and shared patterns.</li>
            <li>Add a side navigation and top navigation for easier use.</li>
            <li>Relocate the location selector to make it more discoverable.</li>
            <li>Optimize for mobile with responsive design.</li>
            <li>Remove unnecessary and legacy features.</li>
            <li>Reduce the amount of content on the page.</li>
          </ul>
        </section>

        <hr className="rule" />

        <section id="design" aria-labelledby="design-heading">
          <h2 className="section-h" id="design-heading">Discovery &amp; wireframes</h2>
          <p className="body-secondary">
            Working with team members to brainstorm solutions — team collaboration, information architecture, site map,
            sketches, and wireframes.
          </p>
          <Figure
            breakout
            src="/case-studies/reach-dashboard/wireframes.png"
            alt="Greyscale wireframe of the redesigned dashboard showing a left sidebar, a location header, date-range filters, a large total revenue and bookings figure, four booking-type tiles, and side-by-side Email and SMS results panels."
            width={767}
            height={582}
            caption="Wireframing the new hierarchy before any visual design"
          />

          <h2 className="section-h">Visual / UI design</h2>
          <p className="body-secondary">
            Redefining the UI visual design to accommodate our recommendations for a better user experience. I
            referenced Dribbble and Behance for inspiration.
          </p>

          <Figure
            breakout
            src="/case-studies/reach-dashboard/dashboard-1.png"
            alt="The redesigned Results Dashboard: a light sidebar with Results, My Business, My Providers and My Services; a location selector in the header; headline figures for hours of vacant bookings filled and total revenue; three revenue breakdown tiles; and two peach-toned campaign result panels for email and SMS."
            width={1216}
            height={676}
            caption="The redesigned dashboard — one accent color, a clear headline metric, and campaign results grouped together"
          />

          <Figure
            breakout
            src="/case-studies/reach-dashboard/dashboard-2.png"
            alt="The dashboard with two menus open: the relocated location selector in the header listing Palo Alto, Scottsdale and Tempe, and the account menu showing Profile, My Account, Settings and Sign Out."
            width={1216}
            height={676}
            caption="The relocated location selector and account menu — addressing “it’s difficult to change locations”"
          />

          <Figure
            breakout
            src="/case-studies/reach-dashboard/dashboard-3.png"
            alt="The REACH Bookings detail overlay, with tabs for REACH Bookings, REACH-Driven Bookings and Service Upsells, a revenue total, and a sortable table of client, booking date, source, service, provider, date, time and total."
            width={1216}
            height={676}
            caption="Drill-down detail — moved out of the dashboard and into a focused overlay"
          />

          <Figure
            device
            src="/case-studies/reach-dashboard/mobile-dashboard.png"
            alt="The Results Dashboard on an iPhone: a location selector, the headline figures for hours of vacant bookings filled and total revenue, a three-column revenue breakdown, and the email campaign results panel — all stacked for a narrow viewport."
            width={609}
            height={619}
            caption="The Results Dashboard on mobile — the same hierarchy, stacked for a narrow viewport"
          />
        </section>

        <hr className="rule" />

        <section id="results" aria-labelledby="results-heading">
          <h2 className="section-h" id="results-heading">Results</h2>
          <p className="body-secondary">Project success metrics.</p>
          <Findings
            label="Project outcomes"
            items={[
              { text: "In comparison to the previous iteration, customers spent twice as much time interacting with the app over the course of a week" },
              { text: "Inbound customer support calls about product functionality were drastically reduced" },
              { text: "Positive feedback from the current customer base as well as potential customers during sales demos" },
              { text: "The majority of clients using the previous UI chose to upgrade to the new dashboard design" },
            ]}
          />

          <h3 className="step-title">Next steps</h3>
          <p className="body-secondary">
            Based on the dashboard page and customer comments, we pushed forward with updating all remaining pages. I
            continued creating styles and components for the new design system.
          </p>
          <Figure
            breakout
            src="/case-studies/reach-dashboard/next-steps.png"
            alt="Three further screens designed in the new system, continuing the visual language established by the dashboard redesign."
            width={1172}
            height={479}
            caption="Rolling the new design system out across the rest of the portal"
          />
        </section>

        <NextCaseStudy href="/work/itinerary-builder" title="TAAP Itinerary Builder" />
      </article>
    </>
  );
}
