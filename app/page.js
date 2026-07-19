import Masthead from "@/components/Masthead";
import Manifesto from "@/components/Manifesto";
import KpiCollage from "@/components/KpiCollage";
import LifecycleTimeline from "@/components/LifecycleTimeline";
import Playbooks from "@/components/Playbooks";
import StrategyCopilot from "@/components/StrategyCopilot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#BFA175] selection:text-white relative">
      {/* Background Noise Overlay for Zine Texture */}
      <div className="noise-overlay" />

      {/* Masthead Header */}
      <Masthead />

      {/* Main Content Layout */}
      <main className="flex-1 w-full bg-[#FFF6E7]">
        {/* Hero Manifesto */}
        <Manifesto />

        {/* Metrics Collage */}
        <KpiCollage />

        {/* Career Experience Lifecycle Timeline */}
        <LifecycleTimeline />

        {/* Interactive Strategic Playbooks */}
        <Playbooks />

        {/* AI CS Strategy Copilot */}
        <StrategyCopilot />
      </main>

      {/* Zine Footer */}
      <footer className="w-full border-t-2 border-[#8C2F39] bg-[#8C2F39] text-[#FFF6E7] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-display font-black tracking-tight uppercase leading-none text-white">
              SARLINSON CHRISTIAN
            </h2>
            <p className="text-xs font-mono tracking-widest text-[#BFA175] mt-1.5 uppercase">
              Technical Success Manager & Onboarding Specialist
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs font-mono text-gray-400">
            <p>© {new Date().getFullYear()} SARLINSON CHRISTIAN. ALL RIGHTS RESERVED.</p>
            <p className="uppercase">DESIGN SYSTEM: EDITORIAL ZINE V1.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
