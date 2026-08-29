import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "John Mark — Revenue Operations & Automation",
  description: "Practical CRM and workflow systems for teams that need every lead handled, booked, and reported.",
  openGraph: {
    title: "John Mark — Revenue Operations & Automation",
    description: "Practical CRM and workflow systems for teams that need every lead handled, booked, and reported.",
    type: "website",
    locale: "en_US",
    siteName: "John Mark Valencia",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
