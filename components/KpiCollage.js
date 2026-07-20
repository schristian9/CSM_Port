"use client";

export default function KpiCollage() {
  const kpis = [
    {
      metric: "98.5%",
      label: "Gross Retention Rate (GRR)",
      desc: "Consistently maintaining primary contract value year-over-year, outperforming SaaS industry standards.",
      color: "bg-[#f6d6db]",
      textColor: "text-[#1f1e19]",
      span: "md:col-span-6 lg:col-span-7",
      rotate: "hover:rotate-1"
    },
    {
      metric: "124%",
      label: "Net Revenue Retention (NRR)",
      desc: "Unlocking expansion revenue through proactive cross-selling, feature adoption, and executive relationship building.",
      color: "bg-[#1f1e19] text-white",
      textColor: "text-[#d6d0c2]",
      span: "md:col-span-6 lg:col-span-5",
      rotate: "hover:-rotate-1"
    },
    {
      metric: "< 3%",
      label: "Annual Gross Churn",
      desc: "Keeping churn minimal using early-warning product adoption scoring and health check-check frameworks.",
      color: "bg-[#f6d6db]",
      textColor: "text-[#1f1e19]",
      span: "md:col-span-6 lg:col-span-5",
      rotate: "hover:rotate-1"
    },
    {
      metric: "$12M+",
      label: "ARR Portfolio Managed",
      desc: "Directly overseeing enterprise accounts, guiding scaling operations, and managing executive steering committees.",
      color: "bg-[#f6d6db] border-[#d6d0c2] border-t-8",
      textColor: "text-[#1f1e19]",
      span: "md:col-span-6 lg:col-span-7",
      rotate: "hover:-rotate-1"
    }
  ];

  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#1f1e19]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="zine-badge mb-3">HARD METRICS</div>
          <h3 className="text-3xl md:text-5xl font-display font-black text-[#1f1e19] uppercase leading-none">
            Proven Business Impact
          </h3>
        </div>
        <p className="text-sm font-mono text-[#d6d0c2] max-w-xs md:text-right uppercase">
          ✦ Measurable results in customer retention & portfolio expansion.
        </p>
      </div>

      {/* Grid of collage KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className={`${kpi.span} zine-card ${kpi.color} p-8 flex flex-col justify-between min-h-[220px] transition-transform ${kpi.rotate} relative overflow-hidden`}
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 grid-bg opacity-15 pointer-events-none"></div>
            
            <div className="flex justify-between items-start border-b border-[#1f1e19] pb-4 mb-4">
              <span className="font-mono text-xs font-bold text-gray-500 uppercase">
                [ KEY METRIC_0{idx + 1} ]
              </span>
              <span className="text-xs font-mono">STABLE | RETENTION</span>
            </div>

            <div>
              <div className={`text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight ${kpi.textColor} mb-2 leading-none`}>
                {kpi.metric}
              </div>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider mb-2">
                {kpi.label}
              </h4>
              <p className="text-base opacity-90 leading-relaxed font-sans max-w-xl">
                {kpi.desc}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#1f1e19]/20 text-[10px] font-mono opacity-60">
              <span>OUTCOME ACCELERATED</span>
              <span>VERIFIED METRIC</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
