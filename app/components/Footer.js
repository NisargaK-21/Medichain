"use client";

import { ShieldCheck, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#05080a] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <ShieldCheck className="text-blue-500" size={24} />
              MediChain
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering patients through decentralized medical identity. Your health, your data, your control.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/records" className="hover:text-white transition-colors">Medical Vault</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Authorized Providers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security Audit</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Network Status</h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-500 font-bold uppercase tracking-tighter">Mainnet Live</span>
              </div>
              <p className="text-[10px] leading-tight text-gray-500">
                Nodes active across 14 regions ensuring 99.9% uptime for medical records.
              </p>
              <button className="mt-3 text-[10px] font-bold text-blue-400 flex items-center gap-1 hover:underline">
                View Explorer <ExternalLink size={10} />
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest">
          <p>© 2025 MediChain Protocol. Built on Ethereum.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance (HIPAA)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;