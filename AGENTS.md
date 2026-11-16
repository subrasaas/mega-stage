# AGENTS.md — MegaStage Web Portal & Admin Control

Guidelines and architectural contracts for AI coding assistants working in the **`mega-stage-web`** repository.

---

## 1. Scope & Ecosystem Relationship (CRITICAL)

* **Dual-Repository Architecture:** This repository (`mega-stage-web`) is the official static web portal and remote admin control plane for the MegaStage desktop application.
  1. **`mega-stage/` (Desktop App):** 100% self-contained local Electron desktop video editor.
  2. **`mega-stage-web/` (This Repository):** Static Next.js web portal hosted on **GitHub Pages** at `megastage.subraspaceai.com`.
* **100% Free Hosting:** Hosted on GitHub Pages with zero cloud bills. Uses Next.js with static site export (`output: 'export'`).
* **Do NOT Commit Without Explicit User Permission:** Never run `git commit` or `git push` unless the user explicitly tells you to commit.

---

## 2. Key Responsibilities of This Repository

1. **Product Landing Page (`/`):**
   * High-converting, developer-friendly showcase of MegaStage features (Offline Faster-Whisper subtitles, Kokoro TTS voice cast, 3D character diorama, zero cloud subscriptions).
   * OS-detecting primary download button targeting GitHub Releases in `mega-stage`.
2. **Remote Feature Flags (`public/config/features.json`):**
   * Acts as the remote configuration source for the desktop app (`https://megastage.subraspaceai.com/config/features.json`).
   * Allows toggling unreleased/experimental features on or off without forcing users to update desktop builds.
3. **Design System & UI Theme (Neumorphism / Soft UI):**
   * The visual language uses **Dark Neumorphism (Soft UI)**: dual-tone shadows with embossed (raised) elements for cards/buttons (`box-shadow: 8px 8px 18px ... -6px -6px 14px ...`) and debossed (inset) cavities for badges, pills, and input wells (`box-shadow: inset 4px 4px 10px ...`).
   * Color tokens: Obsidian canvas (`#0e121a`), elevated slate cards (`#151b28`), and cyan accent highlights (`#35d9e6`).
4. **Documentation & Tutorials (`/tutorials`):**
   * Web-accessible mirrors of guides from `mega-stage/docs/tutorials/`.

---

## 3. Deployment & Domain Contract

* **Domain:** `megastage.subraspaceai.com` mapped via `public/CNAME`.
* **CI/CD:** Automated GitHub Pages deployment on push to `main` via `.github/workflows/deploy.yml`.
* **Static Export Requirement:** Every page must be compatible with static HTML generation (`next build` $\rightarrow$ `out/`). Do not use server-side runtime APIs (such as `getServerSideProps` or dynamic Node.js middleware).
