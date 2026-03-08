import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/60 font-mono mb-2">Skills</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-lg border border-border bg-card/60 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-xs uppercase tracking-[0.15em] text-foreground/60 mb-3 pb-2 border-b border-border">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs bg-muted text-muted-foreground border border-transparent hover:border-primary/30 hover:text-foreground transition-all duration-200 cursor-default"
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
