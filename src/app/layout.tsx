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
  robots: { index: true, follow: true },
  icons: { icon: "/assets/jm-monogram.png" },
};

// Inline script to prevent dark mode flash (runs before paint)
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
