import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaTools, FaTruck, FaCodeBranch } from 'react-icons/fa';

const workExperience = [
  {
    icon: <FaNetworkWired size={40} className="text-blue-500" />,
    title: 'Tennis Data Extractor',
    description: 'Developed a system with 10+ deep learning networks (YOLO, MMOCR, 3D conv nets) to extract tennis data from videos.',
  },
  {
    icon: <FaTools size={40} className="text-green-500" />,
    title: 'Automation Tools',
    description: 'Created automated tools for training, annotating, and testing machine learning models, improving workflow efficiency.',
  },
  {
    icon: <FaTruck size={40} className="text-purple-500" />,
    title: 'Inference Pipeline Deployment',
    description: 'Deployed high-performance inference pipelines using NVIDIA TensorRT and Triton Inference Server.',
  },
  {
    icon: <FaCodeBranch size={40} className="text-yellow-500" />,
    title: 'Tech Stack',
    description: 'Utilized Git/Git-LFS for version control, Docker for containerization, and worked within a microservices architecture.',
  },
];

const Work: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Work Experience at LSports
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {workExperience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-start space-x-4"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default Work;
