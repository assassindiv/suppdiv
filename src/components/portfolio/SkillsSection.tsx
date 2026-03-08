import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, var(--neon) 0, var(--neon) 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px',
      }} />

      <div className="relative max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            <span className="text-neon-pink">{'>'}</span> skills.list()
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Tech Stack</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-sm cyber-card"
            >
              <h4 className="font-mono text-[10px] text-primary mb-4 tracking-[0.3em] uppercase border-b border-primary/10 pb-3">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-sm text-xs font-mono bg-secondary border border-border text-secondary-foreground hover:neon-border hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
