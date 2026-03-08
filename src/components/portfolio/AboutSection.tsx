import { motion } from 'framer-motion';
import { personalInfo, education } from '@/data/profile';
import { GraduationCap, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Background</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-neon-pink rounded-full mt-3" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground leading-[1.8] text-[15px]"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          whileHover={{ borderColor: 'var(--primary)', y: -2 }}
          className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_0_30px_-10px] hover:shadow-primary/20 transition-all duration-400 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2.5 rounded-lg bg-primary/10 border border-primary/20"
            >
              <GraduationCap className="size-5 text-primary" />
            </motion.div>
            <div>
              <p className="font-semibold text-foreground">{education.institution}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{education.degree}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground ml-[52px] mb-4">
            <span className="px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 text-primary/80">{education.period}</span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3 text-primary/60" />
              {education.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 ml-[52px]">
            {education.coursework.map(course => (
              <motion.span
                key={course}
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                className="px-2.5 py-1 rounded-md text-[11px] bg-muted/80 text-muted-foreground border border-border hover:text-foreground hover:bg-primary/5 transition-all duration-200 cursor-default"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
