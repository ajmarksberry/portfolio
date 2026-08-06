"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  /* Publish the header's real height as --nav-h so the case-study anchor nav can
     stick directly beneath it. Measured rather than hardcoded because the height
     shifts with the system-font fallbacks (Segoe/Georgia render taller than SF/New York). */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 681px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isResume = pathname === "/resume";

  return (
    <>
      <nav ref={navRef} className="site-nav" aria-label="Primary">
        <Link href="/" className="nav-logo">AJ Marksberry</Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li><Link ref={firstLinkRef} href="/#work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link href="/resume" aria-current={isResume ? "page" : undefined} onClick={() => setMenuOpen(false)}>Resume</Link></li>
          <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li>
            <a href="mailto:ajmarksberry@gmail.com" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-backdrop${menuOpen ? " show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
