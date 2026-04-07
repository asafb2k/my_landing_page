import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaTools, FaTruck, FaCodeBranch, FaRobot } from 'react-icons/fa';

const rakutenWork = [
  {
    icon: <FaRobot size={40} className="text-red-500" />,
    title: 'Data Infrastructure',
    description: 'Part of the data infrastructure group, supporting data scientists with production workflows to ensure reliable and scalable ML pipelines.',
  },
];

const lsportsWork = [
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
    description: 'Deployed high-performance inference pipelines using NVIDIA TensorRT and Triton Inference Server. Experienced in deploying to cloud environments using Kubernetes on AWS and GCP.',
  },
  {
    icon: <FaCodeBranch size={40} className="text-yellow-500" />,
    title: 'Tech Stack',
    description: 'Utilized Git/Git-LFS for version control, Docker for containerization, Kafka and Redis for scalable cloud deployment, within a microservices architecture.',
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
          Work Experience
        </motion.h1>

        {/* Rakuten Viber */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Rakuten Viber</h2>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">2026 – Present · Tel Aviv, Israel</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium uppercase tracking-wide">Machine Learning Engineer</p>
          <div className="grid md:grid-cols-2 gap-8">
            {rakutenWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
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
        </motion.div>

        <div className="border-t border-gray-200 dark:border-gray-700 mb-10" />

        {/* LSports */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">LSports</h2>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">2021 – 2026 · Ashkelon, Israel</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-medium uppercase tracking-wide">Machine Learning Engineer</p>
          <div className="grid md:grid-cols-2 gap-8">
            {lsportsWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
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
        </motion.div>
      </div>
  );
};

export default Work;
