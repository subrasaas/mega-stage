import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MegaStage — 100% Free & Local AI Video Studio',
  description: 'The open, private desktop video editor. Offline Whisper STT subtitles, neural Kokoro voice cast, 3D character diorama, and multi-track timeline with zero cloud bills.',
  keywords: ['MegaStage', 'Free Video Editor', 'Offline Subtitles', 'Faster Whisper', 'Kokoro TTS', 'Local AI', 'Desktop Video Studio'],
  authors: [{ name: 'MegaStage Team' }],
  openGraph: {
    title: 'MegaStage — 100% Free & Local AI Video Studio',
    description: 'Offline speech-to-text, neural voice synthesis, and 3D diorama video editing. 100% Free, zero cloud fees.',
    url: 'https://megastage.subraspaceai.com',
    siteName: 'MegaStage',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-brand">
            <span>🎬 MegaStage</span>
            <span className="brand-badge">v1.0.0 Free</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#subtitles" className="nav-link">Subtitles</a>
            <a href="#comparison" className="nav-link">Comparison</a>
            <a href="https://github.com/subraatakumar/mega-stage" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://github.com/subraatakumar/mega-stage/releases/latest" className="nav-cta">
              Download App
            </a>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <p>© {new Date().getFullYear()} MegaStage Studio. 100% Free & Open Source Local Video Editor.</p>
          <p style={{ marginTop: '8px' }}>
            Built for creators with zero monthly subscriptions. <a href="/admin">Admin Control Plane</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
