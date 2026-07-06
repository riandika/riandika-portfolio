import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "I Nengah Riandika | Frontend Engineer",
  description:
    "Frontend Engineer with 5+ years of experience designing and delivering enterprise web applications using React, Angular, and TypeScript.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Angular",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "I Nengah Riandika" }],
  openGraph: {
    title: "I Nengah Riandika | Frontend Engineer",
    description: "Frontend Engineer with 5+ years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
