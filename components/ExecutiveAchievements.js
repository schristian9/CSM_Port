"use client";

import React from "react";

export default function ExecutiveAchievements() {
  const achievements = [
    {
      title: "Global Expansion",
      description: "Expanding digital footprints across North America, Canada, and into global markets.",
      impact: "Drives top-line revenue growth, expands Total Addressable Market (TAM) by tapping into new regions, and increases global market share.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: "Healthcare Automation",
      description: "Streamlined HIPAA-compliant operational workflows and manual reporting processes across complex healthcare environments.",
      impact: "Eliminated administrative overhead, reduced clinical lead-processing time by 50%, and ensured 100% regulatory compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: "Account Expansion",
      description: "Identified strategic cross-hub and tier upgrade pathways by aligning product capabilities with evolving client growth milestones.",
      impact: "Boosted Net Retention Rate (NRR) by 15% and unlocked net-new expansion ARR through structured, value-led seat and module additions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      )
    },
    {
      title: "Data-Based Analysis",
      description: "Leveraged product telemetry, account health scoring, and usage trends to deliver actionable performance insights during QBRs.",
      impact: "Replaced manual reporting, increased executive buy-in by 9%, and surfaced hidden workflow bottlenecks before they impacted retention.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "AI-Focused Innovation",
      description: "Integrated smart automation and predictive analytics tools to modernize legacy user workflows and drive intelligent decision-making.",
      impact: "Accelerated user task completion, increased daily active usage, and positioned the brand as an innovative long-term partner.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" y1="8" x2="19" y2="14"></line>
          <line x1="22" y1="11" x2="16" y2="11"></line>
        </svg>
      )
    },
    {
      title: "Proactive Approach",
      description: "Established an early-warning retention framework to identify drop-offs in engagement long before contract renewal windows.",
      impact: "Mitigated downsell and churn risk by 17%, protected core recurring revenue, and shifted customer relationships from reactive to strategic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
        <div className="lg:w-1/2">
          <div className="pro-badge mb-4">IMPACT</div>
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight font-black text-slate-900 leading-tight">
            Achievements
          </h2>
        </div>
        <div className="lg:w-1/2 lg:pt-8">
          <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-xl leading-relaxed">
            Delivering measurable value across time-to-value, renewal retention, revenue expansion, usage analytics, and customer innovation.
          </p>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <div key={idx} className="pro-card bg-white p-8 flex flex-col h-full hover:shadow-lg transition-all border border-slate-200">
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-6 shrink-0 border border-slate-200">
              {item.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-sans font-black text-slate-900 tracking-tight mb-3">
              {item.title}
            </h3>
            <p className="text-base font-sans text-slate-600 leading-relaxed mb-6 flex-grow">
              {item.description}
            </p>

            {/* Impact Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 shrink-0">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                <span className="font-sans text-xs tracking-widest font-bold uppercase text-blue-600">BUSINESS IMPACT</span>
              </div>
              <p className="text-sm font-sans text-slate-900 font-semibold leading-relaxed">
                {item.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
