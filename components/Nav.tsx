"use client";

import { useEffect, useState } from "react";
import { useStudy } from "@/lib/study-context";

const sections = [
  { id: "work",    label: "Work" },
  { id: "about",   label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("work");
  const [mounted, setMounted] = useState(false);
  const { activeStudy, closeStudy } = useStudy();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || activeStudy) return;
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
  }, [mounted, activeStudy]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Mobile top nav */}
      <header className="nav-mobile">
        <div className="nav-mobile-inner">
          <span className="nav-wordmark">AJ Marksberry</span>
          <nav className="nav-mobile-links">
            {activeStudy ? (
              <button onClick={closeStudy} className="nav-mobile-btn nav-active">
                ← Back
              </button>
            ) : (
              sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`nav-mobile-btn${active === id ? " nav-active" : ""}`}
                >
                  {label}
                </button>
              ))
            )}
          </nav>
        </div>
      </header>

      {/* Desktop right-side nav */}
      <nav className="nav-desktop">
        <div className="nav-desktop-line" />
        {activeStudy ? (
          <button onClick={closeStudy} className="nav-desktop-btn">
            <span className="nav-desktop-label nav-active">← Back</span>
            <div className="nav-desktop-dot nav-active" />
          </button>
        ) : (
          sections.map(({ id, label }) => (
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
          ))
        )}
      </nav>
    </>
  );
}
