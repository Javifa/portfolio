import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Terminal } from 'lucide-react';

const codeLines = [
  { text: 'const developer = {', color: 'text-cyan-400' },
  { text: '  nombre: "Javier Faustino",', color: 'text-emerald-400' },
  { text: '  rol: "Desarrollador Web",', color: 'text-emerald-400' },
  { text: '  stack: ["Java", "JS", "Python"],', color: 'text-amber-400' },
  { text: '  disponible: true', color: 'text-purple-400' },
  { text: '};', color: 'text-cyan-400' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleLines(codeLines.length);
      return;
    }

    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              Disponible para oportunidades
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Javier{' '}
              <span className="text-gradient">Faustino</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-300 font-medium mb-4">
              Desarrollador en formación especializado en software y desarrollo web.
            </p>

            <p className="text-dark-400 text-lg mb-10 max-w-xl leading-relaxed">
              Estudiante de DAW con formación previa en DAM. Me interesa crear aplicaciones, 
              desarrollar soluciones web y convertir ideas en proyectos funcionales.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#proyectos" className="btn-primary">
                Ver proyectos
                <ChevronRight size={18} />
              </a>
              <a href="#contacto" className="btn-secondary">
                Contactar conmigo
              </a>
            </div>
          </motion.div>

          {/* Right: Code decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass-card gradient-border p-6 glow">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-dark-800/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-dark-500 text-xs ml-2">
                  <Terminal size={12} />
                  <span>portfolio.js</span>
                </div>
              </div>

              {/* Code content */}
              <div className="code-decoration text-sm md:text-base space-y-1">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-dark-600 select-none w-6 text-right text-xs">
                      {i + 1}
                    </span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}
                {/* Cursor */}
                {visibleLines >= codeLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-dark-600 select-none w-6 text-right text-xs">
                      {codeLines.length + 1}
                    </span>
                    <span className="w-2.5 h-5 bg-accent animate-pulse-glow" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs text-accent border border-accent/20"
            >
              ⚡ React + Vite
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dark-500"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
