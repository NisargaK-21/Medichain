🏥 MediChain | Decentralized Healthcare Ecosystem
Empowering Patients through Blockchain Sovereignty and AI-Driven Support.

MediChain is a Next.js-powered decentralized platform that redefines medical record management. By combining the immutability of Ethereum-based smart contracts with the intelligence of Google Gemini AI, we provide a secure, transparent, and patient-centric healthcare experience.

<div align="center">

🌐 Explore the Live Demo:https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/

</div>

📺 Project Showcase
🛠 UI Preview
The MediChain dashboard utilizes a Glassmorphic design with real-time blockchain sync.

🎥 Live Walkthrough
Onboarding: Connect your Ethereum wallet (MetaMask).
Identity: Set up your profile—stored securely via smart contracts.
AI Sentinel: Chat with our Gemini-powered assistant for privacy advice or platform help.
Records: Upload medical document hashes and manage doctor access permissions.



## 📂 Project Structure
medichain-website/
├── app/                    # Next.js 14 App Router
│   ├── api/                # Backend API Routes
│   │   └── chat/           # Gemini AI Integration logic
│   ├── support/            # AI Sentinel Support Page
│   ├── dashboard/          # Patient/Doctor Management UI
│   ├── profile_setup/      # User onboarding flows
│   ├── components/         # Reusable UI (Navbar, Sidebar, Buttons)
│   ├── globals.css         # Tailwind & Global Styles
│   └── layout.js           # Root Layout with Navigation
├── contracts/              # Blockchain logic
│   └── MediChain.sol       # Core Smart Contract (Solidty)
├── public/                 # Static assets (Images, Icons)
├── .env.local              # Local Environment Variables (Secret)
├── jsconfig.json           # JavaScript Configuration
├── next.config.mjs         # Next.js Configuration
├── package.json            # Dependencies & Scripts
└── README.md               # Project Documentation



Technical Architecture
1. The Blockchain Layer (Solidity)
MediChain.sol: Handles user registration, document hashing, and permissioned access control.

Gas Efficiency: Optimized for Polygon/Ethereum Layer 2 to ensure low-cost transactions for patients.

2. The AI Sentinel (Google Gemini)
Integrated via app/api/chat using the Gemini 1.5 Flash model.

Provides real-time assistance regarding medical privacy, blockchain mechanics, and platform navigation.

3. Frontend & UI (Next.js & Tailwind)
Glassmorphic Design: A futuristic theme built with Tailwind CSS.
Framer Motion: Smooth, high-performance animations for a premium user experience.



Tech Stack
Framework: Next.js 14
Styling: Tailwind CSS
Animations: Framer Motion
Intelligence: Google Gemini AI
Smart Contracts: Solidity
Icons: Lucide React


Security & Privacy
On-Chain Verification: Only the hash of the medical document is stored on the blockchain.
Off-Chain Storage: Actual documents remain encrypted, preventing data leaks.
Patient Control: Patients can revoke doctor access at any time via a Smart Contract call.


