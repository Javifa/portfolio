import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import skills from '../data/skills';

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="habilidades" className="section-padding relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="section-title">
            Tecnologías y{' '}
            <span className="text-gradient">habilidades</span>
          </h2>
          <p className="section-subtitle mt-3 sm:mt-4">
            Herramientas y tecnologías con las que trabajo habitualmente.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-accent rounded-full mt-4 sm:mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.categoria}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className={`glass-card gradient-border p-4 sm:p-5 lg:p-6 group hover:bg-dark-900/70 transition-all duration-500 ${
                catIndex === skills.length - 1 && skills.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <category.icon className="text-accent" size={16} />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                  {category.categoria}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.nombre}
                    className="tech-badge cursor-default text-[11px] sm:text-xs"
                    title={skill.nivel}
                  >
                    {skill.nombre}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
