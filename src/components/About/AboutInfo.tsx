import { Code2, BookOpen, Languages } from 'lucide-react';

const infoItems = [
  {
    icon: <Code2 className="text-blue-500" />,
    text: 'Full-stack Development Enthusiast',
  },
  {
    icon: <BookOpen className="text-blue-500" />,
    text: 'Computer Science Master\'s Student',
  },
  {
    icon: <Languages className="text-blue-500" />,
    text: 'Fluent in English, French, Arabic, and German',
  },
];

export const AboutInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 mb-6">
        As a Software Engineering student at ESPRIT University, I'm passionate about creating innovative solutions through code. My journey in tech has been marked by a strong foundation in both theoretical knowledge and practical experience.
      </p>
      
      <div className="space-y-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};