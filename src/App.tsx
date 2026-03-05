import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BYOF from './components/BYOF';
import Pricing from './components/Pricing';
import Vibe from './components/Vibe';
import Booking from './components/Booking';
import LocalInfo from './components/LocalInfo';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-fuchsia selection:text-white">
      {/* Global Noise Overlay */}
      <div className="noise-bg" />

      {/* Boot Sequence Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Main Content */}
      <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        
        <Marquee text="REGGAETÓN • BYOF • COPAS • VALLECAS • PINTAS 3€ • " baseVelocity={-2} />
        
        <BYOF />
        
        <Pricing />
        
        <Marquee text="EL ÚLTIMO REFUGIO • SIN DESCORCHES • TU CASA • " baseVelocity={2} />
        
        <Vibe />
        
        <Booking />
        
        <LocalInfo />
        
        <footer className="py-8 text-center border-t border-white/10">
          <p className="font-mono text-xs text-zinc-600">
            © {new Date().getFullYear()} PUB EDDY. VILLA DE VALLECAS, MADRID.
          </p>
        </footer>
      </main>
    </div>
  );
}

