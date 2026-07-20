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
      metrics: ["75+ Accounts", "98% Completion", "+46% Consistency"],
      bulletPoints: [
        "Led end-to-end onboarding and implementation of 75+ customer accounts, achieving 98% onboarding completion, accelerating customer adoption, and delivering exceptional first experiences across healthcare technology platforms.",
        "Created, iterated, validated, and optimized customer success processes through continuous testing and real-world feedback, improving rollout consistency by 46% while supporting fast-paced commercial growth initiatives.",
        "Analysed product usage, adoption metrics, customer feedback, and AI feature engagement, producing monthly stakeholder reports that increased active platform utilization by 38%."
      ]
    },
    {
      company: "Meditab Software",
      role: "Senior Product Deployment Analyst",
      period: "2019 - 2025",
      focus: "Clinical Training & Onboarding Acceleration",
      metrics: ["500+ Clinicians Trained", "+22% Adoption", "93% CSAT Score"],
      bulletPoints: [
        "Delivered engaging, hands-on product training for 500+ clinicians, practice managers, receptionists, and operational teams, increasing platform adoption by 22% while building trusted stakeholder relationships.",
        "Collaborated with Executives, Key Account Managers, Sales, Product, and customer stakeholders to resolve onboarding challenges, reducing implementation timelines by 35% and improving customer satisfaction (CSAT) to 93%.",
        "Built scalable onboarding playbooks, implementation frameworks, and standard operating procedures from scratch, decreasing onboarding effort by 40% while supporting rapid expansion.",
        "Partnered cross-functionally to support expansion initiatives, implementation readiness, customer success strategy, post-sales engagement, and continuous process improvement, contributing to 30% year-over-year customer growth."
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
    <section id="timeline" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#364C84]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="zine-badge mb-3">EVOLUTION TIMELINE</div>
          <h3 className="text-3xl md:text-5xl font-display font-black text-[#364C84] uppercase leading-none">
            Strategic Career Path
          </h3>
        </div>
        <div className="text-sm font-mono text-[#95B1EE] max-w-xs md:text-right uppercase font-semibold">
          <Link href="/about" className="underline hover:text-[#364C84] block mb-1">Explore Visual Growth Page →</Link>
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
              className={`zine-card text-left p-6 flex flex-col justify-between transition-all ${
                activeStep === idx
                  ? "bg-[#364C84] text-white -translate-x-1 -translate-y-1 shadow-[6px_6px_0px_0px_rgba(200,92,64,1)]"
                  : "bg-[#E7F1A8] text-[#364C84] hover:bg-[#F5F2EB]"
              }`}
            >
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <span>PHASE 0{steps.length - idx}</span>
                <span className={activeStep === idx ? "text-[#95B1EE] font-bold" : "text-gray-500"}>
                  {step.period}
                </span>
              </div>
              <h4 className="font-display font-black text-lg md:text-xl uppercase tracking-tight leading-tight">
                {step.role}
              </h4>
              <p className={`text-xs mt-1 font-mono uppercase ${activeStep === idx ? "text-gray-300" : "text-gray-500"}`}>
                @ {step.company}
              </p>
            </button>
          ))}
        </div>

        {/* Right Side: Detailed Details Card */}
        <div className="lg:col-span-8 zine-card bg-[#E7F1A8] p-8 md:p-10 relative min-h-[400px]">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 grid-bg opacity-15 pointer-events-none"></div>

          <div className="flex flex-wrap justify-between items-start border-b border-[#364C84] pb-6 mb-6 gap-4">
            <div>
              <span className="font-mono text-xs text-[#95B1EE] uppercase font-bold tracking-widest">
                {steps[activeStep].period}
              </span>
              <h4 className="font-display font-black text-2xl md:text-3xl text-[#364C84] uppercase mt-1">
                {steps[activeStep].role}
              </h4>
              <p className="font-mono text-sm text-gray-500 mt-0.5">
                {steps[activeStep].company} — {steps[activeStep].focus}
              </p>
            </div>
            
            {/* Quick KPI Badges */}
            <div className="flex gap-2 flex-wrap">
              {steps[activeStep].metrics.map((metric, i) => (
                <span key={i} className="zine-badge bg-[#95B1EE] text-white">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Achievement List */}
          <ul className="space-y-4 font-sans text-lg text-[#364C84] leading-relaxed">
            {steps[activeStep].bulletPoints.map((bp, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="inline-block mt-2 w-2 h-2 bg-[#95B1EE] shrink-0"></span>
                <span>{bp}</span>
              </li>
            ))}
          </ul>

          {/* Card footer notes */}
          <div className="border-t border-[#364C84] mt-10 pt-6 flex justify-between items-center text-xs font-mono opacity-50">
            <span>[ FOCUS ID: CSM_{activeStep + 1} ]</span>
            <span>VERIFIABLE REFERENCE AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
