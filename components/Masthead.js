"use client";

import Link from "next/link";
import Image from "next/image";

export default function Masthead() {
  return (
    <header className="w-full bg-[var(--color-bg)]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 lg:py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="shrink-0">
          <Link href="/" className="inline-flex items-center gap-4 group">
            {/* Logo Image */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image 
                src="/logo.png" 
                alt="Sarlinson Christian Logo" 
                fill
                sizes="3rem"
                className="object-contain"
                priority
              />
            </div>
            {/* Text Logo */}
            <div>
              <span className="block text-2xl lg:text-3xl font-sans tracking-tight font-black text-[var(--color-text-h1)] uppercase leading-none group-hover:text-[var(--color-accent)] transition-colors">
                SARLINSON CHRISTIAN
              </span>
              <span className="block text-[10px] lg:text-xs font-sans tracking-widest text-[var(--color-accent)] mt-1 uppercase font-bold">
                Technical Success Manager & Onboarding Specialist
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-row flex-wrap lg:flex-nowrap justify-start lg:justify-end items-center gap-x-4 lg:gap-x-6 gap-y-2 text-[10px] lg:text-xs font-sans font-bold text-[var(--color-text)] tracking-wider w-full lg:w-auto">
          <Link href="/#manifesto" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            01. MANIFESTO
          </Link>
          <Link href="/#metrics" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            02. IMPACT
          </Link>
          <Link href="/about" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            03. ABOUT
          </Link>
          <Link href="/playbooks" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            04. PLAYBOOKS
          </Link>
          <Link href="/user-guide" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            05. USER GUIDE
          </Link>
          <Link href="/case-studies" className="whitespace-nowrap hover:text-[var(--color-accent)] transition-colors">
            06. CASE STUDIES
          </Link>
        </nav>
      </div>
    </header>
  );
}
