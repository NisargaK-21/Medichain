"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SupportPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: "user", parts: [{ text: userText }] }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: messages }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: "model", parts: [{ text: data.text }] }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "model", parts: [{ text: "Protocol error: Connection timed out. Please check your network." }] }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[85vh] max-w-5xl mx-auto mt-24 mb-10 bg-[#020617] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">

      <div className="px-6 py-4 bg-slate-900/40 border-b border-white/5 flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
            <ShieldCheck className="text-white" size={22} />
          </div>
          <div>
            <h1 className="text-white text-sm font-bold tracking-widest uppercase">MediChain Sentinel</h1>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-[10px] text-slate-400 font-mono">ENCRYPTED_NODE_STABLE</p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-[10px] text-slate-500 font-mono uppercase">Version 1.5.0</p>
        </div>
      </div>


      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center opacity-30">
            <Bot size={48} className="text-slate-500 mb-4" />
            <p className="text-slate-400 font-mono text-xs text-center px-10">
              Authorized personnel only. Query the MediChain protocol for security or record data.
            </p>
          </div>
        )}

        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-md ${
                  msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-800 border border-white/10'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-blue-400" />}
                </div>
                <div className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'
                }`}>
                  {msg.parts[0].text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
              <Loader2 size={16} className="animate-spin text-blue-500" />
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl rounded-tl-none">
              <span className="text-[11px] text-slate-500 font-mono animate-pulse uppercase tracking-widest">Processing Node...</span>
            </div>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSend} className="p-5 bg-slate-900/30 border-t border-white/5">
        <div className="relative max-w-3xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Protocol or Ask Sentinel..."
            className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-5 py-4 outline-none focus:border-blue-600/50 transition-all pr-14 backdrop-blur-md"
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all disabled:opacity-20 flex items-center shadow-lg"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[9px] text-slate-600 mt-3 font-mono tracking-[0.3em] uppercase">
          Neural-Link Encrypted • 256-Bit SSL
        </p>
      </form>
    </div>
  );
}