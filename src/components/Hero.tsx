import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const title = "TU CASA EN VILLA DE VALLECAS";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', damping: 12 } }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop"
          alt="Pub Eddy Atmosphere"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Animated Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-neon-fuchsia/20 rounded-full blur-[100px] mix-blend-screen z-15 pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neon-blue/20 rounded-full blur-[100px] mix-blend-screen z-15 pointer-events-none"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <img src="/logo.png" alt="Pub Eddy Logo" className="h-32 md:h-48 lg:h-56 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 glass-card text-xs font-mono tracking-widest text-neon-blue uppercase">
            El último refugio de la noche
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-[0.2em]">
              {word.split('').map((char, j) => (
                <motion.span key={j} variants={item} className="inline-block hover:text-neon-fuchsia hover:text-glow-fuchsia transition-colors duration-300">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12 space-y-6"
        >
          <p className="text-zinc-400 text-lg md:text-xl font-light">
            "El mejor Pub en el barrio de toda la vida." — Eva R. <br />
            Un espacio sin pretensiones donde la comunidad se encuentra.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 inline-block backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <p className="text-neon-fuchsia font-bold tracking-widest text-sm mb-2 text-glow-fuchsia">BYOF (Bring Your Own Food)</p>
            <p className="text-zinc-300 text-sm md:text-base">El espacio es nuestro, la comida la eliges tú. <br className="hidden md:block" />Trae tu cena, pide a domicilio y nosotros ponemos las copas.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <MagneticButton onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Reserva tu Evento
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
