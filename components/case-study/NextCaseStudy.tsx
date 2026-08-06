import Link from "next/link";

/** "Next case study" link that closes out every case study page. */
export default function NextCaseStudy({ href, title }: { href: string; title: string }) {
  return (
    <nav className="next" aria-label="Next case study">
      <p className="next-label">Next case study</p>
      <Link href={href} className="next-link">
        {title}
        <span className="next-arrow" aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}
