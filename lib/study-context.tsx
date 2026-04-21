"use client";

import { createContext, useContext, useState } from "react";

type StudyContextType = {
  activeStudy: string | null;
  openStudy: (slug: string) => void;
  closeStudy: () => void;
};

const StudyContext = createContext<StudyContextType>({
  activeStudy: null,
  openStudy: () => {},
  closeStudy: () => {},
});

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);
  return (
    <StudyContext.Provider value={{
      activeStudy,
      openStudy: (slug) => setActiveStudy(slug),
      closeStudy: () => setActiveStudy(null),
    }}>
      {children}
    </StudyContext.Provider>
  );
}

export const useStudy = () => useContext(StudyContext);
