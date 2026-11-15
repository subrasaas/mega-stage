'use client';

import { useState, useEffect } from 'react';

interface FeatureFlags {
  version: string;
  updatedAt: string;
  tierPolicy: 'all_free' | 'pro_gated';
  features: {
    autoSubtitles: boolean;
    wordByWordCaptions: boolean;
    rollingCaptions: boolean;
    puppetStudio: boolean;
    video3dDiorama: boolean;
    offlineVoiceCast: boolean;
    topicBoardPlanning: boolean;
    experimentalTimeline: boolean;
  };
  announcements: {
    latestVersion: string;
    releaseDate: string;
    downloadUrl: string;
    notice: string;
  };
}

const DEFAULT_CONFIG: FeatureFlags = {
  version: '1.0.0',
  updatedAt: new Date().toISOString(),
  tierPolicy: 'all_free',
  features: {
    autoSubtitles: true,
    wordByWordCaptions: true,
    rollingCaptions: true,
    puppetStudio: false,
    video3dDiorama: true,
    offlineVoiceCast: true,
    topicBoardPlanning: true,
    experimentalTimeline: false,
  },
  announcements: {
    latestVersion: '1.0.0',
    releaseDate: '2026-11-15',
    downloadUrl: 'https://github.com/subraatakumar/mega-stage/releases/latest',
    notice: 'MegaStage v1.0.0 is officially released! 100% Free & Local Desktop Studio.',
  },
};

export default function AdminPage() {
  const [config, setConfig] = useState<FeatureFlags>(DEFAULT_CONFIG);
  const [copied, setCopied] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);

  useEffect(() => {
    // Attempt to load current features.json from public folder or localStorage
    const saved = localStorage.getItem('megastage_admin_features');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
        return;
      } catch (e) {
        // ignore parse error
      }
    }

    fetch('/config/features.json')
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch(() => {});
  }, []);

  const handleToggle = (featureKey: keyof FeatureFlags['features']) => {
    setConfig((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      features: {
        ...prev.features,
        [featureKey]: !prev.features[featureKey],
      },
    }));
    setSavedLocally(false);
  };

  const handleTierPolicyChange = (tierPolicy: 'all_free' | 'pro_gated') => {
    setConfig((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      tierPolicy,
    }));
    setSavedLocally(false);
  };

  const handleSaveLocal = () => {
    localStorage.setItem('megastage_admin_features', JSON.stringify(config, null, 2));
    setSavedLocally(true);
    setTimeout(() => setSavedLocally(false), 3000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'features.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div className="admin-header">
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: 800 }}>⚙ Remote Feature Flags Control</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>
              Control feature visibility across MegaStage desktop installations without redeploying binaries.
            </p>
          </div>
          <span className="brand-badge">Admin Plane</span>
        </div>

        {/* TIER POLICY */}
        <div style={{ marginBottom: '28px', padding: '18px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>Launch Tier Policy</h3>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
            Choose whether all features are unrestricted for audience growth, or future pro-feature gating:
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              onClick={() => handleTierPolicyChange('all_free')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: config.tierPolicy === 'all_free' ? 'var(--accent-cyan)' : 'var(--border-color)',
                background: config.tierPolicy === 'all_free' ? 'rgba(53, 217, 230, 0.15)' : 'transparent',
                color: config.tierPolicy === 'all_free' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              ⭐ 100% Free (Audience First)
            </button>
            <button
              type="button"
              onClick={() => handleTierPolicyChange('pro_gated')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: config.tierPolicy === 'pro_gated' ? 'var(--accent-purple)' : 'var(--border-color)',
                background: config.tierPolicy === 'pro_gated' ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                color: config.tierPolicy === 'pro_gated' ? 'var(--accent-purple)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              🔒 Pro Gated (Future)
            </button>
          </div>
        </div>

        {/* FEATURE TOGGLES */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>Feature Toggles</h3>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Auto Subtitles Track & Whisper Engine</h4>
            <p>Enables the automatic speech-to-text generation modal and [CC] subtitle track.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.autoSubtitles}
              onChange={() => handleToggle('autoSubtitles')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Word by Word Kinetic Subtitles</h4>
            <p>Active-word animated pop styling with highlight and scale bounce.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.wordByWordCaptions}
              onChange={() => handleToggle('wordByWordCaptions')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Rolling Subtitles Preset</h4>
            <p>Smooth vertical teleprompter roll-in animation with cyan accent.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.rollingCaptions}
              onChange={() => handleToggle('rollingCaptions')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>3D Character Diorama & Stage</h4>
            <p>Interactive 3D Three.js stage with orbit controls and character models.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.video3dDiorama}
              onChange={() => handleToggle('video3dDiorama')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Puppet Studio (In Development)</h4>
            <p>Hide this tab until character motion and rigging features are fully ready.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.puppetStudio}
              onChange={() => handleToggle('puppetStudio')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Neural Kokoro Voice Cast</h4>
            <p>Local 24 kHz speech synthesis for Mira and Subra AI.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.offlineVoiceCast}
              onChange={() => handleToggle('offlineVoiceCast')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Topic Board Planning (LLM)</h4>
            <p>Local Ollama and OpenAI-compatible storyboard diagram planner.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.topicBoardPlanning}
              onChange={() => handleToggle('topicBoardPlanning')}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flag-row">
          <div className="flag-info">
            <h4>Experimental Multi-Track Features</h4>
            <p>Experimental timeline drag snapping and alpha features.</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={config.features.experimentalTimeline}
              onChange={() => handleToggle('experimentalTimeline')}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* ACTIONS */}
        <div style={{ marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={handleCopyJson}
            className="nav-cta"
            style={{ cursor: 'pointer', border: 'none' }}
          >
            {copied ? '✓ JSON Copied!' : '📋 Copy features.json'}
          </button>

          <button
            type="button"
            onClick={handleDownloadJson}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            💾 Download features.json
          </button>

          <button
            type="button"
            onClick={handleSaveLocal}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            {savedLocally ? '✓ Saved to Browser' : 'Save to Browser Cache'}
          </button>
        </div>

        <p style={{ marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          To publish changes to live desktop users: download or copy the generated <code>features.json</code> and commit it to <code>public/config/features.json</code> in this repository.
        </p>
      </div>
    </div>
  );
}
