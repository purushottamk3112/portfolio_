import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const categories = ['All', 'AI', 'Web Development', 'Machine Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Updated project data with live demos
  const projectsData = [
    {
      id: 1,
      title: 'AI ChatBot Assistant',
      description:
        'An intelligent chatbot powered by machine learning that can understand and respond to user queries in natural language.',
      image:
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React'],
      demoUrl: 'luminatext.netlify.app',
      githubUrl: 'https://github.com/demo/chatbot',
      category: 'AI',
    },
    {
      id: 2,
      title: 'Stock Market Predictor',
      description:
        'Machine learning model that analyzes historical data to predict stock market trends with interactive visualization.',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'React'],
      demoUrl: 'https://stock-predictor-demo',
      githubUrl: 'https://github.com/demo/stock-predictor',
      category: 'Machine Learning',
    },
    {
      id: 3,
      title: 'AI-Powered E-commerce',
      description:
        'Full-stack e-commerce platform with personalized product recommendations using machine learning.',
      image:
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      demoUrl: 'https://ai-ecommerce-demo.',
      githubUrl: 'https://github.com/demo/ai-ecommerce',
      category: 'Web Development',
    },
    {
      id: 4,
      title: 'Image Recognition App',
      description:
        'Real-time object detection and classification using computer vision and deep learning.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React Native'],
      demoUrl: 'https://image-recognition-dem',
      githubUrl: 'https://github.com/demo/image-recognition',
      category: 'AI',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              A showcase of my work in AI, machine learning, and web
              development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Project Process */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              How I approach each project from conception to completion.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'Understanding project requirements and objectives.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description:
                    'Creating a detailed roadmap and technical architecture.',
                },
                {
                  step: '03',
                  title: 'Development',
                  description:
                    'Building the solution with clean, efficient code.',
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description: 'Testing, optimization, and deployment.',
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
