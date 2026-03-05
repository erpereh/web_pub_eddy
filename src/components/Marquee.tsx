import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Marquee({ text, baseVelocity = 20 }: { text: string, baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-4 border-y border-white/10 bg-black/50 backdrop-blur-sm">
      <motion.div className="font-display font-bold text-4xl md:text-6xl uppercase tracking-widest text-transparent flex whitespace-nowrap" style={{ x, WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
        <span className="block mr-8">{text}</span>
      </motion.div>
    </div>
  );
}
