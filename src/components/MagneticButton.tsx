import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef, ReactNode } from 'react';

export default function MagneticButton({ children, className, onClick }: { children: ReactNode, className?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerPointX = left + width / 2;
    const centerPointY = top + height / 2;
    
    x.set((e.clientX - centerPointX) * 0.3);
    y.set((e.clientY - centerPointY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`relative px-8 py-4 font-display font-bold uppercase tracking-widest text-sm overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-neon-fuchsia/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <div className="absolute inset-0 border border-neon-fuchsia/50 group-hover:glow-fuchsia transition-all duration-300" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
