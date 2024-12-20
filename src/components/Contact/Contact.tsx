import { useRef } from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
          Get In Touch
        </h2>
        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};