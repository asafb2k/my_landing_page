import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ground-hit Detector',
    description: 'Developed a 3D-Unet model to detect ball ground-hits in tennis from video footage. This project involved complex video analysis and deep learning techniques.',
    tags: ['Computer Vision', 'PyTorch', '3D-Unet'],
  },
  {
    title: 'Crypto Price Predictions',
    description: 'Built a system that scrapes data from Twitter and Binance and uses an LSTM model to predict cryptocurrency prices. The model outperformed several competitors.',
    tags: ['NLP', 'LSTM', 'Web Scraping'],
  },
  {
    title: 'Kaggle Competitions',
    description: 'Achieved top results in several Kaggle competitions, including 1st place in a class competition and top rankings in others (2nd, 3rd, and 4th place).',
    tags: ['Kaggle', 'Competitive ML'],
  },
  {
    title: 'Tweet Classification',
    description: 'Experimented with various classical machine learning models (XGBoost, SVM, Random Forest) for tweet classification tasks.',
    tags: ['Classical ML', 'NLP', 'Scikit-learn'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Projects;
