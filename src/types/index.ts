export interface PersonalInfo {
  name: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string;
  points: string[];
  slug: string;
  category: 'ml' | 'nlp' | 'web';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
