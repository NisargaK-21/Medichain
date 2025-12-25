"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { Wallet, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  const connectWallet = async () => {
    setError("");
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);

        setWalletAddress(accounts[0]);
      } catch (err) {
        setError("User denied account access or error occurred.");
      }
    } else {
      setError("Please install MetaMask to access your medical vault.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-md p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl text-center">
        <div className="mb-6 p-4 inline-block rounded-2xl bg-blue-500/10">
          <ShieldCheck className="text-blue-400" size={48} />
        </div>

        <h1 className="text-3xl font-bold mb-2">Access Your Vault</h1>
        <p className="text-gray-400 mb-8">
          MediChain uses blockchain identity. No passwords, just secure cryptographic keys.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <Wallet size={20} />
            Connect MetaMask
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-xl">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Authenticated Wallet</p>
              <p className="text-emerald-400 font-mono text-sm truncate">{walletAddress}</p>
            </div>
            
            <Link href="/dashboard">
              <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                Enter Dashboard <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        )}

        <p className="mt-8 text-xs text-gray-500">
          By connecting, you agree to MediChains decentralized protocols.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;