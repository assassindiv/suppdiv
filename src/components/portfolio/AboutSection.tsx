import { motion } from 'framer-motion';
import { personalInfo, education } from '@/data/profile';
import { GraduationCap, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-sm text-primary tracking-wider">// ABOUT ME</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Background</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.degree}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-mono">{education.period}</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3" />
                {education.location}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {education.coursework.map(course => (
                <span key={course} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
