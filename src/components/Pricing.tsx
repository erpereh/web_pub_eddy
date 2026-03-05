import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';

function Odometer({ value, symbol = "€" }: { value: number, symbol?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{display}</motion.span>
      <span className="text-4xl ml-1 text-zinc-500">{symbol}</span>
    </span>
  );
}

export default function Pricing() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">PRECIOS</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Disfruta de la mejor calidad a precios de barrio, alejados de la inflación del centro de Madrid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "PINTA DE BARRIL", price: 3, textColor: "text-neon-blue", bgColor: "bg-neon-blue", bgOpacityColor: "bg-neon-blue/5", glowColor: "text-glow-blue" },
            { title: "COPA DE VINO", price: 5, textColor: "text-neon-purple", bgColor: "bg-neon-purple", bgOpacityColor: "bg-neon-purple/5", glowColor: "text-glow-purple" },
            { title: "CÓCTELES & MIXOLOGÍA", price: 6, textColor: "text-neon-fuchsia", bgColor: "bg-neon-fuchsia", bgOpacityColor: "bg-neon-fuchsia/5", glowColor: "text-glow-fuchsia" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-3xl p-10 text-center relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${item.bgColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className={`absolute inset-0 ${item.bgOpacityColor} opacity-0 group-hover:opacity-100 transition-opacity blur-2xl`} />

              <h3 className="font-mono text-sm tracking-widest text-zinc-400 mb-8">{item.title}</h3>
              <div className={`font-display text-8xl font-bold ${item.textColor} ${item.glowColor} flex justify-center`}>
                <Odometer value={item.price} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
