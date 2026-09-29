import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import skills from '../data/skills';

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="habilidades" className="section-padding relative">
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
            Tecnologías y{' '}
            <span className="text-gradient">habilidades</span>
          </h2>
          <p className="section-subtitle mt-4">
            Herramientas y tecnologías con las que trabajo habitualmente.
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.categoria}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIndex }}
              className="glass-card gradient-border p-6 group hover:bg-dark-900/70 transition-all duration-500"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <category.icon className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.categoria}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill.nombre}
                    className="tech-badge cursor-default"
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
