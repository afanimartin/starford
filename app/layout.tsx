import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import RevealObserver from "./components/RevealObserver";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Starford International University | Education for Sustainable Development",
  description:
    "Starford International University (SIU) in Juba, South Sudan — empowering future leaders through academic excellence, research, and innovation.",
  keywords: "Starford University, South Sudan, Higher Education, Juba, Admissions 2026",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
