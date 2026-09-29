import { motion } from 'framer-motion';
import { ExternalLink, ImageOff } from 'lucide-react';

export default function ProjectCard({ project, index, isVisible }) {
  const isDestacado = project.destacado;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      className={`glass-card gradient-border overflow-hidden group ${
        isDestacado ? 'sm:col-span-2' : ''
      }`}
    >
      <div className={`${isDestacado ? 'md:grid md:grid-cols-2' : ''}`}>
        {/* Image area */}
        <div className={`relative overflow-hidden bg-dark-900 ${
          isDestacado ? 'aspect-[16/10] md:aspect-auto md:min-h-full' : 'aspect-video'
        }`}>
          {project.imagen ? (
            <img
              src={project.imagen}
              alt={`Captura de ${project.nombre}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-dark-600 gap-3">
              <ImageOff size={40} strokeWidth={1.5} />
              <span className="text-sm">Imagen próximamente</span>
            </div>
          )}

          {/* Category badge */}
          {project.categoria && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                project.categoria === 'personal'
                  ? 'bg-accent/20 text-accent border border-accent/30'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }`}>
                {project.categoria === 'personal' ? 'Proyecto personal' : 'Académico'}
              </span>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {project.nombre}
          </h3>

          <p className="text-dark-400 leading-relaxed mb-6 flex-1">
            {isDestacado ? project.descripcion : project.descripcionCorta}
          </p>

          {/* Features for featured project */}
          {isDestacado && project.caracteristicas.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.caracteristicas.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-dark-300">
                  <feat.icon size={14} className="text-accent flex-shrink-0" />
                  <span>{feat.texto}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tecnologias.map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5"
                aria-label={`Ver demo de ${project.nombre}`}
              >
                <ExternalLink size={16} />
                Ver proyecto
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
