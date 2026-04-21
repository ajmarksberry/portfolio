"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: "rgba(14,31,46,0.96)",
        borderColor: "rgba(26,107,122,0.2)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "#f7f4ee", fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
        >
          AJ Marksberry
        </Link>
        <nav className="flex items-center gap-8 text-sm">
          {[
            { label: "Work", href: "/" },
            { label: "About", href: "/#about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:opacity-100"
              style={{
                color: pathname === href ? "#f7f4ee" : "#6a9aaa",
                fontWeight: pathname === href ? 500 : 400,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
