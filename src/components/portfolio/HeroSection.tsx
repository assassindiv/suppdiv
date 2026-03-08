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
    }, 45);
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
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-pink/[0.03] blur-[120px]" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ top: `${15 + i * 18}%`, left: `${10 + i * 18}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono text-primary border border-primary/20 bg-primary/5 tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px] shadow-primary" />
            Available for opportunities
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight leading-[0.9]">
            <span className="text-foreground">Divyanshu</span>
            <br />
            <motion.span
              className="text-gradient-neon"
              whileHover={{ filter: 'brightness(1.15)' }}
            >
              Puri
            </motion.span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground font-mono font-light">
            <TypeWriter text={personalInfo.tagline} delay={600} />
          </div>

          <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
            Building Transformer models from scratch · Designing RAG systems · Optimizing ML pipelines for production
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -3, borderColor: 'var(--primary)' }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:shadow-[0_0_20px_-8px] hover:shadow-primary/30 transition-all duration-300"
            >
              <link.icon className="size-4 group-hover:text-primary transition-colors duration-300" />
              <span className="text-xs font-mono hidden sm:inline group-hover:text-primary transition-colors duration-300">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1.5 text-muted-foreground/30 hover:text-primary transition-colors group"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="size-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
