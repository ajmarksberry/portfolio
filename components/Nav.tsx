"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header style={{ borderBottom: "1px solid var(--rule)", position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, color: "var(--ink)", textDecoration: "none" }}>
          AJ Marksberry
        </Link>
        <nav style={{ display: "flex", gap: 32 }}>
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontSize: 14,
                textDecoration: "none",
                color: pathname === href ? "var(--ink)" : "var(--muted)",
                fontWeight: pathname === href ? 500 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
