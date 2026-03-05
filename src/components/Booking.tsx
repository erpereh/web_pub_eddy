import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Booking() {
  return (
    <section id="booking" className="py-32 relative bg-zinc-950 overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-50, 0, -50]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [50, 0, 50]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            RESERVA TU <span className="text-neon-blue text-glow-blue">EVENTO</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Cumpleaños, despedidas o fiestas universitarias. <br />
            <span className="text-neon-fuchsia font-bold">¡Ahorra en tu fiesta!</span> Trae tu propia cena, tarta o pide delivery sin coste de descorche.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl space-y-6 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-neon-fuchsia/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Nombre</label>
              <input
                type="text"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-fuchsia focus:glow-fuchsia transition-all duration-300"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Teléfono</label>
              <input
                type="tel"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:glow-blue transition-all duration-300"
                placeholder="Tu teléfono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Fecha</label>
              <input
                type="date"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-fuchsia focus:glow-fuchsia transition-all duration-300 [color-scheme:dark]"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Asistentes (Aprox)</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:glow-blue transition-all duration-300 appearance-none">
                <option>Menos de 10</option>
                <option>10 - 20 personas</option>
                <option>20 - 50 personas</option>
                <option>Más de 50 (Fiesta grande)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Mensaje / Peticiones Especiales</label>
            <textarea
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_15px_#8a2be2] transition-all duration-300 resize-none"
              placeholder="¿Traes tarta? ¿Pides pizzas? Cuéntanos..."
            />
          </div>

          <div className="pt-4 flex justify-center relative z-10">
            <MagneticButton className="w-full md:w-auto" onClick={(e) => e.preventDefault()}>
              Solicitar Reserva
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
