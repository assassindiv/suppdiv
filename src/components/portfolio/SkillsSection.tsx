import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.012]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px',
      }} />

      <div className="relative max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono">Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Tech Stack</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-neon-pink rounded-full mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ borderColor: 'var(--primary)', y: -2 }}
              className="group p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_0_25px_-10px] hover:shadow-primary/20 transition-all duration-400 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground/50 group-hover:text-primary/70 mb-4 pb-3 border-b border-border transition-colors duration-300">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="px-2.5 py-1 rounded-md text-xs bg-muted/80 text-muted-foreground border border-transparent hover:border-primary/30 hover:text-foreground hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
