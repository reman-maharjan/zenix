import {
  PortfolioHeroSection,
  WebProjectsSection,
} from "@/components/portfolio/Portfolio";

export default function WebProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeroSection />
      <WebProjectsSection />
    </main>
  );
}

