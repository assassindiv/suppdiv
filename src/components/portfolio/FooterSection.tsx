import { personalInfo } from '@/data/profile';
import { Github, Linkedin } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          {personalInfo.socialLinks.github && (
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="size-4" />
            </a>
          )}
          {personalInfo.socialLinks.linkedin && (
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="size-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
