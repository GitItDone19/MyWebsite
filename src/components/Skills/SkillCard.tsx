import { LucideIcon } from 'lucide-react';
import { SkillCardProps } from './types';

export const SkillCard = ({ category, icon: Icon, items, style }: SkillCardProps) => {
  return (
    <div 
      className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700"
      style={style}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-400">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg text-gray-200">{category}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};