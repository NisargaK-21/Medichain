"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Activity, ArrowRight, Database, 
  CheckCircle, Globe, Cpu, Zap, Users, ShieldAlert,
  FileText, HardDrive, Smartphone, ChevronDown, ShieldCheck
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const StatItem = ({ label, value, icon }) => (
  <div className="text-center lg:text-left space-y-1">
    <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400">
      {icon}
      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{label}</span>
    </div>
    <p className="text-2xl font-bold text-white tracking-tighter">{value}</p>
  </div>
);

const StepCard = ({ num, title, desc, icon }) => (
  <div className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-600/20 transition-colors">
        {icon}
      </div>
      <span className="text-4xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">{num}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3 group">
    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/30 transition-all">
      <CheckCircle size={12} className="text-blue-400" />
    </div>
    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#020617] text-white min-h-screen pt-20">

      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />


      <motion.section
        className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400">
          Decentralized Health Protocol v2.0
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-[1.1]">
          Your Health. <br /> Your Data. <br /> Your Control.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          MediChain fragments your records across a decentralized network. Secure your history on <b>IPFS</b> and verify authenticity on the <b>Blockchain</b>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-24">
          <Link href="/Login">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl shadow-blue-600/20">
              Launch Vault <ArrowRight size={20} />
            </button>
          </Link>
          
          <Link href="#how-it-works">
            <button className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all backdrop-blur-sm">
              How it Works
            </button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <StatItem label="Active Patients" value="42,000+" icon={<Users size={18}/>} />
          <StatItem label="Storage Nodes" value="1,840" icon={<HardDrive size={18}/>} />
          <StatItem label="Verified Records" value="1.2M" icon={<FileText size={18}/>} />
          <StatItem label="Security Score" value="99.9%" icon={<Shield size={18}/>} />
        </motion.div>
      </motion.section>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 scroll-mt-28">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The Process</h2>
            <p className="text-gray-400 text-lg">We have simplified medical interoperability into three secure steps.</p>
          </div>
          <div className="hidden md:block p-4 bg-white/5 border border-white/10 rounded-2xl text-emerald-500">
             <Activity className="animate-pulse" size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard 
            num="01"
            title="Upload & Shred"
            desc="Files are locally encrypted and shredded into packets before leaving your device."
            icon={<Cpu className="text-blue-400" size={24} />}
          />
          <StepCard 
            num="02"
            title="IPFS Distribution"
            desc="Your packets are stored across the global IPFS network. No single hospital owns the server."
            icon={<Zap className="text-yellow-400" size={24} />}
          />
          <StepCard 
            num="03"
            title="Blockchain Hash"
            desc="A cryptographic 'fingerprint' is stored on-chain. Doctors verify this hash instantly."
            icon={<ShieldCheck className="text-emerald-400" size={24} />}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32 bg-white/[0.01] rounded-[4rem] border border-white/5 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Decentralized Security</h2>
            <p className="text-gray-400 mb-10 text-lg">Traditional databases are massive targets for ransomware. MediChain fragments your data.</p>
            <div className="space-y-4">
              <FeatureItem text="Patient-Owned Private Keys" />
              <FeatureItem text="Immutable Audit Logs" />
              <FeatureItem text="Zero-Knowledge Proofs" />
              <FeatureItem text="HIPAA & GDPR Compliant" />
            </div>
          </div>
          <div className="p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-6">
              <div className="flex justify-between items-center p-5 bg-red-500/10 border border-red-500/20 rounded-2xl opacity-50">
                <p className="text-red-500 font-bold text-sm uppercase">Traditional Cloud</p>
                <ShieldAlert className="text-red-500" size={20} />
              </div>
              <div className="flex justify-between items-center p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl scale-105 shadow-2xl shadow-emerald-500/10">
                <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest">MediChain Protocol</p>
                <CheckCircle className="text-emerald-500" size={24} />
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}