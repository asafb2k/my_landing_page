import React from 'react';
import { FaGithub, FaKaggle, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Asaf Berreby
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/asaf-ishay" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://www.kaggle.com/asafishay" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
            <FaKaggle size={20} />
          </a>
          <a href="https://www.linkedin.com/in/asaf-ishay-berreby/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:asafb2k@gmail.com" className="hover:text-gray-900 dark:hover:text-white">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
