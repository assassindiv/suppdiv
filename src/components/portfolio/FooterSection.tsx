import { personalInfo } from '@/data/profile';

export function FooterSection() {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-xs text-muted-foreground/30">
          Built with care.
        </p>
      </div>
    </footer>
  );
}
