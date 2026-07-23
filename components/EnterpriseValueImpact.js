"use client";

export default function EnterpriseValueImpact() {
  const valuesTop = [
    {
      title: "Accelerated Time-to-Value (TTV)",
      desc: "Shortening the critical window between AI platform deployment and the customer's first measurable ROI, turning implementations into early renewals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      title: "Change Management & Adoption",
      desc: "Bridging the gap between complex LLM workflows and end-user habit formation to drive daily active usage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Predictive Risk Mitigation",
      desc: "Deploying health telemetry and proactive playbooks to catch churn signals and stabilize at-risk accounts before they impact the bottom line.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    }
  ];

  const valuesBottom = [
    {
      title: "Net Revenue Retention (NRR) Expansion",
      desc: "Moving beyond basic renewals by actively identifying whitespace in existing enterprise accounts, partnering with Sales to drive organic upsells and cross-sells through proven product adoption.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      )
    },
    {
      title: "Operational Scalability",
      desc: "Building the foundational playbooks, onboarding engines, and standard operating procedures that allow Customer Success teams to scale revenue pipelines without linearly scaling headcount.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-16">
          <div className="pro-badge mb-4">COMMERCIAL EXECUTION</div>
          <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 leading-tight uppercase mb-6 max-w-3xl">
            Accelerating <span className="text-blue-600">Enterprise Value</span>
          </h2>
          <p className="text-xl font-sans text-slate-600 leading-relaxed font-semibold max-w-3xl">
            Translating complex AI implementations into measurable revenue growth, adoption velocity, and net retention.
          </p>
        </div>

        {/* 5-Card Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Top Row: 3 Narrow Cards */}
          {valuesTop.map((item, idx) => (
            <div key={idx} className="md:col-span-2 pro-card bg-slate-50 p-8 flex flex-col border border-slate-200 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-sans font-black text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm font-sans text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Bottom Row: 2 Wide Cards */}
          {valuesBottom.map((item, idx) => (
            <div key={idx} className="md:col-span-3 pro-card bg-slate-50 p-8 flex flex-col md:flex-row gap-8 items-start border border-slate-200 hover:border-blue-500 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-sans font-black text-slate-900 tracking-tight mb-3">{item.title}</h3>
                <p className="text-base font-sans text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
