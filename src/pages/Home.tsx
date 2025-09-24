import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaKaggle, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src="/asafs_image.jpeg"
            alt="Asaf Berreby"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            Asaf Ishay Berreby
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Machine Learning Engineer | Computer Vision
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Israel
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <button onClick={() => handleCopy('asafb2k@gmail.com', 'email')} className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope size={24} />
              {copied === 'email' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">Copied!</span>}
            </button>
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">As part of the computer vision team at LSports, I took a part in developing a real-time Tennis Data Extractor from video streams. This system utilizes over 10 deep learning models, including YOLO and X3D, to extract detailed match and player statistics, turning raw game footage into valuable analytics.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Full-Stack Data Scientist</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">I specialize in the end-to-end deep learning lifecycle, from training in PyTorch to high-performance deployment with NVIDIA Triton, TensorRT, and Docker. My experience covers diverse architectures, including video networks with 3D convolutions, ensuring robust and scalable models in production.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Passion for ML</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">My enthusiasm for machine learning extends to personal projects and competitive data science. I actively participate in Kaggle challenges, achieving 1st place in class competitions, and have developed independent projects in areas like cryptocurrency price prediction and advanced tweet analysis.</p>
          </div>
        </motion.div>
      </div>
  );
};

export default Home;
