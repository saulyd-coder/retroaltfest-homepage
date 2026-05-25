import { FeaturedFestivals } from "@/components/home/FeaturedFestivals";
import { Hero } from "@/components/home/Hero";
import { MapPreview } from "@/components/home/MapPreview";
import { SubmitFestivalCta } from "@/components/home/SubmitFestivalCta";
import { TrustSection } from "@/components/home/TrustSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-95" />
      <div className="pointer-events-none absolute left-[-12rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[var(--raf-magenta)]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-14rem] top-[6rem] h-[38rem] w-[38rem] rounded-full bg-[var(--raf-ultraviolet)]/16 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[42rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[var(--raf-deep-violet)]/50 blur-3xl" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-48 mix-blend-screen" />
      <div className="scanline pointer-events-none absolute inset-0 opacity-[0.13]" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[var(--raf-violet)]/20 blur-3xl" />

      <Header />
      <Hero />
      <TrustSection />
      <FeaturedFestivals />
      <MapPreview />
      <SubmitFestivalCta />
      <Footer />
    </main>
  );
}
