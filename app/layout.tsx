import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "AJ Marksberry — UX Designer",
  description: "B2B product design portfolio. Senior UX Designer at Expedia TAAP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-100 py-8 px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} AJ Marksberry
        </footer>
      </body>
    </html>
  );
}
