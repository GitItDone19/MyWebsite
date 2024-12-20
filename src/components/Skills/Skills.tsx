import { useRef } from 'react';
import { SkillCard } from './SkillCard';
import { skillsData } from './skillsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Technical Skills
        </h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={skill.category} 
              {...skill}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp ${0.5 + index * 0.1}s ease-out forwards` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};