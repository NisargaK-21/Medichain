# MediChain - Decentralized Healthcare Platform

**Live Demo:** [https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/](https://medichain-website.vercel.app/)

## What is MediChain?

MediChain is a decentralized healthcare platform where patients control their medical records using blockchain and AI. Instead of centralized hospitals storing your data, you own it on the blockchain.

- **Decentralized Records**: Medical record hashes stored on Ethereum blockchain
- **Patient Control**: Grant/revoke doctor access instantly via smart contracts
- **AI Assistant**: Gemini-powered chatbot for medical privacy guidance
- **Secure & Private**: Only hashes on-chain, documents encrypted off-chain
- **Immutable**: All transactions permanently recorded on blockchain

---

## ✨ Features

### 🔐 Core Features
- **Ethereum Wallet Integration** - Connect securely via MetaMask
- **Smart Profile Management** - Create and manage your healthcare identity
- **Document Management** - Upload and manage medical record hashes
- **Access Control** - Grant/revoke doctor permissions with granular control
- **AI Sentinel Assistant** - 24/7 AI support for privacy guidance and platform navigation
- **Real-Time Blockchain Sync** - Live updates of all on-chain activities

### 🎨 User Experience
- **Glassmorphic Design** - Modern, futuristic UI with smooth gradients
- **Responsive Layout** - Seamless experience across all devices
- **High-Performance Animations** - Powered by Framer Motion
- **Intuitive Navigation** - Patient-centric interface design

### 🔒 Security Features
- **On-Chain Hashing** - Medical documents stored as immutable hashes
- **Off-Chain Encryption** - Actual documents encrypted and secured externally
- **Smart Contract Verification** - Blockchain-verified transactions
- **Access Revocation** - Instant permission revocation capability

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **AI Integration** | Google Gemini 1.5 Flash |
| **Smart Contracts** | Solidity (Ethereum/Polygon) |
## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion
- **Blockchain**: Solidity (Ethereum/Polygon)
- **AI**: Google Gemini 1.5 Flash
- **Web3**: MetaMask integration
- **Icons**: Lucide React

## Features

1. **Connect Wallet** - MetaMask integration for secure authentication
2. **Patient Profile** - Set up healthcare identity on blockchain
3. **Medical Records** - Upload & manage document hashes securely
4. **Access Control** - Grant/revoke doctor permissions instantly
5. **AI Chat** - Get medical privacy guidance from Gemini AI
6. **Dashboard** - Real-time view of records and blockchain transactions

## How It Works

**Architecture:**
- **Smart Contract** (MediChain.sol) - Handles user registration, document hashing, access control
- **Frontend** (Next.js) - User interface with glassmorphic design
- **AI Assistant** - Gemini-powered support for medical privacy questions

**Workflow:**
1. Patient connects MetaMask wallet
2. Creates profile stored on blockchain
3. Uploads medical documents (only hashes go on-chain)
4. Can grant/revoke doctor access anytime
5. AI assistant provides privacy guidance

## Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add to .env.local:
# NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
# NEXT_PUBLIC_RPC_URL=your_rpc_url_here

# Run development server
npm run dev
```

Open http://localhost:3000

## Security

- **Hashing**: Only cryptographic hashes stored on blockchain
- **Encryption**: Actual documents encrypted and stored off-chain
- **Smart Contracts**: Immutable access control logic
- **Revocation**: Instant access removal capability
- **Audit Trail**: Complete transaction history on blockchain

## Project Structure

```
app/
  ├── api/chat/           # Gemini AI integration
  ├── dashboard/          # Patient/doctor interface
  ├── profile_setup/      # Onboarding flow
  ├── support/            # AI assistant page
  └── components/         # Reusable UI components
MediChain.sol             # Smart contract
public/                   # Static assets
```

## Smart Contract

`MediChain.sol` handles:
- User registration
- Document hash storage
- Access permissions
- Doctor authorization
- Transaction logging

Deployed on Ethereum/Polygon with gas optimization for low costs.

## Future Enhancements

- Multi-signature authorization for sensitive operations
- IPFS integration for encrypted document storage
- Mobile app for iOS/Android
- Insurance provider integration
- Telemedicine features

## Team

Built for decentralized healthcare 🏥⛓️

---

**Live:** https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/


---


