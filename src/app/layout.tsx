import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";

const outfit = Outfit({
  subsets: ["latin"],
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
      <body className={`${outfit.variable}`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
