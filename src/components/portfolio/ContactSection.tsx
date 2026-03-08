import { motion } from 'framer-motion';
import { personalInfo } from '@/data/profile';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-sm text-primary tracking-wider">// CONTACT</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Let's Connect</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new projects, research collaborations, or opportunities in ML/DL engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-mono text-sm"
          >
            <Mail className="size-4" />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors font-mono text-sm text-muted-foreground"
          >
            <Phone className="size-4" />
            {personalInfo.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="size-4" />
          {personalInfo.location}
        </motion.div>
      </div>
    </section>
  );
}
