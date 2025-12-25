"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, Activity } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#05080a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition-all">
            <ShieldCheck className="text-blue-500" size={28} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            Medi<span className="text-blue-500">Chain</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about_us" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/profile_setup" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Profile setup
          </Link>
          <Link
            href="/support"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all"
          >
            Get AI Support
          </Link>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Web3 Active</span>
          </div>
        </div>

        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#05080a] border-b border-white/10 p-6 space-y-6 animate-in slide-in-from-top duration-300">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="block text-lg font-medium text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about_us" 
              className="block text-lg font-medium text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
             <Link 
              href="/profile_setup" 
              className="block text-lg font-medium text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Profile setup
            </Link>
            <Link
            href="/ai-support"
            className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all"
            onClick={() => setIsOpen(false)}
          >
            Get AI Support
            </Link>
          </div>
          
          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 text-emerald-500">
              <Activity size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Network Connected</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;