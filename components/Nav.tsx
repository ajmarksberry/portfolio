"use client";

import { useState, useEffect, useRef } from "react";
import { useStudy } from "@/lib/study-context";

const links = [
  { label: "Work",    href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeStudy, closeStudy } = useStudy();
  const closeRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Trap focus and lock scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <header className="site-nav" role="banner">
        <div className="site-nav-inner">
          {/* Logo */}
          <a
            href="#"
            className="site-nav-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-label="AJ Marksberry — home"
          >
            AJ Marksberry
          </a>

          {/* Desktop links */}
          {activeStudy ? (
            <ul className="site-nav-links" role="list">
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); closeStudy(); }}
                  aria-label="Back to portfolio"
                >
                  ← Back
                </a>
              </li>
            </ul>
          ) : (
            <ul className="site-nav-links" role="list">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            className="hamburger-btn"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          ref={closeRef}
          className="mobile-menu-close"
          aria-label="Close navigation menu"
          onClick={() => { setMenuOpen(false); hamburgerRef.current?.focus(); }}
        >
          ×
        </button>

        <nav aria-label="Mobile navigation">
          {activeStudy ? (
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); closeStudy(); setMenuOpen(false); }}
            >
              ← Back
            </a>
          ) : (
            links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
              >
                {label}
              </a>
            ))
          )}
        </nav>
      </div>
    </>
  );
}
