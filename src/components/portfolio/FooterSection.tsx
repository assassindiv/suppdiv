import { personalInfo } from '@/data/profile';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterSection() {
  return (
    <footer className="border-t border-primary/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono tracking-wider">
          <span className="text-primary">©</span> {new Date().getFullYear()} {personalInfo.name}
          <span className="text-muted-foreground/40 ml-2">// All rights reserved</span>
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
          ].filter(l => l.href).map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'GitHub' || link.label === 'LinkedIn' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="group relative p-2 rounded-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              aria-label={link.label}
            >
              <link.icon className="size-4" />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
