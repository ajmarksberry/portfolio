"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-[#1a6b7a]/20" style={{ background: "rgba(14,31,46,0.97)" }}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide transition-colors" style={{ color: "#f7f4ee", fontFamily: "var(--font-serif)" }}>
          AJ Marksberry
        </Link>
        <nav className="flex items-center gap-6 text-sm" style={{ color: "#a8c5cc" }}>
          <Link
            href="/"
            className="transition-colors hover:text-[#f7f4ee]"
            style={{ color: pathname === "/" ? "#f7f4ee" : undefined, fontWeight: pathname === "/" ? 500 : undefined }}
          >
            Work
          </Link>
          <Link href="/#about" className="transition-colors hover:text-[#f7f4ee]">
            About
          </Link>
          <a href="mailto:ajmarksberry@gmail.com" className="transition-colors hover:text-[#f7f4ee]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
