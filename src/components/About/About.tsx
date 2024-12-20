import { useEffect, useRef } from 'react';
import { AboutInfo } from './AboutInfo';
import { ProfileImage } from './ProfileImage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ProfileImage />
          <AboutInfo />
        </div>
      </div>
    </section>
  );
};