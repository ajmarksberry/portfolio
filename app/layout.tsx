import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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
        <Nav />
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--rule)", padding: "32px 24px", textAlign: "center", fontSize: "13px", color: "var(--muted)" }}>
          © {new Date().getFullYear()} AJ Marksberry
        </footer>
      </body>
    </html>
  );
}
