"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { 
  ShieldCheck, 
  FileText, 
  Activity, 
  User, 
  Clock, 
  Lock,
  Search,
  PlusCircle,
  ExternalLink,
  ShieldAlert,
  HardDrive
} from "lucide-react";
import Link from "next/link";

const ProfileStat = ({ label, value }) => (
  <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
    <p className="text-gray-500 text-[9px] uppercase font-bold tracking-wider">{label}</p>
    <p className="font-bold text-sm text-white">{value}</p>
  </div>
);

const HistoryItem = ({ title, time, active }) => (
  <div className={`flex justify-between items-center text-xs p-3 rounded-xl border-l-2 transition-all ${
    active ? 'border-emerald-500 bg-emerald-500/5' : 'border-gray-700 bg-white/5'
  }`}>
    <p className="font-medium truncate mr-2">{title}</p>
    <p className="text-gray-500 whitespace-nowrap">{time}</p>
  </div>
);

export default function DashboardPage() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const records = [
    { id: "REC-091", type: "Blood Test", clinic: "City Hospital", date: "Dec 20, 2025", status: "Verified" },
    { id: "REC-088", type: "X-Ray Scan", clinic: "Radiology Center", date: "Nov 15, 2025", status: "Encrypted" },
    { id: "REC-072", type: "MRI Report", clinic: "Neural Health", date: "Oct 02, 2025", status: "Verified" },
  ];

  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (typeof window !== "undefined" && window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_accounts", []);
          if (accounts.length > 0) setWalletAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Connection Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkConnection();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#05080a] flex items-center justify-center text-blue-500 font-mono text-sm tracking-widest">
        INITIALIZING VAULT...
      </div>
    );
  }

  if (!walletAddress) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
        <div className="p-4 bg-red-500/10 rounded-full mb-6">
          <ShieldAlert className="text-red-500" size={48} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Unauthorized Access</h2>
        <p className="text-gray-400 mb-8 max-w-xs text-sm">
          No wallet connection detected. Please return to the homepage to authenticate.
        </p>
        <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
          Return to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080a] text-slate-200">
      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl text-white">
            <ShieldCheck className="text-blue-500" /> MediChain
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black">Secure Node</p>
              <p className="text-xs font-mono text-emerald-400">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white/20" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 via-transparent to-transparent border border-white/10 relative overflow-hidden">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">Health Dashboard</h1>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-8">
                Your medical records are fragmented and stored across decentralized nodes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all">
                  <PlusCircle size={18} /> New Record
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-sm font-bold border border-white/10">
                  Manage Access
                </button>
              </div>
          </div>
          
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center">
            <div className="p-4 bg-emerald-500/10 rounded-3xl mb-4 text-emerald-400">
              <Activity size={32} />
            </div>
            <h3 className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Health Score</h3>
            <p className="text-4xl font-black text-white leading-none">98<span className="text-sm text-gray-500 ml-1">/100</span></p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="text-blue-400" size={22} /> Recent History
            </h2>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Search encrypted files..." 
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-all" 
              />
            </div>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-[10px] uppercase border-b border-white/5 tracking-widest">
                  <th className="pb-5 font-bold">Record ID</th>
                  <th className="pb-5 font-bold">Type</th>
                  <th className="pb-5 font-bold">Provider</th>
                  <th className="pb-5 font-bold">Date</th>
                  <th className="pb-5 font-bold">Status</th>
                  <th className="pb-5 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {records.map((rec) => (
                  <tr key={rec.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 font-mono text-blue-400 text-xs">{rec.id}</td>
                    <td className="py-5 font-semibold text-gray-200">{rec.type}</td>
                    <td className="py-5 text-gray-400">{rec.clinic}</td>
                    <td className="py-5 text-gray-400">{rec.date}</td>
                    <td className="py-5">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase">
                        {rec.status}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all">
                        <ExternalLink size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {records.map((rec) => (
              <div key={rec.id} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-mono text-blue-400 mb-1">{rec.id}</p>
                    <h4 className="font-bold text-white text-base">{rec.type}</h4>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase">
                    {rec.status}
                  </span>
                </div>
                <div className="flex justify-between items-end pt-2 border-t border-white/5">
                  <div className="text-[11px] text-gray-500 space-y-0.5">
                    <p className="font-medium text-gray-400">{rec.clinic}</p>
                    <p>{rec.date}</p>
                  </div>
                  <button className="p-2.5 bg-blue-600/10 rounded-xl text-blue-400">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <User size={20} className="text-purple-400" /> Patient Info
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ProfileStat label="Blood Type" value="O Positive" />
              <ProfileStat label="Allergies" value="Penicillin" />
              <ProfileStat label="Age" value="28 Years" />
              <ProfileStat label="Height" value="178 cm" />
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Clock size={20} className="text-emerald-400" /> Recent Access
            </h3>
            <div className="space-y-4">
              <HistoryItem title="Dr. Smith requested MRI" time="10m ago" active />
              <HistoryItem title="Laboratory uploaded Blood Test" time="Yesterday" />
              <HistoryItem title="Vault key updated via MetaMask" time="3 days ago" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}