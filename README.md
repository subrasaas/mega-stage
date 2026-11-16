<p align="center">
  <img src="https://raw.githubusercontent.com/subrasaas/mega-stage/main/public/favicon.ico" alt="MegaStage Logo" width="80" height="80" style="border-radius: 16px;" />
</p>

<h1 align="center">MegaStage Web Portal & Release Hub</h1>

<p align="center">
  <strong>The 100% Free & Local AI Video Editor for Apple Silicon, Windows, and Linux.</strong><br>
  Official portal, download hub, and remote feature configuration plane hosted at <a href="https://megastage.subraspaceai.com"><strong>megastage.subraspaceai.com</strong></a>.
</p>

<p align="center">
  <a href="https://github.com/subrasaas/mega-stage/actions"><img src="https://img.shields.io/github/actions/workflow/status/subrasaas/mega-stage/deploy.yml?branch=main&label=Deploy%20Portal&style=flat-square" alt="GitHub Pages Deployment"></a>
  <a href="https://github.com/subrasaas/mega-stage/releases"><img src="https://img.shields.io/github/v/release/subrasaas/mega-stage?style=flat-square&color=35d9e6" alt="Latest Release"></a>
  <a href="https://github.com/subrasaas/mega-stage/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-6ecfa5?style=flat-square" alt="License"></a>
  <a href="https://megastage.subraspaceai.com"><img src="https://img.shields.io/badge/domain-megastage.subraspaceai.com-f27e66?style=flat-square" alt="Live Domain"></a>
</p>

---

## 🌟 Overview

**MegaStage** is a next-generation desktop video editor engineered for creators who demand **complete privacy, zero monthly subscription bills, and lightning-fast local performance**. 

This repository (`subrasaas/mega-stage`) hosts the **official public web portal**, documentation, and release distribution infrastructure for the desktop editor.

### Key Pillars
- **Zero Paid Cloud APIs:** Runs AI models (Faster-Whisper STT, Kokoro 82M TTS, 3D character stages) entirely on local machine hardware (Apple Silicon Metal, NVIDIA CUDA, CPU).
- **Zero Lock-In:** Project files (`.stage`) are stored locally as open, human-readable JSON.
- **Audience-First Policy:** All core editing capabilities, timeline tracks, and voice synthesis features are 100% free to maximize creator adoption.

---

## 🚀 Product Features Showcased

| Feature | Description | Engine |
| :--- | :--- | :--- |
| 🎙️ **Voice Cast Studio** | Multi-character conversational dialogue between Subra AI & Mira | Local Kokoro TTS (24 kHz) |
| 💬 **Kinetic Subtitles** | Word-by-word active pop, rolling teleprompter, and auto-captions | Local Faster-Whisper |
| 🎭 **3D Character Stages** | Low-poly 3D explainer sets with real-time camera angles & flat shading | Three.js + WebGL |
| 🎞️ **Multi-Track Timeline** | Precision scrubbing, clip slicing, zoom, and audio waveforms | 60fps Zustand Clock |
| ⚡ **Hardware Export** | Clean 1080p 60fps MP4/WebM video export directly to disk | Native Chromium / FFmpeg |

---

## 🛠️ Web Architecture & Tech Stack

The web portal is built as a **100% static Next.js export** deployed directly to **GitHub Pages** with custom domain SSL:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static HTML Export)
- **Styling:** Custom CSS Design Tokens matching the MegaStage desktop dark slate palette
- **Hosting:** 100% Free on **GitHub Pages**
- **Domain:** Custom subdomain [`megastage.subraspaceai.com`](https://megastage.subraspaceai.com) via CNAME
- **CI/CD:** Automated GitHub Actions build and deployment pipeline (`.github/workflows/deploy.yml`)

---

## 📂 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD deployment
├── public/
│   ├── CNAME                     # Custom domain: megastage.subraspaceai.com
│   └── config/
│       └── features.json         # Static feature flag configuration for desktop clients
├── src/
│   ├── app/
│   │   ├── globals.css           # Global typography and design system variables
│   │   ├── layout.tsx            # Root layout with SEO and metadata
│   │   └── page.tsx              # High-converting product landing page with OS detection
├── package.json
├── tsconfig.json
└── next.config.js                # Static export configuration (output: 'export')
```

---

## 💻 Local Development

Run the web portal locally:

```bash
# 1. Clone the repository
git clone https://github.com/subrasaas/mega-stage.git
cd mega-stage

# 2. Install dependencies
npm install

# 3. Start local development server (port 3400)
npm run dev

# 4. Visit in browser
# Open http://localhost:3400
```

### Build & Static Verification

```bash
# Generate the production static export into out/
npm run build

# Run TypeScript type safety checks
npm run typecheck
```

---

## ⚙️ Remote Feature Configuration (`features.json`)

MegaStage desktop installations poll `https://megastage.subraspaceai.com/config/features.json` on launch to dynamically configure experimental features and announcements without requiring immediate software rebuilds.

### Schema Contract

```json
{
  "version": "1.0.0",
  "updatedAt": "2026-11-15T00:00:00.000Z",
  "tierPolicy": "all_free",
  "features": {
    "autoSubtitles": true,
    "wordByWordCaptions": true,
    "rollingCaptions": true,
    "puppetStudio": false,
    "video3dDiorama": true,
    "offlineVoiceCast": true,
    "topicBoardPlanning": true,
    "experimentalTimeline": false
  },
  "announcements": {
    "latestVersion": "1.0.0",
    "releaseDate": "2026-11-15",
    "downloadUrl": "https://github.com/subrasaas/mega-stage/releases/latest",
    "notice": "MegaStage v1.0.0 is officially released! 100% Free & Local Desktop Studio."
  }
}
```

*Note: Feature flags are maintained directly via Git in `public/config/features.json`. Modifying and pushing to `main` automatically updates all desktop installations.*

---

## 📦 Releases & Downloads

Binaries are published on the **[GitHub Releases Page](https://github.com/subrasaas/mega-stage/releases)**:

* **macOS Apple Silicon:** `.dmg` (Optimized for Apple M-series Metal)
* **Windows 64-bit:** `.exe` installer
* **Linux:** `.AppImage` / `.deb`

---

## 📄 License

This web portal is open source and available under the [MIT License](LICENSE).
MegaStage Desktop Studio © 2026 SubraSaaS Studio. All rights reserved.
