import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'sample-post',
    title: 'Sample Blog Post',
    summary: 'This is a sample blog post to demonstrate the MDX blog system.',
    tags: ['ML', 'CV', 'Kaggle', 'Notes'],
    date: '2024-01-01',
  },
  // More posts will be added here
];

const Content: React.FC = () => {
  // Add filtering logic here in the future
  const filteredPosts = posts;

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
        >
          Content
        </motion.h1>
        
        {/* Add tag filters here */}

        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/content/${post.slug}`} className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{post.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default Content;
