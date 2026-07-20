"use client";

import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Manifesto Headline */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-black text-slate-900 tracking-tight uppercase leading-[1.05] mb-6">
          Nobody renews because you <span className="font-sans italic font-normal text-blue-600 lowercase">sold</span> well.<br />
          They renew because you <span className="underline decoration-blue-600 decoration-4 underline-offset-4">delivered</span><br />
          and that's the whole job.
        </h2>
        
        <div className="border-l-4 border-slate-200 pl-6 mb-6">
          <p className="text-xl md:text-2xl font-sans tracking-tight font-semibold text-blue-600 leading-tight italic">
            "Adoption, Retention, Expansion, Advocacy are outcomes, not goals. Chase the customer's actual desired result and the rest follows."
          </p>
        </div>

        <p className="text-lg text-slate-900 leading-relaxed max-w-2xl">
          I am <span className="text-blue-600 font-semibold">Sarlinson Christian</span>, a <span className="text-blue-600 font-semibold">Technical Customer Success & Onboarding Manager</span> specializing in AI platform implementations, customer adoption, and healthcare technology rollouts. By building structured onboarding frameworks and optimizing workflows, I drive implementation consistency and measurable business growth.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/about" className="pro-btn px-6 py-3 text-sm tracking-wider uppercase">
            Explore Visual Career Growth
          </Link>
          <Link href="/#copilot" className="pro-card hover:bg-slate-50 px-6 py-3 text-sm tracking-wider uppercase font-sans font-semibold flex items-center gap-2 text-slate-900">
            Ask My AI Copilot <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          </Link>
        </div>
      </div>

      {/* Sleek Dashboard Mockup */}
      <div className="lg:col-span-5 relative w-full h-[400px] md:h-[450px] flex items-center justify-center">
        {/* Decorative Background Blob for modern feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

        {/* Floating SaaS Window */}
        <div className="relative w-full h-full max-h-[380px] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col overflow-hidden z-10 transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2">
          
          {/* macOS-style Window Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">Executive Dashboard</span>
            </div>
            <div className="w-10"></div> {/* Spacer to balance dots */}
          </div>

          {/* Main Image Container */}
          <div className="relative flex-1 bg-slate-100 w-full">
            <Image
              src="/cs_growth_chart.jpg"
              alt="Customer Success executive performance metrics dashboard showing Net Revenue Retention of 124.2%"
              fill
              className="object-cover object-top"
              sizes="(max-w-7xl) 100vw, 50vw"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] pointer-events-none"></div>
          </div>
          
          {/* Clean Footer */}
          <div className="bg-white border-t border-slate-100 px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Revenue Metrics</p>
                <p className="text-[11px] text-slate-500 font-medium">Live NRR Tracking</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5 justify-end uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Validated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
