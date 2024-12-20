import { LucideIcon } from 'lucide-react';

export interface Skill {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface SkillCardProps extends Skill {
  style?: React.CSSProperties;
}