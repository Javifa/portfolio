import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Zap, BookOpen, Code2, Database, Server } from 'lucide-react';

const currentActivities = [
  { icon: BookOpen, text: 'Cursando 2º de DAW' },
  { icon: Code2, text: 'Desarrollo web' },
  { icon: Database, text: 'Bases de datos & backend' },
  { icon: Server, text: 'Proyectos personales' },
];

export default function Currently() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Zap size={14} />
            Actualmente
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            ¿En qué estoy <span className="text-gradient">ahora</span>?
          </h2>

          <p className="text-dark-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Actualmente estoy cursando 2º de DAW, ampliando mis conocimientos en desarrollo web, 
            programación, bases de datos y tecnologías backend, mientras sigo desarrollando 
            proyectos personales y académicos.
          </p>

          {/* Activity pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
            {currentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-dark-900/50 border border-dark-800/50 text-xs sm:text-sm text-dark-300 hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                <activity.icon size={14} className="text-accent flex-shrink-0" />
                <span className="truncate">{activity.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
