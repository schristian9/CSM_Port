"use client";

export default function KpiCollage() {
  const kpis = [
    {
      metric: "98.5%",
      label: "Gross Retention Rate (GRR)",
      desc: "Consistently maintaining primary contract value year-over-year, outperforming SaaS industry standards.",
      color: "bg-slate-50",
      textColor: "text-slate-900",
      span: "md:col-span-6 lg:col-span-7",
      rotate: ""
    },
    {
      metric: "124%",
      label: "Net Revenue Retention (NRR)",
      desc: "Unlocking expansion revenue through proactive cross-selling, feature adoption, and executive relationship building.",
      color: "bg-slate-900 text-white",
      textColor: "text-blue-600",
      span: "md:col-span-6 lg:col-span-5",
      rotate: ""
    },
    {
      metric: "< 3%",
      label: "Annual Gross Churn",
      desc: "Keeping churn minimal using early-warning product adoption scoring and health check-check frameworks.",
      color: "bg-slate-50",
      textColor: "text-slate-900",
      span: "md:col-span-6 lg:col-span-5",
      rotate: ""
    },
    {
      metric: "$12M+",
      label: "ARR Portfolio Managed",
      desc: "Directly overseeing enterprise accounts, guiding scaling operations, and managing executive steering committees.",
      color: "bg-slate-50 border-slate-200 border-t-[6px] border-t-blue-600",
      textColor: "text-slate-900",
      span: "md:col-span-6 lg:col-span-7",
      rotate: ""
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
            
            
            <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-4">
              <span className="font-sans text-xs font-bold text-gray-500 uppercase">
                [ KEY METRIC_0{idx + 1} ]
              </span>
              <span className="text-xs font-sans">STABLE | RETENTION</span>
            </div>

            <div>
              <div className={`text-5xl md:text-6xl lg:text-7xl font-sans tracking-tight font-black tracking-tight ${kpi.textColor} mb-2 leading-none`}>
                {kpi.metric}
              </div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider mb-2">
                {kpi.label}
              </h4>
              <p className="text-base opacity-90 leading-relaxed font-sans max-w-xl">
                {kpi.desc}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-200 text-[10px] font-sans opacity-60">
              <span>OUTCOME ACCELERATED</span>
              <span>VERIFIED METRIC</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
