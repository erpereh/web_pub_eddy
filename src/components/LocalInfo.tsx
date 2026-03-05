import { motion } from 'motion/react';
import { MapPin, Clock, AlertTriangle, Train } from 'lucide-react';

export default function LocalInfo() {
  return (
    <section className="py-24 relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-neon-fuchsia mb-4">
              <MapPin className="w-6 h-6" />
              <h3 className="font-display text-2xl font-bold">UBICACIÓN</h3>
            </div>
            <div className="text-zinc-300 space-y-2">
              <p className="text-lg">Calle del Puerto de Alazores, 11</p>
              <p className="text-zinc-500">28031 Madrid</p>
              <p className="text-sm font-mono text-zinc-400 pt-2">Casco Histórico de Vallecas</p>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col gap-2 border-l-2 border-l-neon-blue">
              <div className="flex items-start gap-3">
                <Train className="w-5 h-5 text-neon-blue shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-400">
                  A un paso del <strong className="text-white font-medium">Metro Línea 1</strong> (Sierra de Guadalupe y Villa de Vallecas).
                </p>
              </div>
              <p className="text-xs text-zinc-500 mt-2 border-t border-white/5 pt-2">
                Punto de encuentro ideal tras salir del <em>Bite the Fly Escape Room</em> o del <em>Polideportivo Miguel Guillén Prim</em>.
              </p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-neon-blue mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="font-display text-2xl font-bold">HORARIOS</h3>
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex justify-between border-b border-white/5 pb-2 opacity-60">
                <span>Lunes</span>
                <span className="text-zinc-500 text-sm italic">Cerrado por descanso</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Martes - Jueves</span>
                <span className="font-mono">19:30 - 03:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 text-white font-medium">
                <span>Viernes - Sábado</span>
                <span className="font-mono text-neon-fuchsia">19:30 - 03:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Domingo</span>
                <span className="font-mono">19:30 - 03:00</span>
              </li>
            </ul>
            <p className="text-xs text-zinc-500 font-mono text-center">EL ÚLTIMO REFUGIO DE LA NOCHE</p>
          </motion.div>

          {/* Accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-neon-purple mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="font-display text-2xl font-bold">ACCESIBILIDAD</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-zinc-300 leading-relaxed text-sm">
                Queremos ser transparentes contigo: actualmente nuestro local <span className="text-white font-medium">carece de adaptación para personas en silla de ruedas</span> o con movilidad reducida severa.
              </p>
              <p className="text-zinc-400 text-sm mt-4">
                Lamentamos profundamente las molestias que esto pueda ocasionar y esperamos poder mejorar nuestras instalaciones en el futuro para acoger a todos los vecinos.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
