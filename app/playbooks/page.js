"use client";

import Masthead from "@/components/Masthead";
import Link from "next/link";
import PlaybooksComponent from "@/components/Playbooks";

export default function PlaybooksPage() {
  const artifacts = [
    {
      title: "Executive QBR / EBR Slide Decks",
      description: "Sanitized templates for Quarterly Business Reviews showcasing value realization, health metrics, and strategic alignment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      fileUrl: "/playbooks/qbr-deck.pdf"
    },
    {
      title: "30-60-90 Day Customer Onboarding",
      description: "Structured project plans for accelerating time-to-value (TTV) during critical initial deployment phases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      fileUrl: "/playbooks/csm-lesson.pdf"
    },
    {
      title: "At-Risk Account Recovery Frameworks",
      description: "Step-by-step mitigation plans for identifying churn risk, conducting root-cause analysis, and deploying rescue sprints.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      fileUrl: "/playbooks/business-strategy.pdf"
    },
    {
      title: "Account Health Scorecard Models",
      description: "Customizable matrices used to objectively measure adoption, executive engagement, and technical debt.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-50 selection:text-white relative bg-white">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full pb-24">
        {/* Header Section */}
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="pro-badge mb-4">RESOURCES & METHODOLOGY</div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-slate-900 leading-tight uppercase mb-6">
              Strategic <span className="text-blue-600">Playbooks</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-slate-600 leading-relaxed font-semibold max-w-3xl">
              A comprehensive library of the actual frameworks, presentation decks, and operating models I use to drive predictable customer success.
            </p>
          </div>
        </section>

        {/* Existing Interactive Playbooks Component */}
        <div className="bg-white">
          <PlaybooksComponent />
        </div>

        {/* The CSM Toolkit - Downloadable Artifacts */}
        <section className="border-t border-slate-200 bg-slate-50 text-slate-900 relative overflow-hidden">
          <div className="noise-overlay opacity-50" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 mb-6 uppercase leading-tight">
              The CSM Toolkit
            </h2>
            <p className="text-lg text-slate-600 font-sans leading-relaxed mb-12 max-w-2xl">
              Download sanitized versions of my most impactful day-to-day artifacts. These templates represent my core methodology for engaging executives and accelerating value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artifacts.map((artifact, idx) => (
                <div key={idx} className="pro-card bg-white border border-slate-200 p-8 flex flex-col h-full hover:border-blue-500 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center mb-6">
                    {artifact.icon}
                  </div>
                  <h3 className="text-xl font-sans font-bold text-slate-900 mb-3">
                    {artifact.title}
                  </h3>
                  <p className="text-sm font-sans text-slate-600 leading-relaxed flex-grow mb-8">
                    {artifact.description}
                  </p>
                  
                  {/* Download Button */}
                  <a 
                    href={artifact.fileUrl || "#"} 
                    download={!!artifact.fileUrl}
                    target={artifact.fileUrl ? "_blank" : undefined}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all mt-auto rounded-sm ${artifact.fileUrl ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    {artifact.fileUrl ? "Download Artifact" : "Coming Soon"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
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
          <div className="flex flex-col items-center md:items-end gap-4 text-xs font-sans text-gray-400">
            <Link href="/" className="hover:text-blue-600 underline uppercase">← Back to Portfolio</Link>
            <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
