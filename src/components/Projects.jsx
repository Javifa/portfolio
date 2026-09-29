import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="section-subtitle mt-4">
            Una selección de proyectos en los que he trabajado, desde aplicaciones móviles hasta soluciones web.
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-500 text-sm">
            Más proyectos próximamente · En constante desarrollo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
