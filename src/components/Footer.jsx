import { Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/javier-faustino/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:javierfaustinogd@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 py-6 sm:py-8 safe-bottom">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="text-dark-500 text-xs sm:text-sm order-3 sm:order-1">
            <span>© {currentYear} Javier Faustino.</span>
          </div>

          {/* Center: logo */}
          <a
            href="#inicio"
            className="text-lg font-bold text-gradient order-1 sm:order-2"
            aria-label="Ir al inicio"
          >
            JF<span className="text-dark-500">.</span>
          </a>

          {/* Right: social */}
          <div className="flex items-center gap-5 sm:gap-4 order-2 sm:order-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-dark-500 hover:text-accent active:text-accent transition-colors duration-300 p-1"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
