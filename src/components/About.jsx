import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

const timelineSteps = [
  {
    icon: GraduationCap,
    label: 'DAM',
    sublabel: 'Graduado',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/20',
  },
  {
    icon: Code2,
    label: 'DAW',
    sublabel: '2º Curso',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
  },
  {
    icon: Rocket,
    label: 'Desarrollo profesional',
    sublabel: 'En camino',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
  },
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="sobre-mi" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="section-title">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-accent rounded-full mt-3 sm:mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-dark-300 text-base sm:text-lg leading-relaxed">
              Soy Javier Faustino, estudiante de{' '}
              <span className="text-white font-medium">Desarrollo de Aplicaciones Web</span> y 
              graduado en{' '}
              <span className="text-white font-medium">Desarrollo de Aplicaciones Multiplataforma</span>. 
              A lo largo de mi formación he trabajado con diferentes lenguajes, tecnologías y herramientas, 
              desarrollando tanto aplicaciones móviles como soluciones web y proyectos con bases de datos.
            </p>
            <p className="text-dark-300 text-base sm:text-lg leading-relaxed">
              Me apasiona aprender nuevas tecnologías, resolver problemas a través del código y 
              transformar ideas en aplicaciones funcionales. Actualmente estoy centrado en seguir 
              creciendo profesionalmente dentro del mundo del{' '}
              <span className="text-accent font-medium">desarrollo web</span> y del{' '}
              <span className="text-accent font-medium">software</span>.
            </p>
          </motion.div>

          {/* Mini timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card gradient-border p-5 sm:p-6 md:p-8">
              <h3 className="text-xs sm:text-sm font-semibold text-dark-400 uppercase tracking-wider mb-5 sm:mb-6">
                Mi trayectoria
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${step.bgColor} ${step.borderColor} border rounded-xl flex items-center justify-center`}>
                      <step.icon className={step.color} size={20} />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm sm:text-base">{step.label}</p>
                      <p className={`text-xs sm:text-sm ${step.color}`}>{step.sublabel}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Progress line */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-dark-800/50">
                <div className="flex items-center justify-between text-xs text-dark-500 mb-2">
                  <span>Progreso</span>
                  <span className="text-accent">En desarrollo</span>
                </div>
                <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: '66%' } : {}}
                    transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-emerald-400 via-accent to-purple-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
