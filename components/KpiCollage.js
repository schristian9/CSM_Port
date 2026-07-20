"use client";

export default function KpiCollage() {
  const kpis = [
    {
      metric: "98.5%",
      label: "Gross Retention Rate (GRR)",
      desc: "Consistently maintaining primary contract value year-over-year, outperforming SaaS industry standards.",
      color: "bg-slate-50",
      textColor: "text-slate-900",
      mutedText: "text-slate-500",
      borderColor: "border-slate-200",
      span: "md:col-span-6 lg:col-span-7",
      rotate: "",
      tag: "[ CORE RETENTION ]",
      topRight: "STABLE | RETENTION",
      bottomLeft: "OUTCOME ACCELERATED",
      bottomRight: "VERIFIED METRIC",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 ml-3 -mt-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      )
    },
    {
      metric: "124%",
      label: "Net Revenue Retention (NRR)",
      desc: "Unlocking expansion revenue through proactive cross-selling, feature adoption, and executive relationship building.",
      color: "bg-slate-50",
      textColor: "text-slate-900",
      mutedText: "text-slate-500",
      borderColor: "border-slate-200",
      span: "md:col-span-6 lg:col-span-5",
      rotate: "",
      tag: "[ REVENUE EXPANSION ]",
      topRight: "GROWTH | EXPANSION",
      bottomLeft: "REVENUE MULTIPLIER",
      bottomRight: "AUDITED METRIC",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 ml-3 -mt-2 text-blue-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      )
    },
    {
      metric: "< 3%",
      label: "Annual Gross Churn",
      desc: "Keeping churn minimal using early-warning product adoption scoring and health check-check frameworks.",
      color: "bg-slate-50",
      textColor: "text-slate-900",
      mutedText: "text-slate-500",
      borderColor: "border-slate-200",
      span: "md:col-span-6 lg:col-span-5",
      rotate: "",
      tag: "[ CHURN MITIGATION ]",
      topRight: "RISK | MITIGATION",
      bottomLeft: "CHURN REDUCED",
      bottomRight: "Q1-Q4 VALIDATED",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 ml-3 -mt-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
      )
    },
    {
      metric: "$12M+",
      label: "ARR Portfolio Managed",
      desc: "Directly overseeing enterprise accounts, guiding scaling operations, and managing executive steering committees.",
      color: "bg-slate-50 border-slate-200 border-t-[6px] border-t-blue-600",
      textColor: "text-slate-900",
      mutedText: "text-slate-500",
      borderColor: "border-slate-200",
      span: "md:col-span-6 lg:col-span-7",
      rotate: "",
      tag: "[ ACCOUNT SCALE ]",
      topRight: "SCALE | MANAGEMENT",
      bottomLeft: "PORTFOLIO GROWTH",
      bottomRight: "EXECUTIVE VERIFIED",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 ml-3 -mt-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      )
    }
  ];

  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="pro-badge mb-3">HARD METRICS</div>
          <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
            Proven Business Impact
          </h3>
        </div>
        <p className="text-sm font-sans text-blue-600 max-w-xs md:text-right uppercase">
          ✦ Measurable results in customer retention & portfolio expansion.
        </p>
      </div>

      {/* Grid of collage KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className={`${kpi.span} pro-card ${kpi.color} p-8 flex flex-col justify-between min-h-[220px] transition-transform ${kpi.rotate} relative overflow-hidden`}
          >
            {/* Background design accents */}
            {kpi.bgIcon && kpi.bgIcon}
            
            <div className={`flex justify-between items-start border-b ${kpi.borderColor} pb-4 mb-4 relative z-10`}>
              <span className={`font-sans text-xs font-bold ${kpi.mutedText} uppercase`}>
                {kpi.tag}
              </span>
              <span className={`text-xs font-sans uppercase font-semibold ${kpi.mutedText} tracking-wider opacity-80`}>{kpi.topRight}</span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <div className={`text-5xl md:text-6xl lg:text-7xl font-sans tracking-tight font-black ${kpi.textColor} leading-none`}>
                  {kpi.metric}
                </div>
                {kpi.icon && kpi.icon}
              </div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider mb-2">
                {kpi.label}
              </h4>
              <p className="text-base opacity-90 leading-relaxed font-sans max-w-xl">
                {kpi.desc}
              </p>
            </div>
            
            <div className={`flex justify-between items-center mt-6 pt-4 border-t ${kpi.borderColor} text-[10px] font-sans font-semibold tracking-widest uppercase opacity-70`}>
              <span>{kpi.bottomLeft}</span>
              <span>{kpi.bottomRight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
