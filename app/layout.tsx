import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import SlideShell from "@/components/SlideShell";
import { StudyProvider } from "@/lib/study-context";

export const metadata: Metadata = {
  title: "AJ Marksberry — UX Designer",
  description: "Senior UX Designer. 25+ years of B2B product design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StudyProvider>
          <Nav />
          <SlideShell>
            {children}
          </SlideShell>
        </StudyProvider>
      </body>
    </html>
  );
}
