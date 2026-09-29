import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'javierfaustinogd@gmail.com',
    href: 'mailto:javierfaustinogd@gmail.com',
    description: 'Escríbeme un email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/javier-faustino',
    href: 'https://www.linkedin.com/in/javier-faustino/',
    description: 'Conectemos',
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="contacto" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-dark-950 pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="section-title">
            ¿<span className="text-gradient">Hablamos</span>?
          </h2>
          <p className="section-subtitle mt-3 sm:mt-4 mx-auto">
            Si quieres conocer más sobre mí, hablar sobre un proyecto o simplemente
            contactar conmigo, puedes escribirme.
          </p>
          <div className="w-12 sm:w-16 h-1 bg-accent rounded-full mt-4 sm:mt-6 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Email principal destacado */}
          <motion.a
            href="mailto:javierfaustinogd@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card gradient-border p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group hover:bg-dark-900/70 active:scale-[0.98] transition-all duration-300 mb-4 sm:mb-8 block text-center sm:text-left"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
              <Mail size={24} className="text-accent sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-dark-400 text-xs sm:text-sm mb-1">Escríbeme a</p>
              <p className="text-white text-base sm:text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors break-all sm:break-normal">
                javierfaustinogd@gmail.com
              </p>
            </div>
            <ArrowUpRight
              size={20}
              className="text-dark-600 group-hover:text-accent transition-colors hidden sm:block"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/javier-faustino/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group hover:border-accent/30 active:scale-[0.98] transition-all duration-300 block"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Linkedin size={18} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">LinkedIn</p>
              <p className="text-dark-500 text-xs sm:text-sm truncate">Conectemos</p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-dark-600 group-hover:text-accent transition-colors flex-shrink-0"
            />
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-3 text-dark-500 text-sm mt-6 sm:mt-8"
          >
            <MapPin size={14} />
            <span>España</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
