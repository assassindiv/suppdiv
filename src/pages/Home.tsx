import { personalInfo } from '@/data/profile';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { FooterSection } from '@/components/portfolio/FooterSection';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import { PageTransition } from '@/components/portfolio/PageTransition';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `${personalInfo.name} — ${personalInfo.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', personalInfo.summary);
    else {
      const el = document.createElement('meta');
      el.name = 'description';
      el.content = personalInfo.summary;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </PageTransition>
    </div>
  );
}
