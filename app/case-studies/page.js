"use client";

import Masthead from "@/components/Masthead";
import Link from "next/link";
import { useState } from "react";

export default function CaseStudies() {
  // We manage the toggle state for each case study independently
  const [activeTab, setActiveTab] = useState({
    healthcare: "after",
    turnaround: "after",
    expansion: "after",
    aiAdoption: "after",
  });

  const handleToggle = (study, tab) => {
    setActiveTab(prev => ({ ...prev, [study]: tab }));
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-50 selection:text-white relative bg-slate-50">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full pb-24">
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="pro-badge mb-4">IMPACT ARCHIVE</div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-slate-900 leading-tight uppercase mb-6">
              Case <span className="text-blue-600">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-slate-600 leading-relaxed font-semibold max-w-3xl">
              Interactive breakdowns of how I transform chaotic legacy workflows into streamlined, high-ROI systems through strategic alignment and data-driven execution.
            </p>
          </div>
        </section>

        {/* Case Study 1: Healthcare */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
              01. Enterprise Healthcare Automation
            </h2>
            <p className="text-slate-500 font-sans mt-2 uppercase tracking-widest text-xs font-bold">
              INDUSTRY: HEALTHCARE TECH | FOCUS: WORKFLOW OPTIMIZATION
            </p>
          </div>

          <div className="pro-card bg-white border border-slate-200 p-6 md:p-10">
            {/* Interactive Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-lg w-full max-w-xs mb-8 border border-slate-200">
              <button 
                onClick={() => handleToggle('healthcare', 'before')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.healthcare === 'before' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Before (Chaos)
              </button>
              <button 
                onClick={() => handleToggle('healthcare', 'after')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.healthcare === 'after' ? 'bg-blue-600 shadow-sm text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                After (Resolution)
              </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[250px]">
              {activeTab.healthcare === 'before' ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    The Legacy Challenge
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Manual reporting processes causing severe administrative bottlenecks across 15+ clinical hubs.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Fragmented data silos making it impossible to measure actual clinical adoption rates.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      High risk of non-compliance due to disjointed HIPAA data handling.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    The Strategic Intervention
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Deployed automated product telemetry to capture unified account health scoring across all hubs.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Streamlined cross-departmental workflows, enforcing 100% HIPAA-compliant data pipelines.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Established executive QBRs to present actionable performance insights directly to C-suite stakeholders.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* ROI Metric Box */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 shrink-0">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="font-sans text-xs tracking-widest font-bold uppercase text-blue-600">MEASURABLE ROI</span>
                  </div>
                  <p className="text-sm font-sans text-slate-900 font-semibold max-w-md leading-relaxed">
                    Eliminated administrative overhead and ensured 100% regulatory compliance.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="text-4xl font-black font-sans text-blue-600">-50%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Lead-Processing Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2: Turnaround */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
              02. At-Risk Account Turnaround
            </h2>
            <p className="text-slate-500 font-sans mt-2 uppercase tracking-widest text-xs font-bold">
              INDUSTRY: ENTERPRISE SAAS | FOCUS: CHURN MITIGATION & EXPANSION
            </p>
          </div>

          <div className="pro-card bg-white border border-slate-200 p-6 md:p-10">
            {/* Interactive Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-lg w-full max-w-xs mb-8 border border-slate-200">
              <button 
                onClick={() => handleToggle('turnaround', 'before')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.turnaround === 'before' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Before (Chaos)
              </button>
              <button 
                onClick={() => handleToggle('turnaround', 'after')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.turnaround === 'after' ? 'bg-blue-600 shadow-sm text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                After (Resolution)
              </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[250px]">
              {activeTab.turnaround === 'before' ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    The Legacy Challenge
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Client engagement dropped significantly 6 months prior to contract renewal window.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Executive sponsors were completely disconnected from the value realization process.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      High risk of immediate churn due to hidden workflow bottlenecks.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    The Strategic Intervention
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Implemented an early-warning retention framework to proactively surface telemetry drop-offs.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Conducted an internal war room with Product teams to resolve the specific workflow roadblocks.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Re-engaged executive sponsors with a targeted ROI analysis, shifting the relationship back to a strategic partnership.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* ROI Metric Box */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-600 shrink-0">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="font-sans text-xs tracking-widest font-bold uppercase text-emerald-600">MEASURABLE ROI</span>
                  </div>
                  <p className="text-sm font-sans text-slate-900 font-semibold max-w-md leading-relaxed">
                    Successfully mitigated imminent downsell risk and actually unlocked net-new expansion ARR through cross-hub strategic alignment.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="text-4xl font-black font-sans text-emerald-600">+15%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Net Retention Rate (NRR)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 3: Global Expansion */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
              03. Global Market Expansion
            </h2>
            <p className="text-slate-500 font-sans mt-2 uppercase tracking-widest text-xs font-bold">
              INDUSTRY: B2B SOFTWARE | FOCUS: REVENUE EXPANSION & SCALING
            </p>
          </div>

          <div className="pro-card bg-white border border-slate-200 p-6 md:p-10">
            {/* Interactive Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-lg w-full max-w-xs mb-8 border border-slate-200">
              <button 
                onClick={() => handleToggle('expansion', 'before')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.expansion === 'before' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Before (Chaos)
              </button>
              <button 
                onClick={() => handleToggle('expansion', 'after')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.expansion === 'after' ? 'bg-blue-600 shadow-sm text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                After (Resolution)
              </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[250px]">
              {activeTab.expansion === 'before' ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    The Legacy Challenge
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Stagnant regional growth with a highly fragmented, localized deployment strategy.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Inconsistent product adoption across newly launched international hubs (NAMER & EMEA).
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Lack of a unified, scalable playbook for onboarding global enterprise clients.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    The Strategic Intervention
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Designed and executed a unified global rollout playbook standardizing implementation across borders.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Aligned product capabilities with specific regional compliance and workflow requirements.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Trained cross-functional regional teams to maintain a singular, high-quality customer experience.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* ROI Metric Box */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-600 shrink-0">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="font-sans text-xs tracking-widest font-bold uppercase text-blue-600">MEASURABLE ROI</span>
                  </div>
                  <p className="text-sm font-sans text-slate-900 font-semibold max-w-md leading-relaxed">
                    Successfully expanded the Total Addressable Market (TAM) and drove significant top-line revenue growth across new geographic zones.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="text-4xl font-black font-sans text-blue-600">+22%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Global Revenue Expansion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 4: AI Platform Adoption */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
              04. AI-Focused Innovation & Adoption
            </h2>
            <p className="text-slate-500 font-sans mt-2 uppercase tracking-widest text-xs font-bold">
              INDUSTRY: EMERGING TECH | FOCUS: PRODUCT ADOPTION & CHANGE MANAGEMENT
            </p>
          </div>

          <div className="pro-card bg-white border border-slate-200 p-6 md:p-10">
            {/* Interactive Toggle */}
            <div className="flex bg-slate-100 p-1 rounded-lg w-full max-w-xs mb-8 border border-slate-200">
              <button 
                onClick={() => handleToggle('aiAdoption', 'before')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.aiAdoption === 'before' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Before (Chaos)
              </button>
              <button 
                onClick={() => handleToggle('aiAdoption', 'after')}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${activeTab.aiAdoption === 'after' ? 'bg-blue-600 shadow-sm text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                After (Resolution)
              </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[250px]">
              {activeTab.aiAdoption === 'before' ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    The Legacy Challenge
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      End-users highly resistant to adopting newly launched, complex AI and predictive automation tools.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Users defaulting back to slow, legacy manual workflows, nullifying the product's core value proposition.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-rose-500 font-black">×</span>
                      Lack of contextual enablement materials directly mapping AI features to daily user pain points.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl font-sans font-black text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    The Strategic Intervention
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Executed targeted change management workshops proving immediate time-savings for specific end-user roles.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Integrated smart automation triggers natively into their existing, comfortable workflow paths.
                    </li>
                    <li className="flex gap-3 text-slate-600 font-sans">
                      <span className="text-emerald-500 font-black">✓</span>
                      Launched a champion-enablement program to foster organic peer-to-peer AI adoption.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* ROI Metric Box */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-600 shrink-0">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="font-sans text-xs tracking-widest font-bold uppercase text-emerald-600">MEASURABLE ROI</span>
                  </div>
                  <p className="text-sm font-sans text-slate-900 font-semibold max-w-md leading-relaxed">
                    Accelerated user task completion and successfully positioned the product as an indispensable, innovative long-term partner.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="text-4xl font-black font-sans text-emerald-600">+40%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Daily Active AI Usage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t-2 border-slate-200 bg-white text-slate-500 py-12 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-sans tracking-tight font-black uppercase leading-none text-slate-900">
              SARLINSON CHRISTIAN
            </h2>
            <p className="text-xs font-sans tracking-widest text-blue-600 mt-1.5 uppercase">
              Technical Success Manager & Onboarding Specialist
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 text-xs font-sans text-gray-400">
            <Link href="/" className="hover:text-blue-600 underline uppercase">← Back to Portfolio</Link>
            <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
