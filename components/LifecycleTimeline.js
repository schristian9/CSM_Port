"use client";

import { useState } from "react";
import Link from "next/link";

export default function LifecycleTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      company: "SeekThem",
      role: "Senior Technical CSM",
      period: "2025 - 2026",
      focus: "End-to-End Onboarding & Process Optimization",
      metrics: ["122% NRR", "+12% Adoption", "-25% Roadblocks"],
      bulletPoints: [
        "Identified expansion and renewal risks across a key client account and defined mitigation strategies that reduced early-stage issues by 10% and increased product development efficiency by 15%.",
        "Delivered targeted training and optimisation sessions for two B2B clients to boost product adoption, improving overall performance metrics by 12% and reducing operational roadblocks by 25%.",
        "Led Net Revenue Retention (NRR) strategy for a $300K ARR segment, designing playbooks for risk and growth, and elevating NRR from 108% to 122% over four quarters."
      ]
    },
    {
      company: "Meditab Software",
      role: "Senior Product Deployment Analyst",
      period: "2019 - 2025",
      focus: "Clinical Training & Onboarding Acceleration",
      metrics: ["+40% Upgrade Ease", "+15% Efficiency", "+12-point NPS"],
      bulletPoints: [
        "Created project plans and scope documents for an upgrade automation initiative, coordinating delivery and training to ease system upgrades by 40%.",
        "Streamlined the training process through proactive communication and tailored sessions, improving training efficiency by 15% and reducing confusion during go-live.",
        "Designed Customer Success playbooks and account planning frameworks that reduced strategic account review preparation time by 38% across the department.",
        "Championed Voice of Customer programs across a $2.0M ARR base, consolidating feedback into Product insights that drove three major releases and a 12-point NPS improvement."
      ]
    },
    {
      company: "Meditab Software",
      role: "Interface Analyst",
      period: "2019",
      focus: "AI Integration & Feature Adoption",
      metrics: ["+55% Feature Use", "-31% Support Requests", "AI Tools Champion"],
      bulletPoints: [
        "Championed customer adoption of innovative AI tooling by demonstrating workflow improvements and patient care benefits, increasing feature utilization by 55% and reducing user support requests by 31%."
      ]
    },
    {
      company: "DrCatalyst",
      role: "Virtual Administrative Assistant",
      period: "2018",
      focus: "Workflow Optimization & Operational Support",
      metrics: ["-20% Bottlenecks", "Data Prep Optimisation", "Process Flow"],
      bulletPoints: [
        "Eliminated administrative bottlenecks by 20% to support smoother client operations by optimizing data preparation workflows and streamlining inter-departmental communication."
      ]
    }
  ];

  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="pro-badge mb-3">EVOLUTION TIMELINE</div>
          <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
            Strategic Career Path
          </h3>
        </div>
        <div className="text-sm font-sans text-blue-600 max-w-xs md:text-right uppercase font-semibold">
          <Link href="/about" className="underline hover:text-slate-900 block mb-1">Explore Visual Growth Page →</Link>
          <span className="text-gray-400">✦ Click on a phase to explore achievements and metrics.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Navigation Column */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`pro-card text-left p-6 flex flex-col justify-between transition-all ${
                activeStep === idx
                  ? "!bg-blue-600 text-white !border-blue-600 shadow-md"
                  : "text-slate-900 hover:!bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-center mb-2 font-sans text-xs">
                <span>PHASE 0{steps.length - idx}</span>
                <span className={activeStep === idx ? "text-blue-600 font-bold" : "text-gray-500"}>
                  {step.period}
                </span>
              </div>
              <h4 className="font-sans tracking-tight font-black text-lg md:text-xl uppercase tracking-tight leading-tight">
                {step.role}
              </h4>
              <p className={`text-xs mt-1 font-sans uppercase ${activeStep === idx ? "text-blue-200" : "text-gray-500"}`}>
                @ {step.company}
              </p>
            </button>
          ))}
        </div>

        {/* Right Side: Detailed Details Card */}
        <div className="lg:col-span-8 pro-card bg-slate-50 p-8 md:p-10 relative min-h-[400px]">
          {/* Subtle decoration */}
          

          <div className="flex flex-wrap justify-between items-start border-b border-slate-200 pb-6 mb-6 gap-4">
            <div>
              <span className="font-sans text-xs text-blue-600 uppercase font-bold tracking-widest">
                {steps[activeStep].period}
              </span>
              <h4 className="font-sans tracking-tight font-black text-2xl md:text-3xl text-slate-900 uppercase mt-1">
                {steps[activeStep].role}
              </h4>
              <p className="font-sans text-sm text-gray-500 mt-0.5">
                {steps[activeStep].company} — {steps[activeStep].focus}
              </p>
            </div>
            
            {/* Quick KPI Badges */}
            <div className="flex gap-2 flex-wrap">
              {steps[activeStep].metrics.map((metric, i) => (
                <span key={i} className="pro-badge bg-blue-50 text-blue-600 border border-blue-200">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Achievement List */}
          <ul className="space-y-4 font-sans text-lg text-slate-900 leading-relaxed">
            {steps[activeStep].bulletPoints.map((bp, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="inline-block mt-2 w-2 h-2 bg-blue-600 shrink-0"></span>
                <span>{bp}</span>
              </li>
            ))}
          </ul>


        </div>
      </div>
    </section>
  );
}
