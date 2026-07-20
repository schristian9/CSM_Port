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
        "Led end-to-end onboarding and implementation of 75+ customer accounts, achieving a 98% onboarding completion rate.",
        "Created, iterated, validated, and optimized customer success processes, improving rollout consistency by 46%.",
        "Analysed product usage, adoption metrics, and AI feature engagement, producing reports that increased platform utilization by 38%."
      ]
    },
    {
      year: "2019 - 2025",
      role: "Senior Product Deployment Analyst",
      company: "Meditab Software",
      highlight: "Clinical Training & Onboarding Expansion",
      achievements: [
        "Delivered engaging, hands-on product training for 500+ clinicians and practice managers, increasing adoption by 22%.",
        "Collaborated cross-functionally to resolve onboarding challenges, reducing implementation timelines by 35% and raising CSAT to 93%.",
        "Built onboarding playbooks and standard operating procedures from scratch, decreasing onboarding effort by 40%.",
        "Contributed to a 30% year-over-year customer growth rate through post-sales engagement and strategic account reviews."
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
    },
    {
      year: "2017",
      role: "Clinical Nurse (General Nursing Midwifery)",
      company: "GCS Medical College",
      highlight: "Clinical Foundations of Patient Care",
      achievements: [
        "Acquired clinical workflow mastery and patient care methodologies.",
        "Developed deep understanding of healthcare operations and clinical needs that now drive successful healthcare tech adoption."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#d6d0c2] selection:text-white relative">
      <div className="noise-overlay" />
      <Masthead />

      <main className="flex-1 w-full bg-[#FFFFFF] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Personal Card & Details */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6 self-start">
            <div className="zine-card bg-[#f6d6db] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 grid-bg opacity-15"></div>
              
              <div className="border-b border-[#1f1e19] pb-6 mb-6">
                <div className="zine-badge mb-3">PERSONAL DOSSIER</div>
                <h2 className="text-3xl font-display font-black text-[#1f1e19] uppercase leading-tight">
                  Sarlinson Christian
                </h2>
                <p className="text-sm font-mono text-[#d6d0c2] uppercase font-bold mt-1.5">
                  Technical CS & Onboarding Leader
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 font-mono text-xs text-[#1f1e19]">
                <div className="flex justify-between py-2 border-b border-[#1f1e19]/10">
                  <span className="text-gray-500">LOCATION</span>
                  <span className="font-bold">LONDON, UK</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1f1e19]/10">
                  <span className="text-gray-500">EMAIL</span>
                  <a href="mailto:sarlinson92@yahoo.com" className="font-bold hover:text-[#d6d0c2] underline">
                    sarlinson92@yahoo.com
                  </a>
                </div>

                <div className="flex justify-between py-2 border-b border-[#1f1e19]/10">
                  <span className="text-gray-500">LINKEDIN</span>
                  <a href="https://linkedin.com/in/sarlinson" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#d6d0c2] underline">
                    linkedin.com/in/sarlinson
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a href="mailto:sarlinson92@yahoo.com" className="zine-btn block text-center w-full py-3 text-xs tracking-wider uppercase">
                  Request Interview
                </a>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="zine-card bg-[#f6d6db] p-8">
              <h4 className="font-display font-black text-xl text-[#1f1e19] uppercase border-b border-[#1f1e19] pb-3 mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-bold text-[#1f1e19] leading-snug">
                    Bachelor of Business Administration (2026)
                  </h5>
                  <p className="text-sm text-gray-600 font-mono mt-1">DY Patil University</p>
                </div>
                <div className="border-t border-[#1f1e19]/10 pt-4">
                  <h5 className="text-lg font-bold text-[#1f1e19] leading-snug">
                    General Nursing Midwifery (2017)
                  </h5>
                  <p className="text-sm text-gray-600 font-mono mt-1">GCS Medical College</p>
                </div>
              </div>
            </div>

            {/* Editorial Quote Card */}
            <div className="zine-card bg-[#1f1e19] text-[#FFFFFF] p-8 relative overflow-hidden shadow-[3px_3px_0px_0px_rgba(191,161,117,1)] border border-[#d6d0c2]">
              <div className="absolute top-0 right-0 w-20 h-20 grid-bg opacity-10"></div>
              <span className="font-mono text-[10px] text-[#d6d0c2] uppercase tracking-widest block mb-4">PERSISTENCE AUDIT</span>
              <p className="text-xl font-display font-semibold italic text-[#FFFFFF] leading-relaxed">
                "Keep feeding the fire, even when the smoke convinces you it's dying."
              </p>
            </div>
          </div>

          {/* Right Column: Visual Trajectory & Resume */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Trajectory section */}
            <div className="zine-card bg-[#f6d6db] p-8 md:p-10">
              <div className="border-b border-[#1f1e19] pb-6 mb-8">
                <div className="zine-badge mb-3">VISUAL TRAJECTORY</div>
                <h3 className="text-2xl md:text-4xl font-display font-black text-[#1f1e19] uppercase">
                  Clinical-to-Technical Growth
                </h3>
                <p className="text-sm font-mono text-[#d6d0c2] mt-1.5 uppercase font-semibold">
                  How nursing principles fuel onboarding velocity & AI adoption in healthcare SaaS.
                </p>
                <div className="border-l-4 border-[#1f1e19] pl-4 mt-6">
                  <p className="text-lg font-display font-semibold italic text-[#d6d0c2] leading-relaxed">
                    "You'll never know if you're lost until you start walking."
                  </p>
                </div>
              </div>

              {/* Vertical growth timeline */}
              <div className="relative">
                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-[#1f1e19] border-dashed border-r"></div>

                <div className="space-y-10">
                  {trajectory.map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-start relative z-10">
                      <div className="w-12 h-12 rounded-full border-2 border-[#1f1e19] bg-[#f6d6db] flex flex-col items-center justify-center font-display font-black text-[10px] shrink-0 shadow-[2px_2px_0px_0px_rgba(27,28,30,1)]">
                        {step.year.split(" - ").pop()}
                      </div>
                      
                      <div className="flex-1 bg-[#FFFFFF] border border-[#1f1e19] p-6 shadow-[3px_3px_0px_0px_rgba(27,28,30,1)]">
                        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                          <h4 className="font-display font-black text-lg md:text-xl text-[#1f1e19] uppercase leading-none">
                            {step.role}
                          </h4>
                          <span className="font-mono text-xs text-[#d6d0c2] font-bold">@ {step.company}</span>
                        </div>
                        <p className="text-xs font-mono uppercase text-gray-500 font-bold mb-4">{step.highlight}</p>
                        
                        <ul className="space-y-2 text-base text-[#1f1e19] leading-relaxed">
                          {step.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="inline-block mt-2 w-1.5 h-1.5 bg-[#d6d0c2] shrink-0"></span>
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
            <div className="zine-card bg-[#f6d6db] p-8 md:p-10">
              <div className="border-b border-[#1f1e19] pb-6 mb-8">
                <div className="zine-badge mb-3">FEATURED PROJECTS</div>
                <h3 className="text-2xl md:text-3xl font-display font-black text-[#1f1e19] uppercase">
                  Healthcare AI Platform Implementation
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-7 bg-[#FFFFFF] border border-[#1f1e19] p-6 shadow-[3px_3px_0px_0px_rgba(27,28,30,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-display font-black text-lg text-[#1f1e19] uppercase">
                        AI-Driven Health Platform — DecodeDx
                      </h4>
                      <span className="zine-badge bg-[#d6d0c2] text-white">-25% User Drop-Off</span>
                    </div>
                    <p className="text-base text-[#1f1e19] leading-relaxed">
                      Translated complex clinical workflow insights gathered from hands-on healthcare operations directly into product redesign requirements for an early-stage AI health diagnostics platform. Successfully streamlined interface workflows and reduced user drop-off during onboarding cycles by 25%.
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-5 relative border border-[#1f1e19] shadow-[3px_3px_0px_0px_rgba(27,28,30,1)] overflow-hidden min-h-[200px]">
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
            <div className="zine-card bg-[#f6d6db] p-8 md:p-10">
              <div className="border-b border-[#1f1e19] pb-6 mb-8">
                <div className="zine-badge mb-3">SKILLS DIRECTORY</div>
                <h3 className="text-2xl md:text-3xl font-display font-black text-[#1f1e19] uppercase">
                  Technical Capability Board
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#d6d0c2] uppercase tracking-wider mb-3">
                    Customer Success & Adoption
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.csAdoption.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-[#1f1e19] bg-[#FFFFFF] font-mono text-xs text-[#1f1e19] shadow-[1px_1px_0px_0px_rgba(27,28,30,1)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#1f1e19]/10 pt-6">
                  <h4 className="font-mono text-xs font-bold text-[#d6d0c2] uppercase tracking-wider mb-3">
                    Business & Commercial Strategy
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.businessCommercial.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-[#1f1e19] bg-[#FFFFFF] font-mono text-xs text-[#1f1e19] shadow-[1px_1px_0px_0px_rgba(27,28,30,1)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#1f1e19]/10 pt-6">
                  <h4 className="font-mono text-xs font-bold text-[#d6d0c2] uppercase tracking-wider mb-3">
                    Tools, Platforms & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.toolsPlatforms.map((s, i) => (
                      <span key={i} className="px-3 py-1.5 border border-[#1f1e19] bg-[#FFFFFF] font-mono text-xs text-[#1f1e19] shadow-[1px_1px_0px_0px_rgba(27,28,30,1)]">
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

      <footer className="w-full border-t-2 border-[#1f1e19] bg-[#1f1e19] text-[#FFFFFF] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-display font-black tracking-tight uppercase leading-none text-white">
              SARLINSON CHRISTIAN
            </h2>
            <p className="text-xs font-mono tracking-widest text-[#d6d0c2] mt-1.5 uppercase">
              Technical Success Manager & Onboarding Specialist
            </p>
          </div>
          <div className="text-xs font-mono text-gray-400">
            <Link href="/" className="hover:text-white underline mr-6">← BACK TO HOME</Link>
            <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
