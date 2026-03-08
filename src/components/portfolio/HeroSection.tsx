import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/profile';
import { useEffect, useState } from 'react';

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export function HeroSection() {
  const contactLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub', external: true },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: personalInfo.email, external: false },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: personalInfo.phone, external: false },
  ].filter(l => l.href);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background — single soft glow, no grid/hex/particles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[160px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full text-[11px] font-mono text-primary/80 border border-primary/20 bg-primary/5 tracking-wider"
          >
            Open to opportunities
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95]">
            <span className="text-foreground">Divyanshu</span>
            <br />
            <span className="text-foreground/40 text-4xl md:text-5xl lg:text-6xl font-light">Puri</span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground font-sans font-light">
            <TypeWriter text={personalInfo.tagline} delay={600} />
          </div>
        </motion.div>

        {/* Contact links — clean, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            >
              <link.icon className="size-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
              <span className="text-xs font-mono hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-muted-foreground/30 hover:text-primary transition-colors"
          >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="size-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
