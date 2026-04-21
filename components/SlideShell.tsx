"use client";

import { useStudy } from "@/lib/study-context";
import PostBookingContent from "./case-studies/PostBookingContent";
import ItineraryBuilderContent from "./case-studies/ItineraryBuilderContent";

const studyMap: Record<string, React.ComponentType> = {
  "post-booking-ux":    PostBookingContent,
  "itinerary-builder":  ItineraryBuilderContent,
};

export default function SlideShell({ children }: { children: React.ReactNode }) {
  const { activeStudy } = useStudy();
  const StudyContent = activeStudy ? studyMap[activeStudy] : null;

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {/* Main panel */}
      <div style={{
        transform: activeStudy ? "translateX(-100%)" : "translateX(0)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform",
      }}>
        {children}
      </div>

      {/* Study panel */}
      <div style={{
        position: "absolute",
        inset: 0,
        minHeight: "100vh",
        background: "var(--white)",
        transform: activeStudy ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform",
        overflowY: activeStudy ? "auto" : "hidden",
      }}>
        {StudyContent && <StudyContent />}
      </div>
    </div>
  );
}
