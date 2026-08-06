const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

export const metadata = {
  title: "AJ Marksberry — Resume",
  description:
    "Resume for AJ Marksberry, Senior Product Designer — 26+ years of experience in enterprise SaaS, B2B, and consumer product design.",
};

const coreSkills = [
  "Product Design", "UX Strategy", "User Research", "Information Architecture",
  "Interaction Design", "Accessibility", "Design Systems", "Enterprise SaaS",
  "AI-Assisted Design Workflows", "Journey Mapping", "Prototyping", "Visual Design",
  "Figma", "Stakeholder Management",
];

const jobs = [
  {
    company: "Expedia Group",
    dates: "2022–Present",
    title: "Senior UX Designer (Contract)",
    bullets: [
      "Lead product design initiatives for Expedia Group's Travel Agent Affiliate Program (TAAP), creating enterprise tools that support trip management, itinerary creation, advisor productivity, and post-booking experiences.",
      "Drive UX strategy, information architecture, interaction design, accessibility, and user research across complex desktop and mobile workflows, translating business requirements into intuitive customer experiences.",
      "Plan and facilitate discovery workshops, design sprints, stakeholder reviews, and concept validation activities that help align teams and inform product direction.",
      "Conduct user research, experience audits, design audits, usability testing, and UAT reviews to identify opportunities, validate solutions, and improve customer experiences.",
      "Partner closely with Product, Engineering, Research, Content Design, and Legal stakeholders to deliver scalable solutions and contribute to platform-wide design system adoption.",
      "Mentor and support junior team members through design reviews, knowledge sharing, and collaborative problem-solving.",
    ],
  },
  {
    company: "No One Creative",
    dates: "1999–Present",
    title: "Founder & Principal Product Designer",
    bullets: [
      "Founded and operate No One Creative, an independent product design consultancy providing UX strategy, product design, user research, information architecture, accessibility, and design system expertise to startups, SaaS companies, and enterprise organizations.",
      "Partner with clients to define product strategy, facilitate discovery workshops, conduct user research, and design intuitive digital experiences across web, mobile, and enterprise platforms.",
      "Current and past engagements span travel, healthcare, action sports, communications, insurance, hospitality, ecommerce, and SaaS industries, collaborating with founders, executives, product managers, and engineering teams to solve complex business and customer challenges.",
    ],
  },
  {
    company: "Spok",
    dates: "2018–2019",
    title: "Senior UX Designer",
    bullets: [
      "Designed enterprise healthcare communication solutions supporting critical clinical workflows across web and mobile platforms.",
      "Established and maintained a design system and pattern library that improved consistency, scalability, and collaboration across product teams.",
    ],
  },
  {
    company: "Reach.ai",
    dates: "2019–2021",
    title: "Senior Product Designer",
    bullets: [
      "Served as lead product designer for a SaaS appointment booking and customer engagement platform.",
      "Led discovery workshops and product design initiatives across web and mobile experiences, focusing on workflow optimization, usability, and customer needs.",
    ],
  },
  {
    company: "Bolste",
    dates: "2016–2018",
    title: "Senior Product Designer",
    bullets: [
      "Served as lead product designer for a SaaS collaboration platform, partnering with founders and engineering teams to define product vision and user experience strategy.",
      "Designed end-to-end experiences supporting communication, project management, file sharing, scheduling, and productivity workflows.",
    ],
  },
];

const additionalExperience = [
  { company: "Nerdery", title: "Senior UX Designer", dates: "2021–2022" },
  { company: "Mirum", title: "Senior UX Designer", dates: "2018" },
  { company: "Drawbackwards", title: "Senior Interactive Designer", dates: "2012–2013" },
  { company: "Fox Restaurant Concepts", title: "Senior Interactive Designer", dates: "2006–2012" },
  { company: "E.B. Lane", title: "Interactive Designer & Developer", dates: "2006–2010" },
  { company: "Sugar Creative", title: "Web Designer & Developer", dates: "2002–2003" },
  { company: "Spark Design", title: "Web Designer & Developer", dates: "2000–2002" },
];

export default function ResumePage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-heading">
        <p className="hero-eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span className="eyebrow-text">Resume</span>
        </p>
        <h1 className="page-h1" id="page-heading">AJ Marksberry</h1>
        <p className="page-sub">Senior Product Designer — Minneapolis, MN. Open to remote &amp; hybrid opportunities.</p>
        <ul className="contact-row">
          <li className="contact-item"><a href="tel:+16027901018">602-790-1018</a></li>
          <li className="contact-item"><a href="mailto:ajmarksberry@gmail.com">ajmarksberry@gmail.com</a></li>
          <li className="contact-item"><a href="https://www.linkedin.com/in/ajmarksberry" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <div className="dl-row">
          <a href={`${basePath}/AJ_Marksberry_Resume.pdf`} className="dl-btn dl-primary" download>
            Download résumé (PDF)
          </a>
        </div>
      </section>

      <div className="full-rule" role="separator" aria-hidden="true"></div>

      <section className="r-section" aria-labelledby="summary-heading">
        <h2 className="r-label" id="summary-heading">Professional Summary</h2>
        <p className="summary-text">
          Senior Product Designer with 26+ years of experience designing enterprise SaaS, B2B, and consumer products.
          Expertise in UX strategy, user research, information architecture, interaction design, accessibility, design
          systems, and AI-assisted design workflows. Proven track record leading complex product initiatives from
          discovery through delivery while partnering with cross-functional teams to create intuitive, customer-centered
          experiences.
        </p>
      </section>

      <section className="r-section" aria-labelledby="skills-heading">
        <h2 className="r-label" id="skills-heading">Core Skills</h2>
        <ul className="skills-wrap">
          {coreSkills.map((skill) => (
            <li key={skill} className="skill-chip">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="r-section" aria-labelledby="experience-heading">
        <h2 className="r-label" id="experience-heading">Professional Experience</h2>
        <ol className="job-list">
          {jobs.map((job, i) => (
            <li key={job.company}>
              <div className="job">
                <div className="job-head">
                  <h3 className="job-company">{job.company}</h3>
                  <span className="job-dates">{job.dates}</span>
                </div>
                <p className="job-title">{job.title}</p>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
              {i < jobs.length - 1 && <div className="job-divider" role="separator" aria-hidden="true"></div>}
            </li>
          ))}
        </ol>
      </section>

      <section className="r-section" aria-labelledby="additional-heading">
        <h2 className="r-label" id="additional-heading">Additional Experience</h2>
        <ul className="consulting-list">
          {additionalExperience.map((job) => (
            <li key={job.company} className="consulting-item">
              <span className="consulting-co">{job.company}</span>
              <span className="consulting-title">{job.title}</span>
              <span className="consulting-dates">{job.dates}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="r-section" aria-labelledby="education-heading">
        <h2 className="r-label" id="education-heading">Education</h2>
        <div className="edu-row">
          <span className="edu-degree">Bachelor of Visual Communication</span>
          <span className="edu-school">Collins College</span>
        </div>
      </section>

      <section className="r-section" aria-labelledby="references-heading">
        <h2 className="r-label" id="references-heading">References</h2>
        <p className="summary-text">References available upon request.</p>
      </section>
    </>
  );
}
