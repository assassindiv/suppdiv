import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-sm text-primary tracking-wider">// SKILLS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <h4 className="font-mono text-sm text-primary mb-4 tracking-wider">{cat.name}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-mono bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
