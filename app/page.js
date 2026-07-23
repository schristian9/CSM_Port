import Masthead from "@/components/Masthead";
import Manifesto from "@/components/Manifesto";
import KpiCollage from "@/components/KpiCollage";
import ExecutiveAchievements from "@/components/ExecutiveAchievements";
import EnterpriseValueImpact from "@/components/EnterpriseValueImpact";
import PortfolioHub from "@/components/PortfolioHub";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-50 selection:text-white relative">
      {/* Background Noise Overlay for Zine Texture */}
      <div className="noise-overlay" />

      {/* Masthead Header */}
      <Masthead />

      {/* Main Content Layout */}
      <main className="flex-1 w-full bg-white">
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

      {/* Zine Footer */}
      <footer className="w-full border-t-2 border-slate-200 bg-white text-slate-500 py-12 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-sans tracking-tight font-black uppercase leading-none text-slate-900">
              SARLINSON CHRISTIAN
            </h2>
            <p className="text-xs font-sans tracking-widest text-blue-600 mt-1.5 uppercase">
              Technical Success Manager & Onboarding Specialist
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs font-sans text-gray-400">
            <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
