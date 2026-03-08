import type { PersonalInfo, Experience, Project, Education, SkillCategory } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Divyanshu Puri',
  tagline: 'LLM & Deep Learning Engineer',
  summary: 'Computer Science undergraduate with experience building scalable machine learning and deep learning systems, including training Transformer-based language models from scratch. Strong in implementation, performance optimization, and designing ML systems that operate reliably under real world constraints.',
  email: '2305535@kiit.ac.in',
  phone: '+91 8797154498',
  location: 'Bhubaneswar, Odisha',
  socialLinks: {
    github: 'https://github.com/assassindiv',
    linkedin: 'https://linkedin.com/in/divyanshupuri123',
    email: 'mailto:2305535@kiit.ac.in',
  },
};

export const experience: Experience[] = [
  {
    company: 'Cothon Solutions',
    role: 'Project Intern',
    period: 'Apr 2025 – May 2025',
    location: 'Remote',
    points: [
      'Implemented microservices architecture, improving API response time by 25% and reducing server load by 30%.',
      'Collaborated with a cross-functional team to develop and deliver a feature that increased user engagement by 20%, improved overall workflow efficiency.',
      'Optimized MySQL database queries, reducing page load times by 15% and enhancing overall application performance.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Autoregressive Transformer Language Model (From Scratch)',
    techStack: 'Python, PyTorch, SentencePiece, CUDA',
    points: [
      'Built and trained a custom autoregressive Transformer LM (5M parameters) on 11.4M Wikipedia tokens, implementing multihead self-attention, subword tokenization, and causal masking.',
      'Implemented KV cache based incremental decoding, reducing inference complexity from O(T²) to O(T) and achieving 3× faster generation for long sequences on GPU.',
      'Designed a scalable training and inference pipeline with checkpointing, validation loss monitoring, gradient clipping and CUDA acceleration.',
    ],
    slug: 'transformer-lm',
    category: 'ml',
    githubUrl: 'https://github.com/assassindiv/Small-LM',
  },
  {
    id: '2',
    title: 'RAGent: Intelligent Document Retrieval System',
    techStack: 'Python, LangChain, Groq API, FAISS, HuggingFace',
    points: [
      'Developed scalable retrieval system using OOP principles and modular design patterns essential for backend services.',
      'Implemented real-time semantic search with HuggingFace embeddings and vector database for processing large-scale data.',
      'Built robust API architecture capable of handling high-throughput queries, applicable to data processing systems.',
    ],
    slug: 'ragent',
    category: 'nlp',
  },
  {
    id: '3',
    title: 'Web Chat Interface with Groq LLM',
    techStack: 'Python, Flask, Groq API, HTML, CSS',
    points: [
      'Developed a real-time chat application enabling natural language conversations through a web-based interface.',
      'Implemented efficient data handling for chat history and user interactions using POST requests and session storage.',
      'Designed the system with scalable architecture patterns to support concurrent users and high-throughput requests.',
    ],
    slug: 'web-chat-groq',
    category: 'web',
  },
];

export const education: Education = {
  institution: 'Kalinga Institute of Industrial Technology',
  degree: 'Bachelor of Technology in Computer Science (SGPA: 7.56)',
  period: 'Expected May 2027',
  location: 'Bhubaneswar, Odisha',
  coursework: [
    'Data Structures and Algorithms (C++)',
    'Probability & Statistics in CS (Python)',
    'Intro to CS',
    'Linear Algebra w/ Computational Applications (Python)',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['C/C++', 'Python (OOP)', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'ML & AI',
    skills: ['PyTorch', 'NumPy', 'Pandas', 'LangChain', 'HuggingFace', 'Flask'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'Vector Databases (FAISS)'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['Docker', 'Linux', 'Kubernetes', 'Git/GitHub'],
  },
  {
    name: 'Concepts',
    skills: ['Transformers', 'Neural Networks', 'Machine Learning', 'Compiler Design', 'Operating Systems', 'API Design'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
