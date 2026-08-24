import Masthead from "@/components/Masthead";
import Manifesto from "@/components/Manifesto";
import KpiCollage from "@/components/KpiCollage";
import ExecutiveAchievements from "@/components/ExecutiveAchievements";
import EnterpriseValueImpact from "@/components/EnterpriseValueImpact";
import PortfolioHub from "@/components/PortfolioHub";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Noise Overlay for Zine Texture */}
      <div className="noise-overlay" />

      {/* Masthead Header */}
      <Masthead />

      {/* Main Content Layout */}
      <main className="flex-1 w-full">
        {/* Hero Manifesto */}
        <Manifesto />

        {/* Metrics Collage */}
        <KpiCollage />

        {/* Selected Executive Achievements */}
        <ExecutiveAchievements />

        {/* Commercial Execution & Value */}
        <EnterpriseValueImpact />

        {/* Strategic Portfolio Routing Hub */}
        <PortfolioHub />
      </main>

      <SiteFooter />
    </div>
  );
}
