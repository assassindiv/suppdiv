import { motion } from 'framer-motion';
import { personalInfo } from '@/data/profile';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/60 font-mono mb-2">Contact</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Get in Touch</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
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
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
          >
            <Mail className="size-4" />
            {personalInfo.email}
            <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
          >
            <Phone className="size-4" />
            {personalInfo.phone}
          </a>
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
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 text-sm"
            >
              <link.icon className="size-4" />
              {link.label}
            </a>
          ))}
        </motion.div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/60">
          <MapPin className="size-3" />
          {personalInfo.location}
        </p>
      </div>
    </section>
  );
}
