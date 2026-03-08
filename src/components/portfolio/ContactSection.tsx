import { motion } from 'framer-motion';
import { personalInfo } from '@/data/profile';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />

      <div className="relative max-w-2xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Get in Touch</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-neon-pink rounded-full mt-3 mx-auto" />
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Open to discussing ML/DL engineering roles, research collaborations, or interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ y: -2, boxShadow: '0 0 25px -8px var(--primary)' }}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
          >
            <Mail className="size-4" />
            {personalInfo.email}
            <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone}`}
            whileHover={{ y: -2, borderColor: 'var(--primary)' }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:shadow-[0_0_20px_-8px] hover:shadow-primary/20 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
          >
            <Phone className="size-4" />
            {personalInfo.phone}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-2"
        >
          {[
            { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
          ].filter(l => l.href).map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, borderColor: 'var(--primary)' }}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:shadow-[0_0_15px_-5px] hover:shadow-primary/20 transition-all duration-300 text-sm"
            >
              <link.icon className="size-4 group-hover:text-primary transition-colors" />
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/50">
          <MapPin className="size-3" />
          {personalInfo.location}
        </p>
      </div>
    </section>
  );
}
