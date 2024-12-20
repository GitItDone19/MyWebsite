import { Code, Database, Globe, Server } from 'lucide-react';
import { Skill } from './types';

export const skillsData: Skill[] = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    icon: Code,
    items: ['Git', 'Docker', 'AWS', 'Linux'],
  },
];