import { motion } from 'framer-motion';
import { projects } from '@/data/profile';
import { Brain, MessageSquare, Globe } from 'lucide-react';

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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary/60 font-mono mb-2">Projects</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-5 rounded-lg border border-border bg-card/60 hover:border-primary/40 hover:shadow-[0_4px_30px_-10px] hover:shadow-primary/15 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary/70 group-hover:text-primary transition-colors">
                  {categoryIcons[project.category]}
                </span>
                <span className="text-[11px] text-muted-foreground/60 uppercase tracking-wider">
                  {categoryLabels[project.category]}
                </span>
              </div>

              <h3 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                {project.title}
              </h3>

              <p className="text-[11px] text-muted-foreground/50 mb-4 font-mono">
                {project.techStack}
              </p>

              <ul className="space-y-2 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle bottom accent on hover */}
              <div className="mt-4 h-px bg-border group-hover:bg-gradient-to-r group-hover:from-primary/50 group-hover:to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
