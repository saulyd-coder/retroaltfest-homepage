import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { buildMetadata } from "@/lib/seo";
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

const rootMetadata = buildMetadata({
  title: "RetroAltFest | Curated Dark Alternative Festival Discovery",
  description:
    "RetroAltFest is a curated atlas of goth, darkwave, industrial, synthpop, post-punk, EDM, and alternative festivals.",
  path: "/",
  image: { url: "/og-preview.png" },
  keywords: [
    "dark alternative festivals",
    "goth festivals",
    "darkwave festivals",
    "industrial music festivals",
    "post-punk festivals",
    "synthpop festivals",
    "EDM festivals",
    "alternative festivals",
  ],
});

export const metadata: Metadata = {
  ...rootMetadata,
  openGraph: {
    ...rootMetadata.openGraph,
    images: rootMetadata.openGraph?.images,
  },
  twitter: {
    ...rootMetadata.twitter,
    images: rootMetadata.twitter?.images,
  },
  applicationName: "RetroAltFest",
  title: {
    default: "RetroAltFest | Curated Dark Alternative Festival Discovery",
    template: "%s | RetroAltFest",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
