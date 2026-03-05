import { motion } from 'motion/react';

export default function Vibe() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-16 text-center">EL AMBIENTE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Billiards */}
          <motion.div
            className="glass-card rounded-3xl p-8 relative overflow-hidden group md:col-span-2 cursor-pointer"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-[url('/billar.png')] bg-cover bg-center opacity-40"
              variants={{
                hover: { scale: 1.1, opacity: 0.6, transition: { duration: 0.5 } }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <motion.div
                className="relative w-12 h-12"
                variants={{
                  hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } }
                }}
              >
                {/* 8 ball */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center shadow-[0_0_15px_#00ffff]">
                  <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-black leading-none">8</span>
                  </div>
                </div>
                {/* 9 ball or another */}
                <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-neon-fuchsia border-2 border-white/20 shadow-[0_0_15px_#ff00ff]" />
              </motion.div>
              <motion.div
                variants={{
                  hover: { y: -10, transition: { duration: 0.3 } }
                }}
              >
                <h3 className="font-display text-3xl font-bold mb-2 text-glow-blue">BILLAR</h3>
                <p className="text-zinc-300">Rompehielos sociales. Prolonga la noche.</p>
              </motion.div>
            </div>
            {/* Billiard Balls collision animation */}
            <div className="absolute top-[60%] left-0 w-full h-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden origin-left">
              {/* Cue stick */}
              <motion.div
                className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[150px] h-2 bg-gradient-to-r from-transparent via-amber-700/80 to-amber-200 rounded-r-full"
                variants={{
                  hover: { x: [0, -40, 260], opacity: [0, 1, 0], transition: { duration: 0.8, times: [0, 0.3, 0.6] } }
                }}
              />
              {/* Cue ball */}
              <motion.div
                className="absolute left-[120px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_8px_white]"
                variants={{
                  hover: { x: [0, 0, 160], opacity: [1, 1, 0], transition: { duration: 0.8, times: [0, 0.5, 0.8] } }
                }}
              />
              {/* Target balls */}
              <motion.div
                className="absolute left-[290px] top-1/2 -translate-y-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_10px_#00ffff]"
                variants={{
                  hover: { x: [0, 80], y: [0, -50], opacity: [1, 1, 0], transition: { duration: 0.5, delay: 0.64 } }
                }}
              />
              <motion.div
                className="absolute left-[300px] top-1/2 -translate-y-[80%] w-4 h-4 bg-neon-fuchsia rounded-full shadow-[0_0_10px_#ff00ff]"
                variants={{
                  hover: { x: [0, 100], y: [0, 30], opacity: [1, 1, 0], transition: { duration: 0.5, delay: 0.64 } }
                }}
              />
              <motion.div
                className="absolute left-[300px] top-1/2 -translate-y-[20%] w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_10px_#8a2be2]"
                variants={{
                  hover: { x: [0, 90], y: [0, -10], opacity: [1, 1, 0], transition: { duration: 0.5, delay: 0.64 } }
                }}
              />
            </div>
          </motion.div>

          {/* Darts */}
          <motion.div
            className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-[url('/dardos.png')] bg-cover bg-center opacity-40"
              variants={{
                hover: { scale: 1.1, opacity: 0.6, transition: { duration: 0.5 } }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between items-center text-center">
              <motion.div
                className="relative w-16 h-16 mt-2"
                variants={{
                  hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } }
                }}
              >
                {/* Target */}
                <div className="absolute inset-0 rounded-full border-[4px] border-neon-fuchsia flex items-center justify-center shadow-[0_0_15px_#ff00ff]">
                  <div className="w-8 h-8 rounded-full border-[4px] border-neon-fuchsia flex items-center justify-center shadow-[0_0_10px_#ff00ff]">
                    <div className="w-2 h-2 rounded-full bg-neon-fuchsia shadow-[0_0_10px_#ff00ff]" />
                  </div>
                </div>
                {/* Dart icon top right */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rotate-[45deg] drop-shadow-[0_0_5px_white]">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
                  <div className="absolute top-1/2 right-0 w-0 h-0 border-l-[8px] border-l-white border-y-[4px] border-y-transparent -translate-y-1/2" />
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hover: { y: -10, transition: { duration: 0.3 } }
                }}
              >
                <h3 className="font-display text-2xl font-bold mb-2 text-glow-fuchsia">DARDOS</h3>
                <p className="text-zinc-300 text-sm">Diana electrónica.</p>
              </motion.div>
            </div>

            {/* Darts flying animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden flex items-center justify-center">
              {/* Center target outline */}
              <motion.div
                className="absolute w-12 h-12 rounded-full border border-white/20"
                variants={{ hover: { scale: [0, 1.5], opacity: [1, 0], transition: { duration: 1, repeat: Infinity } } }}
              />
              <motion.div
                className="absolute w-12 h-1 bg-gradient-to-r from-transparent to-neon-fuchsia shadow-[0_0_8px_#ff00ff]"
                variants={{
                  hover: { x: [-150, 0], y: [-150, 0], rotate: 45, opacity: [0, 1, 0], transition: { duration: 0.5 } }
                }}
              />
              <motion.div
                className="absolute w-12 h-1 bg-gradient-to-r from-transparent to-neon-blue shadow-[0_0_8px_#00ffff]"
                variants={{
                  hover: { x: [150, 0], y: [-100, 0], rotate: 145, opacity: [0, 1, 0], transition: { duration: 0.5, delay: 0.2 } }
                }}
              />
              <motion.div
                className="absolute w-16 h-1 bg-gradient-to-r from-transparent to-white shadow-[0_0_8px_white]"
                variants={{
                  hover: { x: [0, 0], y: [150, 0], rotate: -90, opacity: [0, 1, 0], transition: { duration: 0.5, delay: 0.4 } }
                }}
              />
            </div>
          </motion.div>

          {/* Foosball */}
          <motion.div
            className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-[url('/futbolin.png')] bg-cover bg-center opacity-40"
              variants={{
                hover: { scale: 1.1, opacity: 0.6, transition: { duration: 0.5 } }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between items-center text-center">
              <motion.div
                className="relative w-16 h-16 mt-2 flex items-center justify-center"
                variants={{
                  hover: { scale: 1.1, y: -5, transition: { duration: 0.3 } }
                }}
              >
                {/* Foosball bar and players icon */}
                <div className="absolute top-1/2 left-0 w-full h-1.5 -translate-y-1/2 bg-zinc-400 rounded-full shadow-[0_0_5px_gray]" />
                <div className="absolute top-1/2 left-[20%] w-3 h-10 -translate-y-1/2 bg-neon-blue rounded-sm shadow-[0_0_10px_#00ffff] border border-black/50" />
                <div className="absolute top-1/2 left-[50%] w-3 h-10 -translate-y-1/2 bg-neon-fuchsia rounded-sm shadow-[0_0_10px_#ff00ff] border border-black/50" />
                <div className="absolute top-1/2 left-[80%] w-3 h-10 -translate-y-1/2 bg-neon-blue rounded-sm shadow-[0_0_10px_#00ffff] border border-black/50" />
              </motion.div>
              <motion.div
                variants={{
                  hover: { y: -10, transition: { duration: 0.3 } }
                }}
              >
                <h3 className="font-display text-2xl font-bold mb-2 text-glow-blue">FUTBOLÍN</h3>
                <p className="text-zinc-300 text-sm">El clásico que nunca falla.</p>
              </motion.div>
            </div>

            {/* Foosball animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
              {/* Ball passing between players */}
              <motion.div
                className="absolute left-1/4 top-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] -translate-y-1/2 z-20"
                variants={{
                  hover: {
                    x: [0, 80, 20, 120, 0],
                    y: [0, -30, 20, 10, 0],
                    opacity: [0, 1, 1, 1, 0],
                    transition: { duration: 1.8, times: [0, 0.2, 0.4, 0.7, 1], repeat: Infinity }
                  }
                }}
              />

              {/* Dynamic background bars moving */}
              <motion.div className="absolute top-0 right-1/4 w-2 h-full bg-black/40 blur-sm" variants={{ hover: { y: [-20, 20, -10, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } } }} />
            </div>
          </motion.div>

          {/* Music */}
          <motion.div
            className="glass-card rounded-3xl p-8 relative overflow-hidden group md:col-span-2 cursor-pointer"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-[url('/fiesta.png')] bg-cover bg-center opacity-40"
              variants={{
                hover: { scale: 1.1, opacity: 0.5, transition: { duration: 0.5 } }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <motion.div
                className="relative w-12 h-12"
                variants={{
                  hover: { scale: 1.1, rotate: 180, transition: { duration: 1.5, repeat: Infinity, ease: 'linear' } }
                }}
              >
                {/* Custom Vinyl Icon */}
                <div className="absolute inset-0 rounded-full bg-black border-[3px] border-zinc-700 flex items-center justify-center shadow-[0_0_15px_#8a2be2]">
                  <div className="w-10 h-10 rounded-full border border-zinc-800" />
                  <div className="absolute w-8 h-8 rounded-full border border-zinc-800" />
                  <div className="absolute w-4 h-4 rounded-full bg-neon-purple border border-black flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hover: { y: -10, transition: { duration: 0.3 } }
                }}
              >
                <h3 className="font-display text-3xl font-bold mb-2 text-glow-purple">MÚSICA</h3>
                <p className="text-zinc-300">Reggaetón, Bachata y Electro Latino. Para bailar sin parar.</p>
              </motion.div>
            </div>

            {/* Equalizer animation */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 h-16 flex items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {[1.0, 0.8, 1.2, 0.9, 0.7].map((duration, i) => (
                <motion.div
                  key={i}
                  className={`w-3 rounded-t-sm ${i % 2 === 0 ? 'bg-neon-purple shadow-[0_0_10px_#8a2be2]' : 'bg-neon-fuchsia shadow-[0_0_10px_#ff00ff]'}`}
                  variants={{
                    hover: {
                      height: ["20%", "100%", "40%", "80%", "30%"],
                      transition: {
                        duration: duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.1
                      }
                    }
                  }}
                />
              ))}

              {/* Flying musical notes */}
              <motion.div className="absolute top-0 right-[150%] text-neon-fuchsia text-3xl font-bold" style={{ textShadow: '0 0 10px #ff00ff' }} variants={{ hover: { y: [0, -80], x: [0, 40], opacity: [0, 1, 0], rotate: [0, 20], transition: { duration: 2, repeat: Infinity, delay: 0.2 } } }}>♪</motion.div>
              <motion.div className="absolute top-1/2 right-[180%] text-neon-blue text-4xl font-bold" style={{ textShadow: '0 0 10px #00ffff' }} variants={{ hover: { y: [0, -100], x: [0, -30], opacity: [0, 1, 0], rotate: [0, -15], transition: { duration: 2.5, repeat: Infinity, delay: 0.6 } } }}>♫</motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
