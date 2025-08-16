import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaKaggle, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Asaf Ishay Berreby
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Machine Learning Engineer | Computer Vision
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Bror Hail, Israel
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="mailto:asafb2k@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope size={24} />
            </a>
            <a href="https://github.com/asafb2k" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/asaf-ishay-bereby-data-science/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.kaggle.com/asafishay" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaKaggle size={24} />
            </a>
          </div>
          <div className="mt-8">
            <a
              href="/Asaf Berreby 2025 ENG.pdf"
              download="Asaf Berreby 2025 ENG.pdf"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">4+ Years in Sports Analytics</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Building cutting-edge sports analytics systems at LSports.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Deep Learning Expertise</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Expert in PyTorch, video models, and deployment with NVIDIA Triton.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Passion for ML</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Passionate about Kaggle challenges & applied machine learning projects.</p>
          </div>
        </motion.div>
      </div>
  );
};

export default Home;
