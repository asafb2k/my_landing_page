import React from 'react';
import { motion } from 'framer-motion';

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
              I am a Machine Learning Engineer with over four years of experience building advanced computer vision systems at LSports, where I design and deploy end-to-end deep learning pipelines for sports analytics. My expertise lies in extracting actionable insights from complex video data, combining cutting-edge research with practical implementation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With a B.Sc. in Software Engineering (Data Science focus) from SCE College of Engineering, I bring a unique blend of strong theoretical knowledge and real-world engineering skills. My work includes training, optimizing, and deploying multiple deep learning models — from YOLO-based object detection to 3D convolutional networks for temporal event detection — all running in high-performance production environments.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond my professional role, I actively engage in Kaggle competitions, where I’ve ranked first in class challenges, constantly refining my problem-solving and data-driven thinking.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Volunteering</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I served as a combat soldier and staff sergeant in the Givati brigade. Since October 7th, I have completed over 300 days of reserve duty, contributing to the security of my country.
            </p>
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
