import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { MapPin, Zap } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, var(--neon) 0, var(--neon) 1px, transparent 0, transparent 50%)',
        backgroundSize: '30px 30px',
      }} />

      <div className="relative max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            <span className="text-neon-pink">{'>'}</span> experience.log()
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Work History</h3>
        </motion.div>

        <div className="relative space-y-6">
          <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ borderColor: 'var(--neon)', boxShadow: '0 0 20px -5px var(--neon), inset 0 0 20px -15px var(--neon)' }}
              className="relative p-6 rounded-sm cyber-card ml-0 md:ml-12 transition-all duration-300"
            >
              <div className="hidden md:flex absolute -left-[calc(3rem+7px)] top-8 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_10px] shadow-primary border-2 border-background" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.15, rotate: 10 }} className="p-2 rounded-sm bg-primary/10">
                    <Zap className="size-4 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{exp.role}</h4>
                    <p className="text-primary font-mono text-xs tracking-wider">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <span className="px-2 py-1 rounded-sm bg-primary/5 border border-primary/20">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-primary" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 ml-0 md:ml-11">
                {exp.points.map((point, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2 cursor-default"
                  >
                    <span className="text-primary mt-1 text-xs font-mono">▸</span>
                    {point}
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
