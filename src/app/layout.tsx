import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://retroaltfest.com"),
  applicationName: "RetroAltFest",
  title: {
    default: "RetroAltFest | Curated Dark Alternative Festival Discovery",
    template: "%s | RetroAltFest",
  },
  description:
    "RetroAltFest is a curated atlas of goth, darkwave, industrial, synth, EBM, post-punk, and underground dark alternative festivals.",
  keywords: [
    "RetroAltFest",
    "dark alternative festivals",
    "goth festivals",
    "darkwave festivals",
    "industrial music festivals",
    "post-punk festivals",
    "synthpop festivals",
    "EBM festivals",
  ],
  openGraph: {
    title: "RetroAltFest | Discover dark alternative festivals worth traveling for.",
    description:
      "A curated, source-aware festival discovery MVP for goth, darkwave, industrial, synth, EBM, post-punk, and underground scenes.",
    url: "https://retroaltfest.com",
    siteName: "RetroAltFest",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "RetroAltFest dark alternative festival atlas preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RetroAltFest",
    description: "Curated dark alternative festival discovery.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full scroll-smooth bg-[var(--raf-black)] antialiased`}
    >
      <body className="min-h-full bg-[var(--raf-black)] text-[var(--raf-text)] selection:bg-[var(--raf-violet)]/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
