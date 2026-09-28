import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const bnEclipse = localFont({
  src: "../fonts/BNEclipse.otf",
  weight: "400",
  style: "normal",
  variable: "--font-eclipse",
});

export const metadata: Metadata = {
  title: "Flavy Tonfack",
  description:
    "I’m Flavy, a product designer working at the intersection of design and development to build polished web experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bnEclipse.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
