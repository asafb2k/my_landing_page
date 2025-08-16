import React, { useState } from 'react';
import { FaGithub, FaKaggle, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Asaf Berreby
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button onClick={() => handleCopy('https://github.com/asafb2k', 'github')} className="relative hover:text-gray-900 dark:hover:text-white">
            <FaGithub size={20} />
            {copied === 'github' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">Copied!</span>}
          </button>
          <a href="https://www.kaggle.com/asafberreby" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
            <FaKaggle size={20} />
          </a>
          <a href="https://www.linkedin.com/in/asaf-ishay-bereby-data-science/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <button onClick={() => handleCopy('asafb2k@gmail.com', 'email')} className="relative hover:text-gray-900 dark:hover:text-white">
            <FaEnvelope size={20} />
            {copied === 'email' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">Copied!</span>}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
