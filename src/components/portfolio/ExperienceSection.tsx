import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/60 font-mono mb-2">Experience</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Work History</h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 rounded-lg border border-border bg-card/60 hover:border-primary/30 hover:shadow-[0_0_30px_-15px] hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary/60 mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    <span className="group-hover:text-foreground/80 transition-colors duration-300">{point}</span>
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
