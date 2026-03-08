import { personalInfo } from '@/data/profile';
import { Github, Linkedin, Cpu } from 'lucide-react';
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
          {personalInfo.socialLinks.github && (
            <motion.a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2 rounded-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Github className="size-4" />
            </motion.a>
          )}
          {personalInfo.socialLinks.linkedin && (
            <motion.a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-2 rounded-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Linkedin className="size-4" />
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
}
