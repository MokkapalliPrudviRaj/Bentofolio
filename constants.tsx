import { Github, Linkedin, Mail, Globe, Layout, PenTool, Zap, Database, Box, CheckCircle } from 'lucide-react';
import { Project, Experience, SocialLink, SkillData } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Investment Tracker",
    description: "Modern investment platform to track portfolios and automate tax filings. Built with Angular, RxJS, and Chart.js.",
    tech: ["Angular", "RxJS", "Chart.js"],
    color: "bg-emerald-500",
  },
  {
    title: "Airbus Cabin Mgmt",
    description: "Internal system for managing aircraft cabin components. Migrated from Angular v6 to v20, improving load time by 45%.",
    tech: ["Angular", "PrimeNG", "SCSS"],
    color: "bg-blue-600",
  },
  {
    title: "Evident ERP Portal",
    description: "Large-scale ERP for manufacturing. Redesigned modules with Figma and integrated GraphQL for dynamic reports.",
    tech: ["GraphQL", "Figma", "Angular"],
    color: "bg-purple-500",
  },
  {
    title: "Water's Lab Mgmt",
    description: "Frontend modernization for lab operations. Converted Figma designs into reusable Angular components.",
    tech: ["Angular Material", "Agile", "CI/CD"],
    color: "bg-cyan-500",
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Infosys",
    role: "Frontend Angular Dev",
    period: "May 2025 - Present",
    logo: "INF",
  },
  {
    company: "Infosys",
    role: "UI/UX Developer",
    period: "Jan 2024 - Apr 2025",
    logo: "INF",
  },
  {
    company: "Infosys",
    role: "Angular Developer",
    period: "Aug 2022 - Dec 2023",
    logo: "INF",
  },
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/uiuxbyprudvi/", 
    icon: Linkedin,
    username: "Prudvi Raj Mokkapalli",
  },
  {
    platform: "GitHub",
    url: "https://github.com/MokkapalliPrudviRaj", 
    icon: Github,
    username: "Prudvi Raj Mokkapalli",
  }
];

// Kept for backward compatibility if needed, but the main UI uses SKILL_CATEGORIES now
export const SKILL_DATA: SkillData[] = [
  { subject: 'Angular', A: 95, fullMark: 100 },
  { subject: 'UI/UX', A: 90, fullMark: 100 },
  { subject: 'TypeScript', A: 85, fullMark: 100 },
  { subject: 'RxJS', A: 80, fullMark: 100 },
  { subject: 'Figma', A: 85, fullMark: 100 },
  { subject: 'HTML/CSS', A: 95, fullMark: 100 },
];

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    skills: ['Angular (v6–20)', 'React Basics', 'TypeScript', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Angular Material', 'PrimeNG', 'jQuery', 'SPAs', 'PWAs', 'Cross-Browser Support']
  },
  {
    id: 'uiux',
    title: 'UI/UX & Design',
    icon: PenTool,
    skills: ['Figma', 'Wireframes', 'Prototypes', 'Design Systems', 'Responsive & Adaptive Design', 'A11y (Accessibility)', 'Component Design', 'UX Principles']
  },
  {
    id: 'angular',
    title: 'Angular Advanced',
    icon: Zap,
    skills: ['RxJS', 'NgRx', 'Signals', 'Standalone Components', 'Lazy Loading', 'Services', 'Directives', 'Forms', 'Pipes', 'Routing & Guards', 'Change Detection Optimization']
  },
  {
    id: 'api',
    title: 'API & Integration',
    icon: Database,
    skills: ['REST APIs', 'GraphQL Basics', 'JWT Auth', 'Interceptors', 'API Debugging (Postman/Swagger)']
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: Box,
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Containerization', 'NPM', 'Webpack', 'ServiceNow']
  },
  {
    id: 'bestpractices',
    title: 'Best Practices',
    icon: CheckCircle,
    skills: ['Micro-frontend Arch', 'Monorepo', 'SEO Optimization', 'Modular Architecture', 'Reusable Components', 'Maintainability', 'Performance Optimization']
  }
];