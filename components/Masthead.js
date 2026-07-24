"use client";

import Link from "next/link";

export default function Masthead() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 lg:py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="shrink-0">
          <Link href="/" className="inline-block group">
            <h1 className="text-2xl lg:text-3xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
              SARLINSON CHRISTIAN
            </h1>
            <p className="text-[10px] lg:text-xs font-sans tracking-widest text-blue-600 mt-1 uppercase font-bold">
              Technical Success Manager & Onboarding Specialist
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-row flex-wrap lg:flex-nowrap justify-start lg:justify-end items-center gap-x-4 lg:gap-x-6 gap-y-2 text-[10px] lg:text-xs font-sans font-bold text-slate-900 tracking-wider w-full lg:w-auto">
          <Link href="/#manifesto" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            01. MANIFESTO
          </Link>
          <Link href="/#metrics" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            02. IMPACT
          </Link>
          <Link href="/about" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            03. ABOUT
          </Link>
          <Link href="/playbooks" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            04. PLAYBOOKS
          </Link>
          <Link href="/user-guide" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            05. USER GUIDE
          </Link>
          <Link href="/case-studies" className="whitespace-nowrap hover:text-blue-600 transition-colors">
            06. CASE STUDIES
          </Link>
        </nav>
      </div>
    </header>
  );
}
