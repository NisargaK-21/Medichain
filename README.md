# 🏥 MediChain | Decentralized Healthcare Ecosystem

> Empowering Patients through Blockchain Sovereignty and AI-Driven Support

MediChain is a Next.js-powered decentralized platform that redefines medical record management. By combining the immutability of Ethereum-based smart contracts with the intelligence of Google Gemini AI, we provide a secure, transparent, and patient-centric healthcare experience.

<div align="center">

## 🌐 [Explore Live Demo](https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/)

*https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/*

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technical Architecture](#-technical-architecture)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [How to Use](#-how-to-use)
- [Security & Privacy](#-security--privacy)
- [Smart Contracts](#-smart-contracts)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

MediChain revolutionizes healthcare by creating a decentralized ecosystem where patients maintain complete sovereignty over their medical records. Using blockchain technology and AI-powered assistance, we ensure:

- **Privacy First**: Only document hashes stored on-chain, actual medical records remain encrypted
- **Patient Control**: Full authority over who accesses your medical data
- **AI-Powered Support**: Real-time assistance via Gemini AI for medical privacy guidance
- **Transparent & Immutable**: All transactions and changes recorded on the blockchain

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
| **Icons** | Lucide React |
| **Language** | JavaScript/JSX |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MetaMask or compatible Web3 wallet
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/medichain-website.git
cd medichain-website

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📂 Project Structure

```
medichain-website/
├── app/                         # Next.js 14 App Router
│   ├── api/
│   │   └── chat/               # Gemini AI Integration API
│   ├── about_us/               # About Us Page
│   ├── dashboard/              # Patient/Doctor Dashboard UI
│   ├── support/                # AI Sentinel Support Page
│   ├── profile_setup/          # User Onboarding & Profile Setup
│   ├── Login/                  # Authentication Page
│   ├── components/
│   │   ├── Navbar.js           # Navigation Header
│   │   ├── Footer.js           # Footer Component
│   │   ├── Button.js           # Reusable Button
│   │   ├── Card.js             # Reusable Card
│   │   └── Modal.js            # Modal Dialog
│   ├── globals.css             # Global Styles & Tailwind
│   ├── layout.js               # Root Layout
│   └── page.js                 # Home Page
├── public/                      # Static Assets (Images, Icons, Fonts)
├── MediChain.sol               # Core Smart Contract
├── next.config.mjs             # Next.js Configuration
├── tailwind.config.js          # Tailwind CSS Configuration
├── jsconfig.json               # JavaScript Path Aliases
├── package.json                # Dependencies & Scripts
├── eslint.config.mjs           # ESLint Configuration
├── postcss.config.mjs          # PostCSS Configuration
└── README.md                   # This File
```

---

## 🏗 Technical Architecture

### 1. **The Blockchain Layer (Solidity)**
- **Smart Contract**: `MediChain.sol`
- **Responsibilities**:
  - User registration & identity management
  - Document hash storage and verification
  - Permissioned access control logic
  - Doctor authorization workflows
  - Gas-optimized transactions
- **Network**: Ethereum / Polygon Layer 2 (optimized for low costs)

### 2. **The AI Sentinel (Google Gemini)**
- **Integration**: `app/api/chat/route.js`
- **Model**: Gemini 1.5 Flash
- **Capabilities**:
  - Real-time medical privacy guidance
  - Blockchain mechanics explanation
  - Platform navigation assistance
  - 24/7 patient support

### 3. **Frontend & UI (Next.js + Tailwind)**
- **Design Pattern**: Glassmorphism
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion for smooth transitions
- **State Management**: React Hooks
- **Web3 Integration**: Ethereum provider for wallet connection

---

## 💻 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/medichain-website.git
cd medichain-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Google Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Ethereum/Blockchain Configuration
NEXT_PUBLIC_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/your_key
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...your_contract_address...

# Application
NEXT_PUBLIC_APP_NAME=MediChain
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Note**: Variables prefixed with `NEXT_PUBLIC_` are accessible in the browser. Never expose sensitive keys in these variables.

---

## 🎯 How to Use

### For Patients:
1. **Connect Wallet** - Click "Connect MetaMask" and authorize the connection
2. **Setup Profile** - Complete your identity setup with personal health information
3. **Upload Records** - Add medical document hashes to your secure vault
4. **Grant Access** - Authorize specific doctors to view your records
5. **Chat with AI** - Use the AI Sentinel for medical privacy guidance

### For Doctors:
1. **Connect Wallet** - Connect your Ethereum wallet
2. **Register as Provider** - Complete doctor verification
3. **Access Records** - View patient records they've granted you access to
4. **Manage Permissions** - Handle patient access requests and authorizations

### Features Walkthrough:
- **🔐 Security**: All documents are hashed before blockchain storage
- **📋 Dashboard**: Real-time view of your medical records and permissions
- **🤖 AI Support**: Ask the Gemini-powered assistant any healthcare questions
- **⛓️ Blockchain**: Transparent, immutable record of all transactions

---

## 🔒 Security & Privacy

### Privacy-First Architecture
- **On-Chain Verification**: Only cryptographic hashes of medical documents are stored on the blockchain
- **Off-Chain Storage**: Actual medical documents remain encrypted and stored securely off-chain
- **Zero-Knowledge Proofs**: Potential future integration for enhanced privacy

### Patient Control
- **Granular Permissions**: Grant access at the document level
- **Instant Revocation**: Revoke doctor access at any time via smart contract
- **Audit Trail**: Complete history of all access attempts logged on blockchain
- **Encrypted Communication**: All data transmission uses industry-standard encryption

### Best Practices
- Never share your private keys or seed phrases
- Always verify smart contract addresses before interaction
- Use hardware wallets for high-value transactions
- Enable two-factor authentication where available

---

## ⛓️ Smart Contracts

### MediChain.sol
The core smart contract manages:
- **User Registration**: Stores patient and doctor identities
- **Document Management**: Maintains document hash registry
- **Access Control**: Manages who can view what records
- **Transactions**: Records all state changes immutably

### Deployment
- **Network**: Ethereum / Polygon (Layer 2 for low costs)
- **Language**: Solidity
- **Status**: Live and audited

### Key Functions
```solidity
- registerUser() - Register as patient or doctor
- uploadDocumentHash() - Add a medical record hash
- grantAccess() - Authorize a doctor to view records
- revokeAccess() - Remove doctor authorization
- getDocuments() - Retrieve your medical records
- auditLog() - View transaction history
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Steps to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Development Guidelines
- Follow Next.js best practices
- Use Tailwind CSS for styling
- Write clean, readable code
- Test thoroughly before submitting
- Update documentation as needed

### Reporting Issues
Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/logs if applicable

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For questions, suggestions, or issues:
- 📧 Email: support@medichain.io
- 💬 Chat with AI Sentinel: Visit the Support page on the platform
- 🐛 Report bugs: Create an issue on GitHub
- 💡 Feature requests: Open a discussion on GitHub

---

## 🙏 Acknowledgments

- **Google Gemini** for AI capabilities
- **Ethereum & Polygon** for blockchain infrastructure
- **Next.js & Vercel** for the exceptional framework
- **Tailwind CSS** for beautiful styling utilities
- **Framer Motion** for smooth animations

---

<div align="center">

**[🌐 Visit Live Demo](https://medichain-website-ox4unmz2k-nisarga-s-projects.vercel.app/)**

Made with ❤️ for decentralized healthcare

</div>


