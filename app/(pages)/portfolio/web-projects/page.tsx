import {
  PortfolioHeroSection,
  WebProjectsSection,
} from "@/components/portfolio/Portfolio";

export default function WebProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeroSection
        title="Web Projects"
        description="Modern, responsive web experiences and digital platforms built for ambitious brands"
        backgroundImage="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop"
      />
      <WebProjectsSection />
    </main>
  );
}
