import {
  PortfolioHeroSection,
  DigitalMarketingSection,
} from "@/components/portfolio/Portfolio";

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeroSection
        title="Digital Marketing"
        description="Creative campaigns and performance-focused social content that drive engagement and results"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      />
      <DigitalMarketingSection />
    </main>
  );
}
