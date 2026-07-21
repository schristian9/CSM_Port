"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Masthead() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/London" };
      setTime(now.toLocaleTimeString("en-GB", options));
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      {/* Top Banner Ticker */}
      <div className="w-full bg-white text-slate-900 py-1.5 px-4 md:px-8 text-xs font-sans flex justify-end items-center border-b border-slate-200">
        <div className="flex gap-4 items-center">
          <span>[ STATUS: ACTIVE ]</span>
          <span>[ TIME: {time || "11:20"} ]</span>
        </div>
      </div>

      {/* Main Newspaper Masthead */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div>
          <Link href="/" className="inline-block group">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-none">
              SARLINSON CHRISTIAN
            </h1>
            <p className="text-sm font-sans tracking-widest text-blue-600 mt-2 uppercase font-semibold">
              Technical Success Manager & Onboarding Specialist
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-end gap-x-3 lg:gap-x-4 xl:gap-x-6 gap-y-2 text-[11px] lg:text-[12px] xl:text-[13px] font-sans font-semibold text-slate-500 border-t border-slate-200 lg:border-t-0 pt-4 lg:pt-0 w-full lg:w-auto overflow-hidden">
          <Link href="/#manifesto" className="whitespace-nowrap hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">
            01. MANIFESTO
          </Link>
          <Link href="/#metrics" className="whitespace-nowrap hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">
            02. IMPACT
          </Link>
          <Link href="/about" className="whitespace-nowrap hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">
            03. ABOUT & EXPERIENCE
          </Link>
          <Link href="/#playbooks" className="whitespace-nowrap hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">
            04. PLAYBOOKS
          </Link>
        </nav>
      </div>
    </header>
  );
}
