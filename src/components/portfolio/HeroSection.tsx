import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/profile';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto font-light leading-relaxed">
            Building Transformer models from scratch, designing RAG systems, and optimizing ML pipelines for production.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          {personalInfo.socialLinks.github && (
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
              <Github className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          )}
          {personalInfo.socialLinks.linkedin && (
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
              <Linkedin className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
            <Mail className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-muted-foreground/50 hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown className="size-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
