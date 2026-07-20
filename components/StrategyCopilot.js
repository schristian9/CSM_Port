"use client";

import { useEffect, useRef, useState } from "react";

export default function StrategyCopilot() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Hello! I am Sarlinson's AI Strategy Copilot. Ask me questions about my customer success strategy, retention frameworks, net revenue retention (NRR) playbooks, or career achievements."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const presets = [
    "How do you rescue accounts from high-risk churn?",
    "What is your strategy for driving NRR growth?",
    "How do you speed up customer onboarding?",
    "Tell me about your professional background."
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "system", content: data.response }]);
    } catch (err) {
      console.error(err);
      // Fallback in case of server failure
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content: "Sorry, I am having trouble connecting to my brain right now. However, you can see my retention playbooks above or contact me directly on LinkedIn!"
          }
        ]);
      }, 800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="copilot" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="zine-badge mb-3">CUSTOM INTELLECT API</div>
          <h3 className="text-3xl md:text-5xl font-display font-black text-[#364C84] uppercase leading-none">
            CS Strategy Copilot
          </h3>
        </div>
        <p className="text-sm font-mono text-[#95B1EE] max-w-xs md:text-right uppercase">
          ✦ Talk to my AI deputy to audit my strategic knowledge base.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Instructions & Suggestion Chips */}
        <div className="lg:col-span-4 flex flex-col justify-between zine-card bg-[#FFFDF5] p-8">
          <div>
            <h4 className="font-display font-black text-xl uppercase text-[#364C84] mb-4">
              Ask Me Anything
            </h4>
            <p className="text-xl text-[#364C84] font-medium leading-relaxed mb-6 font-sans">
              Test my expertise in real-time. This chatbot is loaded with my core frameworks, retention philosophy, and career metrics to simulate a strategic interview.
            </p>
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#95B1EE] font-bold block uppercase tracking-wide">
                Quick Prompts
              </span>
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(preset)}
                  disabled={loading}
                  className="w-full text-left p-3 border border-[#364C84] bg-[#E7F1A8] hover:bg-[#F5F2EB] font-mono text-xs text-[#364C84] transition-all flex justify-between items-center shadow-[1px_1px_0px_0px_rgba(27,28,30,1)] disabled:opacity-50"
                >
                  <span>{preset}</span>
                  <span className="text-[#95B1EE]">➔</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#364C84] mt-8 pt-4 font-mono text-[10px] text-gray-500 uppercase">
            [ ENGINE: GEMINI AI CLOUD AGENT ]
          </div>
        </div>

        {/* Right Side: Chat Container */}
        <div className="lg:col-span-8 zine-card bg-[#E7F1A8] flex flex-col h-[500px]">
          {/* Top Info Bar */}
          <div className="border-b-2 border-[#364C84] p-4 flex justify-between items-center bg-[#FFFDF5]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">[ CO-PILOT ACTIVE ]</span>
            </div>
            <span className="font-mono text-xs text-gray-400">RAG_KNOWLEDGE_STORE_V1</span>
          </div>

          {/* Messages Display */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FFFDF5] grid-bg bg-opacity-20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-4 zine-border shadow-[2px_2px_0px_0px_rgba(27,28,30,1)] ${
                    msg.role === "user"
                      ? "bg-[#95B1EE] text-white border-[#364C84]"
                      : "bg-[#E7F1A8] text-[#364C84]"
                  }`}
                >
                  <div className="flex justify-between items-center border-b border-[#364C84]/20 pb-1.5 mb-2 text-[9px] font-mono tracking-widest uppercase opacity-75">
                    <span>{msg.role === "user" ? "USER | RECRUITER" : "CO-PILOT | SARLINSON"}</span>
                  </div>
                  <p className="text-base font-sans leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#E7F1A8] p-4 zine-border shadow-[2px_2px_0px_0px_rgba(27,28,30,1)] min-w-[120px] flex items-center justify-center py-6">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t-2 border-[#364C84] p-4 flex gap-4 bg-[#FFFDF5]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question (e.g. 'What is your NRR target?')..."
              disabled={loading}
              className="flex-1 px-4 py-3 border-2 border-[#364C84] bg-[#E7F1A8] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#95B1EE] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="zine-btn px-6 py-3 text-xs tracking-wider uppercase disabled:opacity-50 shrink-0"
            >
              SEND ➔
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
