import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './projectsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Projects
        </h2>
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animation: isVisible ? `fadeInUp ${0.5 + index * 0.2}s ease-out forwards` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};