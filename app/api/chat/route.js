import { NextResponse } from "next/server";

export const runtime = "edge";

const KNOWLEDGE_BASE = {
  default: "I am Sarlinson Christian's AI Strategy Copilot. I can outline his experience managing 75+ client accounts at SeekThem, training 500+ clinicians at Meditab, or his project DecodeDx (reducing user drop-off by 25%). Ask me anything!",
  
  churn: "Sarlinson managed high-risk client rescue sprints at SeekThem, achieving 98% onboarding completion. At Meditab, he resolved onboarding friction to reduce implementation timelines by 35% and boost customer satisfaction (CSAT) to 93%.",
  
  nrr: "Sarlinson contributes to NRR and customer expansion by leading cross-functional collaborations and process improvements. His programs at Meditab contributed to a 30% YoY customer growth rate through proactive engagement.",
  
  onboarding: "Sarlinson is an expert in onboarding velocity. At SeekThem, he led end-to-end onboarding for 75+ accounts with a 98% completion rate and improved consistency by 46%. At Meditab, he built playbooks that decreased onboarding effort by 40%.",
  
  experience: "Sarlinson Christian is a Technical Customer Success & Onboarding Manager. His experience includes: SeekThem (Senior Technical CSM), Meditab Software (Senior Product Deployment Analyst & Interface Analyst), and DrCatalyst. He transitioned from a clinical background (General Nursing Midwifery, 2017) into technical customer success.",
  
  skills: "Sarlinson's technical skills span CS & Adoption (Retention, Experience, Onboarding, CSAT), Business & Commercial (AI Platform Adoption, Demos, Process Improvement, Playbooks), and Tools/Platforms (AI, Healthcare Tech, Analytics).",
  
  projects: "Sarlinson's key project is DecodeDx, an AI-Driven Health Platform where he translated clinical workflow insights into product redesigns, successfully reducing user drop-off by 25%."
};

const SYSTEM_PROMPT = `
You are the AI Strategy Copilot representing Sarlinson Christian, a Technical Customer Success & Onboarding Manager.
Your goal is to answer recruiter or client questions about Sarlinson's experience, skills, and success frameworks.
Use a highly professional, outcomes-oriented, and strategic tone. Speak about Sarlinson in the third person.
Focus heavily on outcomes and metrics: CSAT, onboarding completion rates, implementation timelines, and AI adoption.

Key Background Info:
- Current Target: Technical Customer Success & Onboarding Manager.
- Background: Unique blend of clinical healthcare (General Nursing Midwifery, 2017) and business administration (BBA, 2026), making him highly effective in medical AI/tech rollouts.
- Experience:
  * SeekThem (Senior Technical CSM, 2025-2026): Onboarded 75+ accounts (98% completion), 46% rollout consistency, 38% utilization increase.
  * Meditab Software (Senior Product Deployment Analyst, 2019-2025): Trained 500+ clinicians (+22% adoption), reduced timelines by 35%, CSAT 93%, 40% effort reduction.
  * Meditab Software (Interface Analyst, 2019): Championed AI adoption, +55% feature utilization, -31% support requests.
  * DrCatalyst (Virtual Admin, 2018): Reduced bottlenecks by 20%.
- Projects:
  * DecodeDx: Translated clinical workflow insights into product redesigns for an AI health platform, successfully reducing user drop-off by 25%.

Keep answers concise (under 4 sentences).
`;

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      // Call Gemini API dynamically
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const apiResponse = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${SYSTEM_PROMPT}\n\nVisitor Question: ${message}` }]
            }
          ]
        })
      });

      if (apiResponse.ok) {
        const data = await apiResponse.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (responseText) {
          return NextResponse.json({ response: responseText.trim() });
        }
      }
    }

    // Fallback fuzzy search RAG mechanism (Offline/Mock Mode)
    const query = message.toLowerCase();
    let responseText = KNOWLEDGE_BASE.default;

    if (query.includes("churn") || query.includes("risk") || query.includes("rescue") || query.includes("save")) {
      responseText = KNOWLEDGE_BASE.churn;
    } else if (query.includes("nrr") || query.includes("expansion") || query.includes("growth") || query.includes("expand") || query.includes("revenue") || query.includes("grow")) {
      responseText = KNOWLEDGE_BASE.nrr;
    } else if (query.includes("onboard") || query.includes("time") || query.includes("activation") || query.includes("implement")) {
      responseText = KNOWLEDGE_BASE.onboarding;
    } else if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("history") || query.includes("company") || query.includes("seekthem") || query.includes("meditab")) {
      responseText = KNOWLEDGE_BASE.experience;
    } else if (query.includes("skill") || query.includes("expert") || query.includes("tool") || query.includes("stack")) {
      responseText = KNOWLEDGE_BASE.skills;
    } else if (query.includes("playbook") || query.includes("project") || query.includes("portfolio") || query.includes("decodedx")) {
      responseText = KNOWLEDGE_BASE.projects;
    }

    return NextResponse.json({ response: responseText });
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json({ response: KNOWLEDGE_BASE.default });
  }
}
