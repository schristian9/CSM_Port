"use client";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
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
      ),
      fileUrl: "/playbooks/account-health-scorecard.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full pb-24">
        {/* Header Section */}
        <section className="">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="pro-badge mb-4">RESOURCES & METHODOLOGY</div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-[var(--color-text-h1)] leading-tight uppercase mb-6">
              Strategic <span className="text-[var(--color-accent)]">Playbooks</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-[var(--color-text-muted)] leading-relaxed font-semibold max-w-3xl">
              A comprehensive library of the actual frameworks, presentation decks, and operating models I use to drive predictable customer success.
            </p>
          </div>
        </section>

        {/* Existing Interactive Playbooks Component */}
        <div>
          <PlaybooksComponent />
        </div>

        {/* The CSM Toolkit - Downloadable Artifacts */}
        <section className="text-[var(--color-text)] relative overflow-hidden">
          <div className="noise-overlay noise-overlay-strong" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-[var(--color-text-h1)] mb-12 uppercase leading-tight">
              The CSM Toolkit
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] font-sans leading-relaxed mb-12 max-w-2xl">
              Download sanitized versions of my most impactful day-to-day artifacts. These templates represent my core methodology for engaging executives and accelerating value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artifacts.map((artifact, idx) => (
                <div key={idx} className="pro-card bg-[var(--color-surface)] border border-[var(--color-border)] p-8 flex flex-col h-full hover:border-blue-500 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-center mb-6">
                    {artifact.icon}
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[var(--color-text-h1)] mb-3">
                    {artifact.title}
                  </h3>
                  <p className="text-sm font-sans text-[var(--color-text-muted)] leading-relaxed flex-grow mb-8">
                    {artifact.description}
                  </p>
                  
                  {/* Download Button */}
                  {artifact.fileUrl ? (
                    <a 
                      href={artifact.fileUrl} 
                      download
                      target="_blank"
                      className="pro-btn inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-widest uppercase mt-auto w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download Artifact
                    </a>
                  ) : (
                    <span 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase mt-auto rounded-sm bg-slate-200 text-slate-400 cursor-not-allowed w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter backToPortfolio />
    </div>
  );
}
