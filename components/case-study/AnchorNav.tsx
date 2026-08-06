"use client";

import { useEffect, useRef } from "react";

export type Section = { id: string; label: string };

/**
 * Sticky in-page section nav shown at the top of every case study.
 * Sticks directly beneath the site header via --nav-h, and publishes its own
 * height as --anav-h so section anchors can scroll clear of both bars.
 */
export default function AnchorNav({ sections }: { sections: Section[] }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty("--anav-h", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty("--anav-h");
    };
  }, []);

  return (
    <nav ref={ref} className="anav" aria-label="Case study sections">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="anav-a"
          aria-current={i === 0 ? "true" : undefined}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
