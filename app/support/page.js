"use client";

import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

export default function Home() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  async function getInfo() {
    if (!query.trim()) return;

    const userMsg = {
      role: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an health expert.
Explain everythin in a very simple, kid-friendly way.
User question: ${query}
Conversation history:
${messages.map((m) => `${m.role}: ${m.text}`).join("\n")}
        `,
      });

      const aiMsg = {
        role: "bot",
        text: response.text,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#020617] text-white flex items-center justify-center p-6 overflow-hidden">

      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-xl bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl flex flex-col h-[80vh] overflow-hidden">

        <div className="p-6 border-b border-white/5 bg-white/[0.01]">
          <div className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400">
            Secure AI Support
          </div>
          <h1 className="text-2xl font-black tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Ai support
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/20"
                    : "bg-white/[0.05] border border-white/10 text-gray-300 rounded-tl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/[0.05] border border-white/10 px-5 py-3 rounded-2xl rounded-tl-none animate-pulse text-blue-400 text-xs font-bold uppercase tracking-widest">
                System Processing...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white/[0.01] border-t border-white/5 flex gap-3">
          <input
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600"
            placeholder="Ask here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getInfo()}
          />
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20"
            onClick={getInfo}
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}