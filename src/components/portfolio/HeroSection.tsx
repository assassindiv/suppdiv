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
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-30" />

      {/* Multiple radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[100px]" />

      {/* Floating particles effect using motion */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 14}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {/* Terminal-style status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm neon-border bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase"
          >
            <Terminal className="size-3" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px] shadow-primary" />
            System.status: Available
          </motion.div>

          {/* Main heading with Orbitron */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
            <span className="text-foreground">I'm </span>
            <span className="text-gradient-neon">{personalInfo.name.split(' ')[0]}</span>
          </h1>

          {/* Typewriter tagline */}
          <div className="text-xl md:text-2xl font-mono text-muted-foreground">
            <span className="text-primary/60">{'> '}</span>
            <TypeWriter text={personalInfo.tagline} delay={800} />
          </div>

          <p className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto font-mono leading-relaxed">
            Building Transformer models from scratch • Designing RAG systems • Optimizing ML pipelines for production
          </p>
        </motion.div>

        {/* Social links with neon hover */}
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
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group p-3 rounded-sm border border-border bg-card/50 backdrop-blur-sm hover:neon-border hover:bg-primary/5 transition-all duration-300"
            >
              <link.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="size-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
