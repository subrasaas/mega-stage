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
          <a href="/" className="nav-brand">
            <img src="/logo.png" alt="MegaStage Logo" width={32} height={32} className="nav-logo-img" />
            <span>MegaStage</span>
            <span className="brand-badge">v1.0.0 Free</span>
          </a>
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#subtitles" className="nav-link">Subtitles</a>
            <a href="#comparison" className="nav-link">Comparison</a>
            <a href="https://github.com/subrasaas/mega-stage" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://github.com/subrasaas/mega-stage/releases/latest" className="nav-cta">
              Download App
            </a>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <p>© {new Date().getFullYear()} MegaStage Studio. 100% Free & Open Source Local Video Editor.</p>
          <p style={{ marginTop: '8px' }}>
            Built for creators with zero monthly subscriptions. 100% Private & Local on Apple Silicon, Windows & Linux.
          </p>
        </footer>
      </body>
    </html>
  );
}
