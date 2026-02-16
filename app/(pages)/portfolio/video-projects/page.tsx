import {
  PortfolioHeroSection,
  VideoProjectsSection,
} from "@/components/portfolio/Portfolio";

export default function VideoProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioHeroSection
        title="Video Projects"
        description="Story-driven video content, cinematic reels, and motion pieces that captivate audiences"
        backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
      />
      <VideoProjectsSection />
    </main>
  );
}
