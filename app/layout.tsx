import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sugat | Full-Stack Developer",
  description:
    "Welcome to Sugat's developer portfolio. Explore innovative web apps, and technical blog posts showcasing expertise in full-stack development, Next.js, and creative coding.",
  keywords: [
    "Sugat Ghimire",
    "developer portfolio",
    "full-stack developer",
    "Next.js developer",
    "React.js",
    "TypeScript",
    "web development",
    "creative coding",
    "frontend developer",
  ],
  authors: [{ name: "Sugat Ghimire", url: "" }],
  creator: "Sugat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
