"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "work",    label: "Work" },
  { id: "about",   label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("work");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Mobile — top bar */}
      <header className="nav-mobile">
        <div className="nav-mobile-inner">
          <span className="nav-wordmark">AJ Marksberry</span>
          <nav className="nav-mobile-links">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-mobile-btn${active === id ? " nav-active" : ""}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Desktop — fixed right side */}
      <nav className="nav-desktop">
        <div className="nav-desktop-line" />
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="nav-desktop-btn"
          >
            <span className={`nav-desktop-label${active === id ? " nav-active" : ""}`}>
              {label}
            </span>
            <div className={`nav-desktop-dot${active === id ? " nav-active" : ""}`} />
          </button>
        ))}
      </nav>
    </>
  );
}
