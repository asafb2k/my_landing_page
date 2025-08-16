import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>About Me | Asaf Ishay Berreby</title>
        <meta name="description" content="Learn more about Asaf Ishay Berreby, his skills, education, and volunteering experience." />
      </Helmet>
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
            <p className="text-gray-600 dark:text-gray-300">
              I am a Machine Learning Engineer with a passion for computer vision and sports analytics. I graduated with a B.Sc. in Software Engineering from SCE College of Engineering in 2022. I thrive on solving complex problems and building efficient, scalable machine learning systems.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Volunteering</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I served as a combat soldier and staff sergeant in the Givati brigade. Since October 7th, I have completed over 270 days of reserve duty, contributing to the security of my country.
            </p>
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
    </>
  );
};

export default About;
