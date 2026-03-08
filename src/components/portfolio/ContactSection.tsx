import { motion } from 'framer-motion';
import { personalInfo } from '@/data/profile';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-10" />

      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            <span className="text-neon-pink">{'>'}</span> contact.open()
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Let's Connect</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto font-mono">
            Open to discussing new projects, research collaborations, or ML/DL engineering opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 0 25px -5px var(--neon), 0 10px 30px -10px var(--neon)' }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-6 py-3 rounded-sm neon-border bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono text-xs tracking-wider"
          >
            <Send className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            {personalInfo.email}
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone}`}
            whileHover={{ scale: 1.03, y: -2, borderColor: 'var(--neon)', boxShadow: '0 0 15px -5px var(--neon)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-6 py-3 rounded-sm border border-border bg-card hover:bg-primary/5 transition-all duration-300 font-mono text-xs text-muted-foreground tracking-wider"
          >
            <Phone className="size-4" />
            {personalInfo.phone}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono"
        >
          <MapPin className="size-3 text-primary" />
          {personalInfo.location}
        </motion.div>
      </div>
    </section>
  );
}
