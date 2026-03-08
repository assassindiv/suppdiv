import { motion } from 'framer-motion';
import { projects } from '@/data/profile';
import { ExternalLink, Brain, MessageSquare, Globe } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  ml: <Brain className="size-5" />,
  nlp: <MessageSquare className="size-5" />,
  web: <Globe className="size-5" />,
};

const categoryLabels: Record<string, string> = {
  ml: 'Machine Learning',
  nlp: 'NLP / RAG',
  web: 'Web App',
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-sm text-primary tracking-wider">// PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Featured Work</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {categoryIcons[project.category]}
                </div>
                <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full bg-secondary">
                  {categoryLabels[project.category]}
                </span>
              </div>

              <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h4>

              <p className="text-xs font-mono text-primary/80 mb-4">
                {project.techStack}
              </p>

              <ul className="space-y-2 flex-1">
                {project.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">▹</span>
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
