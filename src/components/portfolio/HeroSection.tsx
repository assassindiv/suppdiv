import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
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
      <span className="animate-pulse text-primary">_</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hex-pattern opacity-30" />

      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/50"
          style={{ top: `${10 + i * 11}%`, left: `${8 + i * 11}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.1, 0.7, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm neon-border bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase hover:bg-primary/10 hover:shadow-[0_0_20px_-5px] hover:shadow-primary transition-all duration-300 cursor-default"
          >
            <Terminal className="size-3" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px] shadow-primary" />
            System.status: Available
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
            <span className="text-foreground">I'm </span>
            <motion.span
              className="text-gradient-neon inline-block"
              whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {personalInfo.name.split(' ')[0]}
            </motion.span>
          </h1>

          <div className="text-xl md:text-2xl font-mono text-muted-foreground">
            <span className="text-primary/60">{'> '}</span>
            <TypeWriter text={personalInfo.tagline} delay={800} />
          </div>

          <p className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto font-mono leading-relaxed">
            Building Transformer models from scratch • Designing RAG systems • Optimizing ML pipelines for production
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].filter(l => l.href).map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-sm border border-border bg-card/50 backdrop-blur-sm hover:neon-border hover:bg-primary/5 transition-all duration-300"
            >
              <link.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase group-hover:tracking-[0.5em] transition-all">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="size-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
