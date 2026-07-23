import Masthead from "@/components/Masthead";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Sarlinson Christian | Customer Success & Onboarding Leader",
  description: "Career journey and business impact portfolio of Sarlinson Christian, Technical Customer Success & Onboarding Manager.",
};

export default function About() {
  const skills = {
    csAdoption: [
      "Customer Success", "Customer Onboarding", "Post-Sales Operations", 
      "Customer Experience (CX)", "Customer Satisfaction (CSAT)", 
      "Stakeholder Management", "Practice Rollouts", "Implementation", 
      "Customer Retention"
    ],
    businessCommercial: [
      "AI Platform Adoption", "Product Demonstrations", "Client Reporting", 
      "Product Usage Analysis", "Customer Feedback Loops", "Process Improvement", 
      "Rollout Playbooks", "Sales Collaboration", "Product Partnership", 
      "Change Management", "Problem Solving"
    ],
    toolsPlatforms: [
      "AI & LLMs", "Healthcare Technology", "Workflow Optimisation", 
      "Data Analysis", "Process Documentation", "CRM Systems", 
      "Adoption Analytics", "Microsoft Office", "Google Workspace"
    ]
  };

  const trajectory = [
    {
      year: "2025 - 2026",
      role: "Senior Technical Customer Success Manager",
      company: "SeekThem",
      highlight: "Scaling Enterprise Health-Tech Accounts",
      achievements: [
        "Identified expansion and renewal risks across a key client account and defined mitigation strategies that reduced early-stage issues by 10% and increased product development efficiency by 15%.",
        "Delivered targeted training and optimisation sessions for two B2B clients to boost product adoption, improving overall performance metrics by 12% and reducing operational roadblocks by 25%.",
        "Led Net Revenue Retention (NRR) strategy for a $300K ARR segment, designing playbooks for risk and growth, and elevating NRR from 108% to 122% over four quarters."
      ]
    },
    {
      year: "2019 - 2025",
      role: "Senior Product Deployment Analyst",
      company: "Meditab Software",
      highlight: "Clinical Training & Onboarding Expansion",
      achievements: [
        "Created project plans and scope documents for an upgrade automation initiative, coordinating delivery and training to ease system upgrades by 40%.",
        "Streamlined the training process through proactive communication and tailored sessions, improving training efficiency by 15% and reducing confusion during go-live.",
        "Designed Customer Success playbooks and account planning frameworks that reduced strategic account review preparation time by 38% across the department.",
        "Championed Voice of Customer programs across a $2.0M ARR base, consolidating feedback into Product insights that drove three major releases and a 12-point NPS improvement."
      ]
    },
    {
      year: "2019",
      role: "Interface Analyst",
      company: "Meditab Software",
      highlight: "AI Product Adoption & Utilization",
      achievements: [
        "Championed customer adoption of innovative AI tooling by demonstrating workflow improvements and patient care benefits.",
        "Increased AI feature utilization by 55% while successfully reducing user support requests by 31%."
      ]
    },
    {
      year: "2018",
      role: "Virtual Administrative Assistant",
      company: "DrCatalyst",
      highlight: "Workflow Optimization & Operational Support",
      achievements: [
        "Optimized data preparation workflows and streamlined inter-departmental communication.",
        "Eliminated operational and administrative bottlenecks by 20% to support smoother client activities."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-50 selection:text-white relative">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full bg-white pb-24">
        {/* Missing Page Header */}
        <section className="border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="pro-badge mb-4">BACKGROUND</div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight font-black text-slate-900 leading-tight uppercase mb-6">
              About & <span className="text-blue-600">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl font-sans text-slate-600 leading-relaxed font-semibold max-w-3xl">
              The career journey and deep technical evolution driving my customer success frameworks.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 px-4 md:px-8">
          
          {/* Left Column: Personal Card & Details */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6 self-start">
            <div className="pro-card bg-slate-50 p-8 relative overflow-hidden">
              
              {/* Profile Picture */}
              <div className="mb-6 relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/mypng.png"
                  alt="Sarlinson Christian"
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 100vw, 33vw"
                  priority
                />
              </div>
              
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="pro-badge mb-3">PERSONAL DOSSIER</div>
                <h2 className="text-3xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
                  Sarlinson Christian
                </h2>
                <p className="text-sm font-sans text-blue-600 uppercase font-bold mt-1.5">
                  Technical CS & Onboarding Leader
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 font-sans text-xs text-slate-900">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-gray-500">LOCATION</span>
                  <span className="font-bold">LONDON, UK</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-gray-500">EMAIL</span>
                  <a href="mailto:sarlinson92@yahoo.com" className="font-bold hover:text-blue-600 underline">
                    sarlinson92@yahoo.com
                  </a>
                </div>

                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-gray-500">LINKEDIN</span>
                  <a href="https://linkedin.com/in/sarlinson" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-blue-600 underline">
                    linkedin.com/in/sarlinson
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a href="mailto:sarlinson92@yahoo.com" className="pro-btn block text-center w-full py-3 text-xs tracking-wider uppercase">
                  Request Interview
                </a>
              </div>
            </div>

            <div className="pro-card bg-slate-50 p-8">
              <h4 className="text-2xl font-sans tracking-tight font-black text-slate-900 uppercase border-b border-slate-200 pb-3 mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-bold text-slate-900 leading-snug">
                    Bachelor of Business Administration (2026)
                  </h5>
                  <p className="text-sm text-gray-600 font-sans mt-1">DY Patil University</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <h5 className="text-lg font-bold text-slate-900 leading-snug">
                    General Nursing Midwifery (2017)
                  </h5>
                  <p className="text-sm text-gray-600 font-sans mt-1">GCS Medical College</p>
                </div>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="pro-card bg-slate-50 p-8">
              <h4 className="text-2xl font-sans tracking-tight font-black text-slate-900 uppercase border-b border-slate-200 pb-3 mb-4">
                Resume
              </h4>
              <p className="text-sm font-sans text-slate-600 mb-6 leading-relaxed">
                Download a formal, printable PDF copy of my resume outlining my complete career trajectory and key achievements.
              </p>
              <a 
                href="/sarlinson-christian-resume.pdf" 
                download
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-blue-600 rounded-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download PDF
              </a>
            </div>

            {/* Editorial Quote Card */}
            <div className="pro-card bg-slate-900 text-blue-600 p-8 relative overflow-hidden shadow-sm hover:shadow-md border border-slate-200">
              
              <span className="font-sans text-[10px] text-blue-600 uppercase tracking-widest block mb-4">PERSISTENCE AUDIT</span>
              <p className="text-xl font-sans tracking-tight font-semibold italic text-blue-600 leading-relaxed">
                "Keep feeding the fire, even when the smoke convinces you it's dying."
              </p>
            </div>
          </div>

          {/* Right Column: Visual Trajectory & Resume */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Trajectory section */}
            <div className="pro-card bg-slate-50 p-8 md:p-10">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <div className="pro-badge mb-3">VISUAL TRAJECTORY</div>
                <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
                  Clinical-to-Technical Growth
                </h3>
                <p className="text-sm font-sans text-blue-600 mt-4 uppercase font-semibold">
                  How nursing principles fuel onboarding velocity & AI adoption in healthcare SaaS.
                </p>
                <div className="border-l-4 border-slate-200 pl-4 mt-6">
                  <p className="text-lg font-sans tracking-tight font-semibold italic text-blue-600 leading-relaxed">
                    "You'll never know if you're lost until you start walking."
                  </p>
                </div>
              </div>

              {/* Vertical growth timeline */}
              <div className="relative">
                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-900 border-dashed border-r"></div>

                <div className="space-y-10">
                  {trajectory.map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start relative z-10">
                      <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex flex-col items-center justify-center font-sans tracking-tight font-black text-[10px] shrink-0 shadow-sm hover:shadow-md">
                        {step.year.split(" - ").pop()}
                      </div>
                      
                      <div className="flex-1 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md">
                        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                          <h4 className="font-sans tracking-tight font-black text-lg md:text-xl text-slate-900 uppercase leading-none">
                            {step.role}
                          </h4>
                          <span className="font-sans text-xs text-blue-600 font-bold">@ {step.company}</span>
                        </div>
                        <p className="text-xs font-sans uppercase text-gray-500 font-bold mb-4">{step.highlight}</p>
                        
                        <ul className="space-y-2 text-base text-slate-900 leading-relaxed">
                          {step.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="inline-block mt-2 w-1.5 h-1.5 bg-blue-600 shrink-0"></span>
                              <span className="opacity-90">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Projects section */}
            <div className="pro-card bg-slate-50 p-8 md:p-10">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <div className="pro-badge mb-3">FEATURED PROJECTS</div>
                <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
                  Healthcare AI Platform Implementation
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-7 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-sans tracking-tight font-black text-lg text-slate-900 uppercase">
                        AI-Driven Health Platform — DecodeDx
                      </h4>
                      <span className="pro-badge bg-slate-50 text-white">-25% User Drop-Off</span>
                    </div>
                    <p className="text-base text-slate-900 leading-relaxed">
                      Translated complex clinical workflow insights gathered from hands-on healthcare operations directly into product redesign requirements for an early-stage AI health diagnostics platform. Successfully streamlined interface workflows and reduced user drop-off during onboarding cycles by 25%.
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-5 relative border border-slate-200 shadow-sm hover:shadow-md overflow-hidden min-h-[200px]">
                  <Image
                    src="/clinical_tech.jpg"
                    alt="Clinical workflow interface and doctor's workspace mockup"
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>

            {/* Technical Skills Categorization */}
            <div className="pro-card bg-slate-50 p-8 md:p-10">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <div className="pro-badge mb-3">SKILLS DIRECTORY</div>
                <h3 className="text-3xl md:text-5xl font-sans tracking-tight font-black text-slate-900 uppercase leading-tight">
                  Technical Capability Board
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                    Customer Success & Adoption
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.csAdoption.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-slate-200 bg-white font-sans text-xs text-slate-900 shadow-sm hover:shadow-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-sans text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                    Business & Commercial Strategy
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.businessCommercial.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-slate-200 bg-white font-sans text-xs text-slate-900 shadow-sm hover:shadow-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-sans text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                    Tools, Platforms & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.toolsPlatforms.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-slate-200 bg-white font-sans text-xs text-slate-900 shadow-sm hover:shadow-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

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
          <div className="flex flex-col items-center md:items-end gap-2 text-xs font-sans text-gray-400">
            <Link href="/" className="hover:text-blue-600 underline uppercase">← Back to Portfolio</Link>
            <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
