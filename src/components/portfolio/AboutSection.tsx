import { motion } from 'framer-motion';
import { personalInfo, education } from '@/data/profile';
import { GraduationCap, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/60 font-mono mb-2">About</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Background</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground leading-relaxed text-[15px]"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="p-5 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-md bg-primary/10">
              <GraduationCap className="size-4 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{education.institution}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{education.degree}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground ml-11 mb-3">
            <span>{education.period}</span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3" />
              {education.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 ml-11">
            {education.coursework.map(course => (
              <span
                key={course}
                className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
