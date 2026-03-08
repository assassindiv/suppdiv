import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { MapPin, Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono">Experience</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Work History</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-neon-pink rounded-full mt-3" />
        </motion.div>

        <div className="relative space-y-5">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: 'var(--primary)', y: -2 }}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm ml-0 md:ml-12 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/20 transition-all duration-400 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Timeline dot */}
              <div className="hidden md:block absolute -left-[calc(3rem+6px)] top-8 w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_8px] shadow-primary/40 border-2 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <Briefcase className="size-4 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 text-primary/80">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-2.5 ml-0 md:ml-11">
                {exp.points.map((point, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5 cursor-default"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/50 shrink-0 group-hover:bg-primary transition-colors" />
                    <span className="group-hover:text-foreground/80 transition-colors duration-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
