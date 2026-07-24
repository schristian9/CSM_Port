"use client";

export default function KpiCollage() {
  const kpis = [
    {
      metric: "98.5%",
      label: "Gross Retention Rate (GRR)",
      desc: "Consistently maintaining primary contract value year-over-year, outperforming SaaS industry standards.",
      tag: "[ CORE RETENTION ]",
      topRight: "STABLE | RETENTION",
      bottomLeft: "OUTCOME ACCELERATED",
      bottomRight: "VERIFIED METRIC",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      )
    },
    {
      metric: "124%",
      label: "Net Revenue Retention (NRR)",
      desc: "Unlocking expansion revenue through proactive cross-selling, feature adoption, and executive relationship building.",
      tag: "[ REVENUE EXPANSION ]",
      topRight: "GROWTH | EXPANSION",
      bottomLeft: "REVENUE MULTIPLIER",
      bottomRight: "AUDITED METRIC",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      )
    },
    {
      metric: "< 3%",
      label: "Annual Gross Churn",
      desc: "Keeping churn minimal using early-warning product adoption scoring and health check frameworks.",
      tag: "[ CHURN MITIGATION ]",
      topRight: "RISK | MITIGATION",
      bottomLeft: "CHURN REDUCED",
      bottomRight: "Q1-Q4 VALIDATED",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
      )
    },
    {
      metric: "$12M+",
      label: "ARR Portfolio Managed",
      desc: "Directly overseeing enterprise accounts, guiding scaling operations, and managing executive steering committees.",
      tag: "[ ACCOUNT SCALE ]",
      topRight: "SCALE | MANAGEMENT",
      bottomLeft: "PORTFOLIO GROWTH",
      bottomRight: "EXECUTIVE VERIFIED",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      )
    }
  ];

  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="pro-badge mb-3">EXECUTIVE DASHBOARD</div>
          <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
            Proven Business Impact
          </h3>
        </div>
        <p className="text-sm font-sans text-blue-600 max-w-xs md:text-right uppercase font-bold">
          ✦ Measurable results in retention & expansion.
        </p>
      </div>

      {/* Perfectly Aligned 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="pro-card bg-white border border-slate-200 p-8 flex flex-col justify-between h-full hover:border-blue-500 hover:shadow-lg transition-all group relative overflow-hidden"
          >            
            <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6 relative z-10">
              <span className="font-sans text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                {kpi.tag}
              </span>
              <span className="text-[10px] font-sans uppercase font-bold text-slate-400 tracking-wider">
                {kpi.topRight}
              </span>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <div className="text-6xl lg:text-7xl font-sans tracking-tighter font-black text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  {kpi.metric}
                </div>
                <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                  {kpi.icon}
                </div>
              </div>
              <h4 className="font-sans text-lg font-black text-slate-900 uppercase tracking-tight mb-3">
                {kpi.label}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-md">
                {kpi.desc}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-100 text-[10px] font-sans font-bold tracking-widest uppercase text-slate-400">
              <span>{kpi.bottomLeft}</span>
              <span>{kpi.bottomRight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
