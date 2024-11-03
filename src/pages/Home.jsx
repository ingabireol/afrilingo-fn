// src/pages/Home.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { Element } from 'react-scroll';
import Contact from './Contact';

const Home = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div>
      {/* Home Section */}
      <Element name="home" className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to Afrilingo!
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl mb-10"
        >
          Dive into a world of languages, learn, explore, and connect with new cultures.
        </motion.p>
        {/* Call to Action Animation */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-yellow-400 text-blue-800 px-6 py-3 font-semibold rounded-md shadow-md"
      >
        Start Learning Now
      </motion.button>

      </Element>

      {/* About Section */}
      <Element name="about" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="text-4xl font-bold mb-4"
        >
          About Afrilingo
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          transition={{ delay: 0.3 }}
          className="text-lg"
        >
          Afrilingo is your gateway to learning new languages and connecting with different cultures.
        </motion.p>
      </Element>

      {/* Features Section */}
      <Element name="features" className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center p-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="text-4xl font-bold mb-4"
        >
          Features
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mock images and feature texts */}
          <div className="flex flex-col items-center">
            <img src="path_to_mock_image1.jpg" alt="Afrilingo Feature 1" className="rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Interactive lessons that keep you engaged and motivated.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="path_to_mock_image2.jpg" alt="Afrilingo Feature 2" className="rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Real-time pronunciation feedback to improve your skills.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="path_to_mock_image3.jpg" alt="Afrilingo Feature 3" className="rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Daily challenges to track your progress and stay consistent.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="path_to_mock_image4.jpg" alt="Afrilingo Feature 4" className="rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Engage with a vibrant community of language learners.</p>
          </div>
        </motion.div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-center p-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="text-4xl font-bold mb-4"
        >
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          transition={{ delay: 0.3 }}
          className="text-lg"
        >
        <Contact />
        </motion.p>
      </Element>
    </div>
  );
};

export default Home;
