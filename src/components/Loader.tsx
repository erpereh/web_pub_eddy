import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 800); // Glitch start
    const t2 = setTimeout(() => setStage(2), 1600); // Solid on
    const t3 = setTimeout(() => onComplete(), 2500); // Done

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      animate={{ opacity: stage === 2 ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      onAnimationComplete={() => stage === 2 && onComplete()}
    >
      <div className="relative">
        <h1 className={`font-display text-6xl md:text-8xl font-bold tracking-tighter text-zinc-800 ${stage === 1 ? 'glitch-text text-white text-glow-fuchsia' : stage === 2 ? 'text-white text-glow-blue' : ''}`}>
          PUB EDDY
        </h1>
        {stage === 1 && (
          <div className="absolute inset-0 bg-neon-fuchsia mix-blend-overlay opacity-50 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}
