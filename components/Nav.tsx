"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
          AJ Marksberry
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-500">
          <Link
            href="/"
            className={`hover:text-slate-900 transition-colors ${pathname === "/" ? "text-slate-900 font-medium" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="hover:text-slate-900 transition-colors"
          >
            About
          </Link>
          <a
            href="mailto:ajmarksberry@gmail.com"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
