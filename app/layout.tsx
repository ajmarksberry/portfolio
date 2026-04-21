import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SlideShell from "@/components/SlideShell";
import { StudyProvider } from "@/lib/study-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "AJ Marksberry — UX Designer",
  description: "Senior UX Designer. B2B product design portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
