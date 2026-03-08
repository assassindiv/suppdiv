import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { Briefcase, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-sm text-primary tracking-wider">// EXPERIENCE</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Work History</h3>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-mono">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 ml-12">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
