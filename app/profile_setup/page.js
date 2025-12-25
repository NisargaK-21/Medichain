"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  Heart, 
  Dna, 
  Scale, 
  Ruler, 
  ShieldCheck, 
  ArrowLeft, 
  Save,
  AlertCircle,
  Stethoscope
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const InputGroup = ({ label, name, type = "text", placeholder, icon, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1 flex items-center gap-2">
      {icon} {label}
    </label>
    <input 
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-gray-600"
    />
  </div>
);

export default function ProfileSetupPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
    allergies: "",
    emergencyContact: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#05080a] text-slate-200 pb-12 relative overflow-hidden">

      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} /> <span className="hidden sm:inline">Cancel</span>
          </button>
          <div className="flex items-center gap-2 font-bold text-white uppercase tracking-tighter">
            <ShieldCheck className="text-blue-500" size={20} /> MediChain Identity
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 mt-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-blue-500/10 rounded-2xl text-blue-400 mb-4">
            <Stethoscope size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">Initialize Your Identity</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Link your medical vitals to your wallet. This data is encrypted and only accessible via your private keys.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">

          <section className="p-6 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Basic Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Full Name" name="fullName" placeholder="Enter legal name" value={formData.fullName} onChange={handleChange} />
              <InputGroup label="Age" name="age" type="number" placeholder="Years" value={formData.age} onChange={handleChange} />
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Gender</label>
                <select 
                  name="gender"
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select Gender</option>
                  <option value="male" className="bg-slate-900">Male</option>
                  <option value="female" className="bg-slate-900">Female</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">Blood Group</label>
                <select 
                  name="bloodGroup"
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select Group</option>
                  <option value="A+" className="bg-slate-900">A+</option>
                  <option value="O+" className="bg-slate-900">O+</option>
                  <option value="AB+" className="bg-slate-900">AB+</option>
                  <option value="B+" className="bg-slate-900">B+</option>
                </select>
              </div>
            </div>
          </section>

          <section className="p-6 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Heart size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Medical Vitals</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Height (cm)" name="height" placeholder="180" icon={<Ruler size={14}/>} value={formData.height} onChange={handleChange} />
              <InputGroup label="Weight (kg)" name="weight" placeholder="75" icon={<Scale size={14}/>} value={formData.weight} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1 flex items-center gap-2">
                <Dna size={14} /> Known Allergies / Conditions
              </label>
              <textarea 
                name="allergies"
                placeholder="List any chronic conditions or allergies..."
                rows="3"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-white resize-none"
              ></textarea>
            </div>
          </section>

          <div className="flex flex-col items-center gap-6 pt-6">
            <button 
              type="submit"
              disabled={isSaving}
              className="w-full max-w-md py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95"
            >
              {isSaving ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Encrypting Identity...
                </>
              ) : (
                <><Save size={20} /> Commit to Blockchain</>
              )}
            </button>
            <p className="flex items-center gap-2 text-gray-500 text-xs text-center px-4">
              <AlertCircle size={14} className="shrink-0" /> 
              Initial Setup requires a Gas Fee. Data will be immutable once written.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}