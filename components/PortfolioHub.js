"use client";

import Link from "next/link";

export default function PortfolioHub() {
  const aiCompetencies = [
    {
      title: "LLM Workflow Integration",
      desc: "Embedding large language models into daily user workflows to automate repetitive data synthesis without overwhelming end-users.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Predictive Analytics Adoption",
      desc: "Driving change management for predictive health scoring and risk mitigation tools, shifting teams from reactive to proactive.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      title: "AI Change Management",
      desc: "Bridging the gap between highly technical AI capabilities and non-technical stakeholders to ensure seamless go-live experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="portfolio-hub" className="">
      
      {/* PART 1: Enterprise AI Expertise */}
      <div className="bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-24 border-t border-[var(--color-border)]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="pro-badge mb-4">Core Competencies</span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-h1)] tracking-tight leading-tight">
                Architecting <span className="text-[var(--color-accent)]">growth structures</span>.
              </h2>
            </div>
          </div>

          {/* 3-Column Hub */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Platform Playbooks",
                description: "Standardized adoption frameworks driving repeatable net retention.",
                link: "/playbooks"
              },
              {
                title: "User Guides",
                description: "Technical documentation translating complex workflows for clinical users.",
                link: "/user-guide"
              },
              {
                title: "Impact Case Studies",
                description: "Deep dives into enterprise expansion and churn prevention.",
                link: "/case-studies"
              }
            ].map((item, idx) => (
              <div key={idx} className="pro-card bg-[var(--color-surface)] p-8 flex flex-col border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[var(--color-text-h1)] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-8 leading-relaxed flex-1">{item.description}</p>
                <Link href={item.link} className="inline-flex items-center text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest hover:text-[var(--color-text-h1)] transition-colors mt-auto group">
                  Explore Hub 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: The Routing Hub */}
      <div className="bg-[var(--color-surface)] relative overflow-hidden">
        <div className="noise-overlay noise-overlay-strong" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
          
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-display tracking-tight font-black text-[var(--color-text-h1)] leading-tight uppercase mb-4">
              Explore The <span className="text-[var(--color-accent)]">Frameworks</span>
            </h2>
            <p className="text-lg font-sans text-[var(--color-text-muted)] font-semibold">
              Dive into the actual methodologies, operating models, and case studies I use to secure executive alignment and drive net retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Case Studies */}
            <div className="pro-card bg-slate-50 p-8 flex flex-col border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-black text-[var(--color-text-h1)] uppercase tracking-tight mb-3">Interactive Case Studies</h3>
              <p className="text-sm font-sans text-[var(--color-text-muted)] leading-relaxed flex-grow mb-8">
                See how I drove 40% Daily Active AI Usage and expanded global ARR through targeted rollout strategies.
              </p>
              <Link href="/case-studies" className="pro-btn gap-2 px-6 py-3 text-xs tracking-widest uppercase mt-auto w-full">
                View Impact Archive →
              </Link>
            </div>

            {/* Card 2: Playbooks */}
            <div className="pro-card bg-slate-50 p-8 flex flex-col border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-black text-[var(--color-text-h1)] uppercase tracking-tight mb-3">The CSM Toolkit</h3>
              <p className="text-sm font-sans text-[var(--color-text-muted)] leading-relaxed flex-grow mb-8">
                Download my actual day-to-day frameworks for recovering At-Risk Accounts and structuring Executive QBRs.
              </p>
              <Link href="/playbooks" className="pro-btn gap-2 px-6 py-3 text-xs tracking-widest uppercase mt-auto w-full">
                Access Playbooks →
              </Link>
            </div>

            {/* Card 3: User Guide */}
            <div className="pro-card bg-slate-50 p-8 flex flex-col border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-black text-[var(--color-text-h1)] uppercase tracking-tight mb-3">Operating Manual</h3>
              <p className="text-sm font-sans text-[var(--color-text-muted)] leading-relaxed flex-grow mb-8">
                Read my transparent guide outlining cross-functional expectations, escalation management, and core values.
              </p>
              <Link href="/user-guide" className="pro-btn gap-2 px-6 py-3 text-xs tracking-widest uppercase mt-auto w-full">
                Read User Guide →
              </Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
