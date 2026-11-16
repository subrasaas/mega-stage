'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [os, setOs] = useState<'mac' | 'windows' | 'linux'>('mac');
  const [downloadUrl, setDownloadUrl] = useState<string>(
    'https://github.com/subrasaas/mega-stage/releases/latest'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes('win')) {
        setOs('windows');
        setDownloadUrl('https://github.com/subrasaas/mega-stage/releases/latest');
      } else if (userAgent.includes('linux')) {
        setOs('linux');
        setDownloadUrl('https://github.com/subrasaas/mega-stage/releases/latest');
      } else {
        setOs('mac');
        setDownloadUrl('https://github.com/subrasaas/mega-stage/releases/latest');
      }
    }
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-pill">
          ✨ 100% Free & Local Desktop Studio — Zero Cloud Bills
        </div>

        <h1 className="hero-title">
          Create Viral Videos with <br />
          <span className="highlight">Local Offline AI & 3D Stage</span>
        </h1>

        <p className="hero-subtitle">
          MegaStage brings professional multi-track editing, local Faster-Whisper automatic subtitles, 
          kinetic word-by-word captions, and 3D character staging right to your desktop. 
          No monthly bills. No cloud uploads. 100% private.
        </p>

        <div className="download-box">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-download-btn"
          >
            <span>⬇ Download MegaStage v1.0.0</span>
            <span style={{ fontSize: '13px', opacity: 0.85 }}>
              ({os === 'mac' ? 'macOS Apple Silicon' : os === 'windows' ? 'Windows' : 'Linux'})
            </span>
          </a>

          <div className="platform-links">
            <span>Also available for:</span>
            <a href="https://github.com/subrasaas/mega-stage/releases/latest" className="platform-link">
              macOS (.dmg)
            </a>
            •
            <a href="https://github.com/subrasaas/mega-stage/releases/latest" className="platform-link">
              Windows (.exe)
            </a>
            •
            <a href="https://github.com/subrasaas/mega-stage/releases/latest" className="platform-link">
              Universal (.zip)
            </a>
          </div>
        </div>
      </section>

      {/* APP PREVIEW CONTAINER */}
      <div className="app-preview-container">
        <div className="app-preview-frame">
          <div className="preview-topbar">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="preview-title">MegaStage 3D Studio & Video Workspace</span>
          </div>

          <div className="preview-hero-stage">
            <img 
              src="/images/stage-studio-hero.jpg" 
              alt="MegaStage 3D Studio Stage" 
              className="preview-stage-img"
            />
          </div>

          <div className="preview-body">
            <div className="preview-feature-card">
              <h3>🗣 Faster-Whisper Speech-to-Text</h3>
              <p>100% offline transcription. High-speed speech detection on your local GPU with zero API calls.</p>
            </div>
            <div className="preview-feature-card">
              <h3>✨ Word by Word & Rolling Styles</h3>
              <p>Dynamic kinetic subtitle presets with active-word scale bounce, glow, and teleprompter roll-in.</p>
            </div>
            <div className="preview-feature-card">
              <h3>🎭 3D Diorama Stage</h3>
              <p>Interactive 3D character staging with Orbit explore, camera choreographies, and topic board animations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CORE FEATURES SECTION */}
      <section id="features" className="section">
        <div className="section-header">
          <span className="section-tag">Powerhouse Architecture</span>
          <h2 className="section-title">Everything you need. Zero monthly fees.</h2>
          <p className="section-desc">
            Unlike cloud video platforms that charge $30 to $60 every month and limit your export minutes, 
            MegaStage runs directly on your machine with zero limits.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Local Speech-to-Text Engine</h3>
            <p>
              Powered by local Faster-Whisper CTranslate2 models (Tiny, Base, Small). 
              Transcribes dialogue across all audio tracks in seconds without sending your voice to external servers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Width-Safe Caption Presets</h3>
            <p>
              Includes Word by Word kinetic pop, Rolling teleprompter, Hormozi Punch, and Dynamic Pill. 
              Automatically segments phrases into width-safe pieces that never spill outside 9:16 mobile screens.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎙</div>
            <h3>Neural Kokoro Voice Cast</h3>
            <p>
              High-fidelity 24 kHz neural speech synthesis running locally on device. 
              Dual-speaker dialogue with Mira (af_bella) and Subra AI (bm_george) with phoneme clock sync.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📐</div>
            <h3>Mathematical Aspect Ratio Clamp</h3>
            <p>
              Instant toggle between Landscape 16:9 and Vertical 9:16 for Reels/Shorts/TikTok. 
              Multi-lane timeline with 60fps performance and sub-frame scrubber precision.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>100% Private & Offline</h3>
            <p>
              Your videos, voice recordings, scripts, and drafts stay exclusively on your hard drive. 
              Works completely offline on airplanes, trains, or off-grid locations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Frictionless Safe Updates</h3>
            <p>
              Seamless update notifications powered by GitHub Releases. Updating the desktop app binary 
              never touches or wipes your downloaded AI model weights or saved projects.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison" className="section">
        <div className="section-header">
          <span className="section-tag">Value Comparison</span>
          <h2 className="section-title">MegaStage vs. Cloud SaaS Video Editors</h2>
        </div>

        <div className="comparison-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature / Capability</th>
                <th>MegaStage</th>
                <th>Typical Cloud Video SaaS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pricing</strong></td>
                <td><span className="badge-winner">100% Free Forever</span></td>
                <td><span className="badge-loser">$29 – $69 / month</span></td>
              </tr>
              <tr>
                <td><strong>Speech-to-Text Transcription</strong></td>
                <td><span className="badge-winner">Unlimited Local (Faster-Whisper)</span></td>
                <td><span className="badge-loser">Limited credit minutes / month</span></td>
              </tr>
              <tr>
                <td><strong>Voice Synthesis (TTS)</strong></td>
                <td><span className="badge-winner">Unlimited Local Neural Kokoro 82M</span></td>
                <td><span className="badge-loser">Character count caps</span></td>
              </tr>
              <tr>
                <td><strong>Privacy & Offline Use</strong></td>
                <td><span className="badge-winner">100% Offline & Private</span></td>
                <td><span className="badge-loser">Uploaded to cloud servers</span></td>
              </tr>
              <tr>
                <td><strong>Export Resolution & Limits</strong></td>
                <td><span className="badge-winner">Unlimited 1080p/4K Local MP4</span></td>
                <td><span className="badge-loser">Watermarks or capped renders</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
