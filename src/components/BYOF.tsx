import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function BYOF() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen flex items-center perspective-1000">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }} className="space-y-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-none">
              LA REVOLUCIÓN <br />
              <span className="text-neon-fuchsia text-glow-fuchsia">BYOF</span>
            </h2>
            <p className="text-xl text-zinc-300 font-light leading-relaxed">
              El espacio es nuestro, la comida la eliges tú. Trae tu cena, pide a domicilio o trae tu tarta sin costes extra.
            </p>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-neon-blue">
              <p className="font-mono text-sm text-zinc-400">
                "Democratizamos la celebración. Cero descorches. Cero problemas. Solo pagas lo que bebes."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-card p-2"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <motion.div
              style={{ transform: "translateZ(50px)" }}
              className="w-full h-full rounded-2xl overflow-hidden relative"
            >
              <motion.img
                src="/comida.png"
                alt="BYOF Experience"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <motion.div
                className="absolute bottom-8 left-8 pointer-events-none"
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="px-3 py-1 bg-neon-fuchsia/20 text-neon-fuchsia border border-neon-fuchsia/50 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                  Bring Your Own Food
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
