import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Mark — Automation & CRM Systems",
  description:
    "I help businesses automate their lead follow-up, CRM, and client workflows using GoHighLevel, n8n, Zapier, and Make — so nothing falls through the cracks.",
  openGraph: {
    title: "John Mark — Automation & CRM Systems",
    description:
      "I help businesses automate their lead follow-up, CRM, and client workflows using GoHighLevel, n8n, Zapier, and Make.",
    type: "website",
    locale: "en_US",
    siteName: "John Mark Valencia",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark — Automation & CRM Systems",
    description:
      "I help businesses automate their lead follow-up, CRM, and client workflows using GoHighLevel, n8n, Zapier, and Make.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
