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

  if (!mounted) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed",
      right: 32,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4,
    }}>
      {/* Vertical line */}
      <div style={{
        position: "absolute",
        right: 3,
        top: 8,
        bottom: 8,
        width: 1,
        background: "var(--rule)",
      }} />

      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px 0",
            paddingRight: 16,
          }}
        >
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: active === id ? "var(--ink)" : "var(--muted)",
            opacity: active === id ? 1 : 0.5,
            transition: "opacity 0.2s, color 0.2s",
          }}>
            {label}
          </span>
          {/* Dot */}
          <div style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: active === id ? "var(--accent)" : "var(--rule)",
            border: `1px solid ${active === id ? "var(--accent)" : "var(--muted)"}`,
            transition: "background 0.2s, border-color 0.2s",
            flexShrink: 0,
          }} />
        </button>
      ))}
    </nav>
  );
}
