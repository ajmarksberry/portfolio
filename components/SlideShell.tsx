"use client";

import { useStudy } from "@/lib/study-context";
import PostBookingContent from "./case-studies/PostBookingContent";
import ItineraryBuilderContent from "./case-studies/ItineraryBuilderContent";
import ProtectedContent from "./case-studies/ProtectedContent";

const studyMap: Record<string, React.ComponentType> = {
  "post-booking-ux":    PostBookingContent,
  "itinerary-builder":  ItineraryBuilderContent,
  "protected-study":    ProtectedContent,
};

export default function SlideShell({ children }: { children: React.ReactNode }) {
  const { activeStudy } = useStudy();
  const StudyContent = activeStudy ? studyMap[activeStudy] : null;

  return (
    <div style={{ overflow: "hidden", position: "relative", minHeight: "100vh" }}>
      {/* Main panel — shrinks back with parallax as study rises */}
      <div style={{
        transform: activeStudy
          ? "translateY(-48px) scale(0.96)"
          : "translateY(0) scale(1)",
        transformOrigin: "top center",
        transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform",
      }}>
        {children}
      </div>

      {/* Study panel — slides up from bottom */}
      <div style={{
        position: "fixed",
        inset: 0,
        top: 0,
        background: "#ffffff",
        transform: activeStudy ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform",
        overflowY: activeStudy ? "auto" : "hidden",
        zIndex: 50,
      }}>
        {StudyContent && <StudyContent />}
      </div>
    </div>
  );
}
