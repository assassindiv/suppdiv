import { personalInfo } from '@/data/profile';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterSection() {
  const links = [
    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub', external: true },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', external: false },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone', external: false },
  ].filter(l => l.href);

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/40 font-mono">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-1">
          {links.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              className="group relative p-2 rounded-lg text-muted-foreground/40 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="size-3.5" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
