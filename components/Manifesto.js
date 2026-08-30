"use client";

import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Manifesto Headline */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-black text-[var(--color-text-h1)] tracking-tight uppercase leading-[1.05] mb-6">
          Nobody renews because you <span className="italic text-[var(--color-accent)]">sold</span> well.<br />
          They renew because you <span className="underline decoration-[var(--color-accent)] decoration-4 underline-offset-4">delivered</span><br />
          and that's the whole job.
        </h1>
        
        <div className="border-l-4 border-[var(--color-border)] pl-6 mb-6">
          <p className="text-xl md:text-2xl font-sans tracking-tight font-semibold text-[var(--color-accent)] leading-tight italic">
            "Adoption, Retention, Expansion, Advocacy are outcomes, not goals. Chase the customer's actual desired result and the rest follows."
          </p>
        </div>

        <p className="text-lg text-[var(--color-text)] leading-relaxed max-w-2xl">
          I am <span className="text-[var(--color-accent)] font-semibold">Sarlinson Christian</span>, a <span className="text-[var(--color-accent)] font-semibold">Technical Customer Success & Onboarding Manager</span> specializing in AI platform implementations, customer adoption, and healthcare technology rollouts. By building structured onboarding frameworks and optimizing workflows, I drive implementation consistency and measurable business growth.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/about" className="pro-btn px-6 py-3 text-sm tracking-wider uppercase">
            Explore Visual Career Growth
          </Link>

        </div>
      </div>

      {/* Sleek Dashboard Frame */}
      <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[550px] flex items-center justify-center">

        {/* Sharp Editorial Image Frame */}
        <div className="relative w-full h-full lg:max-h-[500px] bg-[var(--color-surface)] border border-[var(--color-text-muted)] flex flex-col overflow-hidden z-10">
          
          {/* macOS-style Window Header */}
          <div className="bg-slate-50 border-b border-[var(--color-border)] px-4 py-3 flex items-center gap-2">
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
              src="/clean-dashboard.jpg"
              alt="Clean 3x3 SaaS Executive Dashboard tracking core metrics like NRR, MRR, and Adoption"
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] pointer-events-none"></div>
          </div>
          
          {/* Clean Footer */}
          <div className="bg-[var(--color-surface)] border-t border-slate-100 px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[var(--color-accent-pale)] text-[var(--color-accent)] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">Revenue Metrics</p>
                <p className="text-[11px] text-[var(--color-text-muted)] font-medium">Live NRR Tracking</p>
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
