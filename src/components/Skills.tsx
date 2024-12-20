import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    items: ['Node.js', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    icon: <Code className="w-6 h-6" />,
    items: ['Git', 'Docker', 'AWS', 'Linux'],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};