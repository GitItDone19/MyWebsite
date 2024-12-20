import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={github}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          <a
            href={demo}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
          >
            <ExternalLink className="w-5 h-5" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};