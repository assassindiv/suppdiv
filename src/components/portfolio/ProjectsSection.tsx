import { motion } from 'framer-motion';
import { projects } from '@/data/profile';
import { Brain, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  ml: <Brain className="size-4" />,
  nlp: <MessageSquare className="size-4" />,
  web: <Globe className="size-4" />,
};

const categoryLabels: Record<string, string> = {
  ml: 'ML',
  nlp: 'NLP / RAG',
  web: 'Web',
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-10" />

      <div className="relative max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
            <span className="text-neon-pink">{'>'}</span> projects.render()
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Featured Work</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-5 rounded-sm cyber-card hover:neon-border transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-sm bg-primary/10 text-primary">
                    {categoryIcons[project.category]}
                  </div>
                  <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">
                    {categoryLabels[project.category]}
                  </span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h4>

              <p className="text-[10px] font-mono text-neon-pink/70 mb-4 tracking-wider">
                {project.techStack}
              </p>

              <ul className="space-y-2 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-[10px] font-mono">▸</span>
                    <span>{point}</span>
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
