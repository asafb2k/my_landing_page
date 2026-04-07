import React from 'react';
import { motion } from 'framer-motion';
import { trackCvDownload } from '../hooks/useTracking';

const skills = [
  { name: 'Python', level: 'Expert' },
  { name: 'PyTorch', level: 'Advanced' },
  { name: 'C++', level: 'Intermediate' },
  { name: 'SQL', level: 'Advanced' },
  { name: 'Docker', level: 'Advanced' },
  { name: 'Git', level: 'Advanced' },
  { name: 'NVIDIA Triton', level: 'Advanced' },
  { name: 'Pytest', level: 'Advanced' },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          About Me
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Bio</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a Machine Learning Engineer currently working at Rakuten Viber, where I am part of the data infrastructure group supporting data scientists with production workflows. Previously, I spent over four years at LSports building advanced computer vision systems and deploying end-to-end deep learning pipelines for sports analytics.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With a B.Sc. in Software Engineering (Data Science focus) from SCE College of Engineering, I bring a unique blend of strong theoretical knowledge and real-world engineering skills. My work includes training, optimizing, and deploying multiple deep learning models — from YOLO-based object detection to 3D convolutional networks for temporal event detection — all running in high-performance production environments.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond my professional role, I actively engage in Kaggle competitions, where I've ranked first in class challenges, constantly refining my problem-solving and data-driven thinking.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">M.Sc. in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Open University of Israel</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Currently pursuing</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am currently pursuing my Master's degree in Computer Science at the Open University of Israel, where I am deepening my theoretical knowledge and research skills in advanced computer science topics. This complements my practical industry experience and enables me to stay at the forefront of cutting-edge research and development.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">B.Sc. in Software Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">SCE College of Engineering</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Data Science Focus</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Volunteering</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I served as a combat soldier and staff sergeant in the Givati brigade. Since October 7th, I have completed over 300 days of reserve duty, contributing to the security of my country.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => trackCvDownload('/about')}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download CV
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-white">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-white">{skill.level}</span>
                  </div>
                  {/* A simple visual representation of skill level could be added here */}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;
