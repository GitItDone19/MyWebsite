import React from 'react';
import { Languages, Code2, BookOpen } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
             
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              As a Software Engineering student at ESPRIT University, I'm passionate about creating innovative solutions through code. My journey in tech has been marked by a strong foundation in both theoretical knowledge and practical experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="text-blue-500" />
                <span>Full-stack Development Enthusiast</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-blue-500" />
                <span>Computer Science Master's Student</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages className="text-blue-500" />
                <span>Fluent in English, French, Arabic, and German</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};