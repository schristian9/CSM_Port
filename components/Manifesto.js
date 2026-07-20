"use client";

import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#1f1e19] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Manifesto Headline */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="zine-badge mb-6 self-start">MANIFESTO v1.0</div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#1f1e19] tracking-tight uppercase leading-[1.0] mb-8">
          Revenue <span className="font-serif-italic font-normal text-[#d6d0c2] lowercase">doesn't</span> start at the sale.<br />
          It starts <span className="underline decoration-[#d6d0c2] decoration-4 underline-offset-4">at renewal</span>,<br />
          and renewal starts with<br className="hidden md:inline" /> Customer Success.
        </h2>
        
        <div className="border-l-6 border-[#d6d0c2] pl-6 my-8">
          <p className="text-2xl md:text-3xl font-display font-semibold text-[#d6d0c2] leading-tight italic">
            "Adoption, Retention, Expansion, Advocacy are outcomes, not goals. Chase the customer's actual desired result and the rest follows."
          </p>
        </div>

        <p className="text-lg md:text-xl text-[#1f1e19] leading-relaxed max-w-2xl mt-4">
          I am <span className="text-[#d6d0c2] font-semibold">Sarlinson Christian</span>, a <span className="text-[#d6d0c2] font-semibold">Technical Customer Success & Onboarding Manager</span> specializing in AI platform implementations, customer adoption, and healthcare technology rollouts. By building structured onboarding frameworks and optimizing workflows, I drive implementation consistency and measurable business growth.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/about" className="zine-btn px-6 py-3 text-sm tracking-wider uppercase">
            Explore Visual Career Growth
          </Link>
          <Link href="/#copilot" className="zine-card hover:bg-[#F0EDE6] px-6 py-3 text-sm tracking-wider uppercase font-mono font-semibold flex items-center gap-2 text-[#1f1e19]">
            Ask My AI Copilot <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          </Link>
        </div>
      </div>

      {/* Styled Visual Collage */}
      <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px]">
        {/* Card Stack Collage */}
        <div className="absolute inset-0 bg-[#E6E2D8] zine-border transform rotate-2 z-0"></div>
        
        {/* Main Image Box */}
        <div className="absolute inset-2 bg-white zine-border flex flex-col justify-between p-6 transform -rotate-1 z-10 shadow-lg">
          <div className="flex justify-between items-center border-b border-[#1f1e19] pb-4">
            <span className="font-mono text-xs font-bold text-gray-500">[ STRATEGY BOARD ]</span>
            <span className="font-mono text-xs text-[#d6d0c2]">07.02.26</span>
          </div>

          <div className="flex-1 my-6 relative border border-[#1f1e19] overflow-hidden min-h-[260px]">
            <Image
              src="/cs_growth_chart.jpg"
              alt="Customer Success executive performance metrics dashboard showing Net Revenue Retention of 124.2%"
              fill
              className="object-cover"
              sizes="(max-w-7xl) 100vw, 50vw"
            />
          </div>

          <div className="border-t border-[#1f1e19] pt-4 flex justify-between items-center">
            <div>
              <p className="font-display font-black text-sm tracking-tight text-[#1f1e19]">SARLINSON PORTFOLIO</p>
              <p className="font-mono text-[10px] text-gray-500 uppercase">Scale / Retain / Expand</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#1f1e19] flex items-center justify-center font-mono text-xs font-bold bg-[#d6d0c2] text-white">
              CS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
