"use client";

import { useState } from "react";

export default function Playbooks() {
  const [activePlaybook, setActivePlaybook] = useState(0);

  const playbooks = [
    {
      title: "Risk De-escalation & Churn Rescue",
      problem: "Enterprise client has -35% drop in product adoption and a critical $250k renewal in 90 days.",
      metric: "100% Account Saved & Expanded",
      steps: [
        { name: "Detect & Alert", desc: "Automated trigger spots steep decline in Daily Active Users (DAU) and sends warning alert." },
        { name: "Audit & Analysis", desc: "Review support logs and identify that their core engineering team is blocked by API latency issues." },
        { name: "Executive Alignment", desc: "Coordinate sync with the client's Engineering Director to acknowledge issues and map out a solution." },
        { name: "Remediation Sprint", desc: "Deploy temporary solution engineers to optimize endpoints; provide a dedicated Slack support channel." },
        { name: "Outcome & Renewal", desc: "Saved the $250k contract. Secured a 2-year renewal with an additional $35k in expanded API credits." }
      ]
    },
    {
      title: "Onboarding Acceleration Engine",
      problem: "Customer onboarding times average 45 days, causing delayed realization of value and early contract risks.",
      metric: "Time-to-Value Reduced from 45 to 14 Days",
      steps: [
        { name: "Segment & Modularize", desc: "Separate complex system integrations into clear, bite-sized self-serve checkpoints." },
        { name: "Automated Triggers", desc: "Implement in-app guidance checklist and auto-reminders for missing integration steps." },
        { name: "High-Touch Intervention", desc: "Re-focus CSM live onboarding hours exclusively on resolving architectural blockers." },
        { name: "Champion Feedback", desc: "Provide real-time progress reports to customer executives to maintain alignment." },
        { name: "Outcome achieved", desc: "Sped up onboarding by 68%. Early 90-day churn reduced by 40% globally." }
      ]
    },
    {
      title: "NRR Growth & Whitespace Expansion",
      problem: "Accounts are healthy and stable (100% GRR) but stagnating. Missing opportunities for cross-sell/upsells.",
      metric: "+$420K Expanded ARR Generated",
      steps: [
        { name: "Whitespace Analysis", desc: "Evaluate product adoption patterns to identify accounts hitting usage caps or requiring advanced features." },
        { name: "Executive Business Reviews", desc: "Host QBRs aligning product roadmap upgrades directly with customer growth goals." },
        { name: "Proof of Concept (PoC)", desc: "Spin up free 14-day sandboxes of premium features (SSO, Advanced RBAC, custom logging)." },
        { name: "Joint Commercial Planning", desc: "Work with account sales representatives to structure co-terminated add-on agreements." },
        { name: "Expansion Complete", desc: "Closed 12 accounts with expansion values averaging +22% ARR increase per account." }
      ]
    }
  ];

  return (
    <section id="playbooks" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="pro-badge mb-3">CSM STRATEGY PLAYBOOKS</div>
          <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
            Tactical Execution Playbooks
          </h3>
        </div>
        <p className="text-sm font-sans text-blue-600 max-w-xs md:text-right uppercase">
          ✦ Click a playbook to see the exact tactical step-by-step resolution.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {playbooks.map((pb, idx) => (
          <button
            key={idx}
            onClick={() => setActivePlaybook(idx)}
            className={`px-5 py-3 border border-slate-200 font-sans tracking-tight font-bold uppercase text-xs tracking-wider transition-all ${
              activePlaybook === idx
                ? "bg-slate-50 text-white shadow-sm hover:shadow-md"
                : "bg-white text-slate-900 hover:bg-slate-50 shadow-sm hover:shadow-md"
            }`}
          >
            {pb.title}
          </button>
        ))}
      </div>

      {/* Playbook Framework Box */}
      <div className="pro-card bg-slate-50 p-8 relative overflow-hidden">
        {/* Subtle grids */}
        

        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span />
            <span className="pro-badge bg-slate-900 text-white">{playbooks[activePlaybook].metric}</span>
          </div>
          <h4 className="font-sans tracking-tight font-black text-xl md:text-2xl text-slate-900 uppercase">
            Scenario: {playbooks[activePlaybook].title}
          </h4>
          <p className="text-sm text-slate-900 mt-2 font-sans">
            <strong className="text-blue-600">Problem Statement:</strong> <span className="text-blue-600 font-semibold">{playbooks[activePlaybook].problem}</span>
          </p>
        </div>

        {/* Process Flow Map */}
        <div className="relative mt-8">
          {/* Vertical line connector */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-900 border-dashed border-r"></div>

          <div className="space-y-8">
            {playbooks[activePlaybook].steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start relative z-10">
                {/* Flow Step Number Circle */}
                <div className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-sans tracking-tight font-black text-lg shrink-0 ${
                  idx === playbooks[activePlaybook].steps.length - 1
                    ? "bg-slate-50 text-white"
                    : "bg-slate-50 text-slate-900"
                }`}>
                  0{idx + 1}
                </div>

                <div className="bg-white border border-slate-200 p-4 flex-1 shadow-sm hover:shadow-md">
                  <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600">
                    {step.name}
                  </h5>
                  <p className="text-lg text-slate-900 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
