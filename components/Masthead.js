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
    <header className="w-full border-b-2 border-[#2B4365] bg-[#F5F1E8] sticky top-0 z-50">
      {/* Top Banner Ticker */}
      <div className="w-full bg-[#F5F1E8] text-[#2B4365] py-1.5 px-4 md:px-8 text-xs font-mono flex justify-end items-center border-b border-[#2B4365]/10">
        <div className="flex gap-4 items-center">
          <span>[ STATUS: ACTIVE ]</span>
          <span>[ TIME: {time || "11:20"} ]</span>
        </div>
      </div>

      {/* Main Newspaper Masthead */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Link href="/" className="inline-block group">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-[#2B4365] uppercase leading-none">
              SARLINSON
            </h1>
            <p className="text-sm font-mono tracking-widest text-[#BFA175] mt-2 uppercase font-semibold">
              Technical Success Manager & Onboarding Specialist
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono border-t border-[#2B4365]/10 md:border-t-0 pt-4 md:pt-0">
          <Link href="/#manifesto" className="text-[#2B4365] hover:text-[#BFA175] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BFA175] hover:after:w-full after:transition-all">
            01. MANIFESTO
          </Link>
          <Link href="/#metrics" className="text-[#2B4365] hover:text-[#BFA175] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BFA175] hover:after:w-full after:transition-all">
            02. IMPACT
          </Link>
          <Link href="/about" className="text-[#2B4365] hover:text-[#BFA175] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BFA175] hover:after:w-full after:transition-all">
            03. ABOUT & EXPERIENCE
          </Link>
          <Link href="/#playbooks" className="text-[#2B4365] hover:text-[#BFA175] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BFA175] hover:after:w-full after:transition-all">
            04. PLAYBOOKS
          </Link>
          <Link href="/#copilot" className="text-[#2B4365] hover:text-[#BFA175] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BFA175] hover:after:w-full after:transition-all">
            05. AI ADVISOR
          </Link>
        </nav>
      </div>
    </header>
  );
}
