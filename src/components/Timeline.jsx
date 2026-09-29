import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Briefcase, BookOpen, Bot, Building2 } from 'lucide-react';

const formacion = [
  {
    titulo: 'Desarrollo de Aplicaciones Web — DAW',
    institucion: 'Formación Profesional',
    periodo: 'Actualmente · 2º curso',
    descripcion:
      'Formación especializada en desarrollo web, programación, bases de datos y tecnologías del lado servidor y cliente.',
    icon: BookOpen,
    activo: true,
  },
  {
    titulo: 'Desarrollo de Aplicaciones Multiplataforma — DAM',
    institucion: 'Formación Profesional',
    periodo: 'Graduado',
    descripcion:
      'Formación en desarrollo de software multiplataforma, programación orientada a objetos, desarrollo móvil y gestión de bases de datos.',
    icon: GraduationCap,
    activo: false,
  },
];

const experiencia = [
  {
    titulo: 'Prácticas Formativas — Polo Digital',
    empresa: 'Polo Digital',
    periodo: 'Mar 2026 – May 2026',
    descripcion: [
      'Participación en proyectos digitales y tecnológicos.',
      'Atención y orientación a visitantes y usuarios durante actividades y eventos.',
      'Desarrollo completo de aplicaciones móviles.',
    ],
    icon: Building2,
    activo: true,
  },
  {
    titulo: 'Proyecto de Robótica — ASTI Mobile Robotics',
    empresa: 'DIGITECH',
    periodo: '2025',
    descripcion: [
      'Finalista en competición de robótica.',
      'Programación de sensores y resolución de problemas técnicos.',
      'Desarrollo de aplicaciones personales.',
    ],
    icon: Bot,
    activo: false,
  },
];

export default function Timeline() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="formacion" className="section-padding relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">
            Formación y{' '}
            <span className="text-gradient">experiencia</span>
          </h2>
          <p className="section-subtitle mt-4">
            Mi recorrido académico y profesional.
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Formación */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold text-white mb-8 flex items-center gap-3"
            >
              <GraduationCap size={22} className="text-accent" />
              Formación académica
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-dark-800" />

              <div className="space-y-8">
                {formacion.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    className="relative flex gap-5"
                  >
                    {/* Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          item.activo
                            ? 'bg-accent/10 border-accent/30 text-accent'
                            : 'bg-dark-900 border-dark-700 text-dark-400'
                        }`}
                      >
                        <item.icon size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-5 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-white font-semibold">{item.titulo}</h4>
                        <span
                          className={`flex-shrink-0 px-2.5 py-1 text-xs rounded-full font-medium ${
                            item.activo
                              ? 'bg-accent/10 text-accent border border-accent/20'
                              : 'bg-dark-800 text-dark-400 border border-dark-700'
                          }`}
                        >
                          {item.periodo}
                        </span>
                      </div>
                      <p className="text-dark-500 text-sm mb-2">{item.institucion}</p>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {item.descripcion}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experiencia */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold text-white mb-8 flex items-center gap-3"
            >
              <Briefcase size={22} className="text-accent" />
              Experiencia
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-dark-800" />

              <div className="space-y-8">
                {experiencia.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    className="relative flex gap-5"
                  >
                    {/* Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          item.activo
                            ? 'bg-accent/10 border-accent/30 text-accent'
                            : 'bg-dark-900 border-dark-700 text-dark-400'
                        }`}
                      >
                        <item.icon size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-5 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-white font-semibold">{item.titulo}</h4>
                        <span
                          className={`flex-shrink-0 px-2.5 py-1 text-xs rounded-full font-medium ${
                            item.activo
                              ? 'bg-accent/10 text-accent border border-accent/20'
                              : 'bg-dark-800 text-dark-400 border border-dark-700'
                          }`}
                        >
                          {item.periodo}
                        </span>
                      </div>
                      <p className="text-dark-500 text-sm mb-3">{item.empresa}</p>
                      <ul className="space-y-2">
                        {item.descripcion.map((punto, i) => (
                          <li
                            key={i}
                            className="text-dark-400 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full mt-1.5 flex-shrink-0" />
                            {punto}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
