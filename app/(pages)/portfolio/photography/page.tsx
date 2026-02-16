import {
  PortfolioHeroSection,
  PhotographySection,
} from "@/components/portfolio/Portfolio";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeroSection
        title="Photography"
        description="Professional photography, visual storytelling, and captured moments that bring your brand to life."
        backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2574&auto=format&fit=crop"
      />
      <PhotographySection />
    </main>
  );
}
