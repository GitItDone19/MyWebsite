import { ChevronDown, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Code2 className="absolute top-20 left-20 w-24 h-24 animate-float" style={{ animationDelay: '0s' }} />
          <Terminal className="absolute top-40 right-32 w-16 h-16 animate-float" style={{ animationDelay: '1s' }} />
          <Code2 className="absolute bottom-32 left-1/4 w-20 h-20 animate-float" style={{ animationDelay: '2s' }} />
          <Terminal className="absolute top-1/3 right-1/4 w-28 h-28 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Mouhamed Mahmoud
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-gray-300 font-light">
            Software Engineering Student & Web Developer
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Crafting digital experiences through elegant code and innovative solutions
          </p>
          <div className="flex gap-6 justify-center">
            <button
              onClick={scrollToNextSection}
              className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Discover My Work
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
};