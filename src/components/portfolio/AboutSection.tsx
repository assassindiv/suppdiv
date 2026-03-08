import { motion } from 'framer-motion';
import { personalInfo, education } from '@/data/profile';
import { GraduationCap, MapPin, Database } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-10" />

      <div className="relative max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            <span className="text-neon-pink">{'>'}</span> about.init()
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Background</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-sm cyber-card">
            <p className="text-base text-muted-foreground leading-relaxed font-mono text-sm">
              <span className="text-primary">const</span>{' '}
              <span className="text-neon-pink">bio</span> ={' '}
              <span className="text-muted-foreground/80">"{personalInfo.summary}"</span>
            </p>
          </div>

          <div className="p-6 rounded-sm cyber-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-sm bg-primary/10 neon-border">
                <GraduationCap className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{education.institution}</p>
                <p className="text-sm text-muted-foreground font-mono">{education.degree}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
              <span className="px-2 py-1 rounded-sm bg-primary/5 border border-primary/20">{education.period}</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3 text-primary" />
                {education.location}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {education.coursework.map(course => (
                <span key={course} className="px-3 py-1 rounded-sm text-xs font-mono bg-secondary border border-border text-secondary-foreground hover:border-primary/30 transition-colors">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
