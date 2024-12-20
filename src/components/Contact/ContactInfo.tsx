import { Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    text: 'mouhamed.mahmoud@esprit.tn',
    href: 'mailto:mouhamed.mahmoud@esprit.tn',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    text: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/mouhamed-mahmoud-52a2092b8/',
  },
  {
    icon: <Github className="w-5 h-5" />,
    text: 'GitHub Profile',
    href: 'https://github.com/GitItDone19',
  },
];

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              {link.icon}
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};