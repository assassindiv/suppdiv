import { motion } from 'framer-motion';
import { projects } from '@/data/profile';
import { Brain, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  ml: <Brain className="size-4" />,
  nlp: <MessageSquare className="size-4" />,
  web: <Globe className="size-4" />,
};

const categoryLabels: Record<string, string> = {
  ml: 'Machine Learning',
  nlp: 'NLP / RAG',
  web: 'Web App',
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
};
const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/[0.015] to-transparent" />

      <div className="relative max-w-5xl mx-auto space-y-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="space-y-1 mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono">Projects</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Featured Work</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-neon-pink rounded-full mt-3" />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, borderColor: 'var(--primary)' }}
              className="group p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-[0_4px_30px_-8px] hover:shadow-primary/20 transition-all duration-400 flex flex-col relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="text-primary/60 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                  >
                    {categoryIcons[project.category]}
                  </motion.span>
                  <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider font-mono">
                    {categoryLabels[project.category]}
                  </span>
                </div>
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/20 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                    <ArrowUpRight className="size-3.5 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                ) : (
                  <ArrowUpRight className="size-3.5 text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                )}
              </div>

              <h3 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                {project.title}
              </h3>

              <p className="text-[11px] text-neon-pink/40 group-hover:text-neon-pink/70 mb-4 font-mono transition-colors duration-300">
                {project.techStack}
              </p>

              <ul className="space-y-2 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary/60 shrink-0 transition-colors" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 h-px bg-border">
                <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary/60 to-neon-pink/40 transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
