import Masthead from "@/components/Masthead";
import Link from "next/link";

export const metadata = {
  title: "User Guide | Sarlinson Christian",
  description: "A working manual for Sarlinson Christian detailing communication style, cross-functional expectations, and escalation management.",
};

export default function UserGuide() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-50 selection:text-white relative bg-white">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full pb-24">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="pro-badge mb-4">OPERATING MANUAL</div>
          <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-slate-900 leading-tight uppercase mb-6">
            Working With <span className="text-blue-600">Sarlinson</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans text-slate-600 leading-relaxed font-semibold">
            A transparent guide to my communication style, core operating principles, and how we can collaborate effectively to drive customer outcomes.
          </p>
        </section>

        {/* 1. Communication Style & Core Values */}
        <section className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 mb-12 uppercase leading-tight">
              1. Communication & Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="pro-card bg-slate-50 p-8 border border-slate-200">
                <div className="text-blue-600 mb-4 font-black text-2xl font-sans">01.</div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-3">Radical Transparency</h3>
                <p className="text-base font-sans text-slate-600 leading-relaxed">
                  I believe in bad news early and good news often. Whether a deployment is delayed or a key stakeholder is disengaged, I surface risks immediately with context and proposed solutions.
                </p>
              </div>
              
              <div className="pro-card bg-slate-50 p-8 border border-slate-200">
                <div className="text-blue-600 mb-4 font-black text-2xl font-sans">02.</div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-3">Data-Driven Empathy</h3>
                <p className="text-base font-sans text-slate-600 leading-relaxed">
                  Every account has a unique human element, but decisions must be grounded in product telemetry and usage data. I balance deep customer empathy with objective health metrics.
                </p>
              </div>

              <div className="pro-card bg-slate-50 p-8 border border-slate-200">
                <div className="text-blue-600 mb-4 font-black text-2xl font-sans">03.</div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-3">Extreme Ownership</h3>
                <p className="text-base font-sans text-slate-600 leading-relaxed">
                  If an issue impacts the customer experience, it is my problem to solve. I don't pass the buck; I quarterback the resolution across Product, Support, and Engineering until it is closed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Expectations */}
        <section className="bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
          <div className="noise-overlay opacity-50" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 mb-12 uppercase leading-tight">
              2. Cross-Functional Expectations
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-sans font-bold text-blue-600 mb-6 uppercase tracking-wider">What I need from my Team</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-blue-500 font-black">➔</span>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-1">Candid Feedback</h4>
                      <p className="text-slate-600 font-sans leading-relaxed">Continuous improvement relies on honesty. I prefer direct, constructive feedback over artificial harmony.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-500 font-black">➔</span>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-1">Knowledge Sharing</h4>
                      <p className="text-slate-600 font-sans leading-relaxed">A win for one is a win for the team. I expect us to actively share playbooks, product workarounds, and industry insights.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-sans font-bold text-blue-600 mb-6 uppercase tracking-wider">What I need from Leadership</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-blue-500 font-black">➔</span>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-1">Strategic Alignment</h4>
                      <p className="text-slate-600 font-sans leading-relaxed">Clear communication on broader company goals so I can align my portfolio strategies and QBR narratives accordingly.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-500 font-black">➔</span>
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-1">Executive Sponsorship</h4>
                      <p className="text-slate-600 font-sans leading-relaxed">Willingness to step into strategic escalations or key renewal conversations when peer-to-peer executive alignment is required.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Handling High-Stress Escalations */}
        <section className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3 sticky top-32">
                <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 mb-4 uppercase leading-tight">
                  3. Crisis & Escalation Management
                </h2>
                <p className="text-lg text-slate-600 font-sans leading-relaxed">
                  When a critical account is at risk, emotion must be replaced with process. Here is how I methodically de-escalate and resolve high-stress situations.
                </p>
              </div>
              
              <div className="lg:w-2/3 flex flex-col gap-6">
                <div className="pro-card bg-white p-8 border border-slate-200 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="font-sans font-black text-slate-900">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-sans font-black text-slate-900 mb-2">Immediate Triage & Acknowledgement</h4>
                    <p className="text-slate-600 font-sans leading-relaxed">I immediately acknowledge the issue with the customer, validating their frustration without assigning premature blame. Establishing a clear timeline for the next update buys the team breathing room.</p>
                  </div>
                </div>

                <div className="pro-card bg-white p-8 border border-slate-200 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="font-sans font-black text-slate-900">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-sans font-black text-slate-900 mb-2">Internal War Room</h4>
                    <p className="text-slate-600 font-sans leading-relaxed">I assemble the necessary stakeholders (Support, Engineering, Product) to conduct a rapid root-cause analysis. I act as the central source of truth, translating technical constraints into customer-facing timelines.</p>
                  </div>
                </div>

                <div className="pro-card bg-white p-8 border border-slate-200 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="font-sans font-black text-slate-900">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-sans font-black text-slate-900 mb-2">Structured Remediation Plan</h4>
                    <p className="text-slate-600 font-sans leading-relaxed">I present a clear, objective action plan back to the client. This includes the immediate fix, the long-term preventative measures, and an updated cadence for check-ins until health is restored.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Leadership Philosophy */}
        <section className="bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
          <div className="noise-overlay opacity-50" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 mb-12 uppercase leading-tight">
              4. Leadership Philosophy
            </h2>
            
            <p className="text-xl font-sans text-slate-600 font-semibold mb-12 max-w-3xl leading-relaxed">
              Driving commercial success through extreme ownership, radical transparency, and cross-functional empathy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="pro-card bg-white p-8 flex flex-col border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center mb-6 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M8 11h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-4">Servant Leadership in the Trenches</h3>
                <p className="text-sm font-sans text-slate-600 leading-relaxed">
                  I don't just manage from a dashboard. I believe true leadership means removing roadblocks for the team, standing shoulder-to-shoulder during critical escalations, and ensuring every contributor has the exact tools they need to drive customer value.
                </p>
              </div>

              <div className="pro-card bg-white p-8 flex flex-col border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center mb-6 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-4">Radical Candor & Transparency</h3>
                <p className="text-sm font-sans text-slate-600 leading-relaxed">
                  Trust is built on truth, especially when the news is bad. I lead with radical candor—delivering clear, actionable feedback without the corporate fluff. Whether communicating a delayed product rollout to a client or coaching a peer, I prioritize speed and honesty.
                </p>
              </div>

              <div className="pro-card bg-white p-8 flex flex-col border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center mb-6 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-4">Data-Driven Empathy</h3>
                <p className="text-sm font-sans text-slate-600 leading-relaxed">
                  Empathy without action is just listening. I lead by combining deep customer empathy with rigorous data analysis (health scores, telemetry, adoption metrics). This ensures our solutions are not just emotionally resonant, but commercially viable and measurable.
                </p>
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
