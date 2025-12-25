// "use client";

// import Layout from "../layout";
// import { motion } from "framer-motion";
// import { ShieldCheck, Eye, HeartPulse, Zap, Users, Globe } from "lucide-react";


// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   }
// };

// const AboutPage = () => {
//   return (

//       <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
        

//         <section className="relative pt-32 pb-20 px-6">

//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

//           <motion.div 
//             className="max-w-4xl mx-auto text-center"
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             <motion.span 
//               variants={fadeInUp}
//               className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
//             >
//               Our Mission
//             </motion.span>
            
//             <motion.h1 
//               variants={fadeInUp}
//               className="mt-8 text-5xl md:text-7xl font-black tracking-tighter leading-none"
//             >
//               Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Internet of Health.</span>
//             </motion.h1>

//             <motion.p 
//               variants={fadeInUp}
//               className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light"
//             >
//               MediChain was born from a simple realization: your medical records are the most private 
//               data you own, yet you are the one with the least control over them. Were changing that.
//             </motion.p>
//           </motion.div>
//         </section>

//         <section className="max-w-7xl mx-auto px-6 py-24">
//           <motion.div 
//             className="grid md:grid-cols-3 gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <ValueCard 
//               icon={<ShieldCheck className="text-emerald-400" size={32} />}
//               title="Immutable Security"
//               desc="Once your record is stored, it cannot be deleted or altered by any institution. It is cryptographically sealed."
//             />
//             <ValueCard 
//               icon={<Eye className="text-blue-400" size={32} />}
//               title="Absolute Transparency"
//               desc="Every time your data is viewed, a permanent log is created. You see who accessed your file, when, and why."
//             />
//             <ValueCard 
//               icon={<HeartPulse className="text-purple-400" size={32} />}
//               title="Patient Sovereignty"
//               desc="You hold the private keys. Doctors must request access, and you can revoke it instantly with one tap."
//             />
//           </motion.div>
//         </section>

//         <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-5xl font-bold mb-6">Revolutionizing Data Access</h2>
//               <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
//                 <p>
//                   MediChain is a blockchain-based platform that gives users full control over their medical data. 
//                   Unlike traditional systems where records are scattered across various hospitals, 
//                   MediChain centralizes access through a decentralized ledger.
//                 </p>
//                 <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 italic text-white/80">
//                   <Zap className="text-yellow-500 shrink-0" />
//                   <div>
//                     <p className="font-bold">Painless Access</p>
//                     <p className="text-sm text-gray-400">
//                       MediChain allows users to grant access to their data to any institution, anywhere, instantly. No more paperwork, no more delays.
//                     </p>
//                   </div>
//                 </div>
//                 <p>
//                   Users can grant and revoke access to doctors, researchers, or institutions anytime. 
//                   Security, privacy, and transparency are not just features—they are our top priorities.
//                 </p>
//               </div>
//             </motion.div>

//             <div className="relative h-[400px] flex items-center justify-center">
//                <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
//                <motion.div 
//                  animate={{ y: [0, -20, 0] }}
//                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                  className="grid grid-cols-2 gap-4"
//                >
//                   <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center">
//                     <Users size={40} className="text-blue-400 mb-2" />
//                     <span className="font-bold text-2xl">5M+</span>
//                     <span className="text-xs text-gray-500">Records</span>
//                   </div>
//                   <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center mt-12">
//                     <Globe size={40} className="text-purple-400 mb-2" />
//                     <span className="font-bold text-2xl">全球</span>
//                     <span className="text-xs text-gray-500">Global</span>
//                   </div>
//                </motion.div>
//             </div>
//           </div>
//         </section>

//         <section className="max-w-5xl mx-auto px-6 py-32 text-center">
//           <div className="p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden group">
//             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
//             <div className="relative z-10">
//               <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to own your data?</h2>
//               <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">Join the decentralized healthcare revolution today.</p>
//               <button 
//               onClick={() => router.push("/profile_setup")}
//               className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
//                 Create Your Profile
//               </button>
//             </div>
//           </div>
//         </section>

//       </div>
//   );
// };

// const ValueCard = ({ icon, title, desc }) => (
//   <motion.div 
//     variants={fadeInUp}
//     whileHover={{ y: -10 }}
//     className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500"
//   >
//     <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5">
//       {icon}
//     </div>
//     <h3 className="text-2xl font-bold mb-4">{title}</h3>
//     <p className="text-gray-500 leading-relaxed">{desc}</p>
//   </motion.div>
// );

// export default AboutPage;



"use client";

// 1. IMPORT useRouter
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import { ShieldCheck, Eye, HeartPulse, Zap, Users, Globe } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const AboutPage = () => {
  // 2. INITIALIZE the router
  const router = useRouter();

  return (
      <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
        
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
            >
              Our Mission
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="mt-8 text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Internet of Health.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light"
            >
              MediChain was born from a simple realization: your medical records are the most private 
              data you own, yet you are the one with the least control over them. We are changing that.
            </motion.p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ValueCard 
              icon={<ShieldCheck className="text-emerald-400" size={32} />}
              title="Immutable Security"
              desc="Once your record is stored, it cannot be deleted or altered by any institution. It is cryptographically sealed."
            />
            <ValueCard 
              icon={<Eye className="text-blue-400" size={32} />}
              title="Absolute Transparency"
              desc="Every time your data is viewed, a permanent log is created. You see who accessed your file, when, and why."
            />
            <ValueCard 
              icon={<HeartPulse className="text-purple-400" size={32} />}
              title="Patient Sovereignty"
              desc="You hold the private keys. Doctors must request access, and you can revoke it instantly with one tap."
            />
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Revolutionizing Data Access</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  MediChain is a blockchain-based platform that gives users full control over their medical data. 
                  Unlike traditional systems where records are scattered across various hospitals, 
                  MediChain centralizes access through a decentralized ledger.
                </p>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 italic text-white/80">
                  <Zap className="text-yellow-500 shrink-0" />
                  <div>
                    <p className="font-bold">Painless Access</p>
                    <p className="text-sm text-gray-400">
                      MediChain allows users to grant access to their data to any institution, anywhere, instantly. No more paperwork, no more delays.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative h-[400px] flex items-center justify-center">
               <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="grid grid-cols-2 gap-4"
               >
                  <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center">
                    <Users size={40} className="text-blue-400 mb-2" />
                    <span className="font-bold text-2xl">5M+</span>
                    <span className="text-xs text-gray-500">Records</span>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center mt-12">
                    <Globe size={40} className="text-purple-400 mb-2" />
                    <span className="font-bold text-2xl">全球</span>
                    <span className="text-xs text-gray-500">Global</span>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
          <div className="p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to own your data?</h2>
              <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">Join the decentralized healthcare revolution today.</p>
              
              {/* 3. FIXED ONCLICK AND PATH */}
              <button 
                onClick={() => router.push("/profile_setup")}
                className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                Create Your Profile
              </button>
            </div>
          </div>
        </section>

      </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500"
  >
    <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </motion.div>
);

export default AboutPage;