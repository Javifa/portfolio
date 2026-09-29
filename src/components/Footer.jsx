import { Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/javier-faustino/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:javierfaustinogd@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-dark-500 text-sm">
            <span>© {currentYear} Javier Faustino.</span>
          </div>

          {/* Center: logo */}
          <a
            href="#inicio"
            className="text-lg font-bold text-gradient"
            aria-label="Ir al inicio"
          >
            JF<span className="text-dark-500">.</span>
          </a>

          {/* Right: social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="text-dark-500 hover:text-accent transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
