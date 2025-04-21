import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Code,
  Youtube,
  Award,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from '../components/AnimatedSection';
import YoutubeEmbed from '../components/YoutubeEmbed';

const Home = () => {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  const statsItems = [
    { value: '5+', label: 'Projects Completed' },
    { value: '1.5+', label: 'Years Experience' },
    { value: '2+', label: 'Satisfied Clients' },
    { value: '99%', label: 'Success Rate' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-30 dark:opacity-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `rgba(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, ${Math.random() * 255}, 0.1)`,
                  transform: `translate(-50%, -50%)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="block">Hello, I'm Purushottam</span>
                  <TypeAnimation
                    sequence={[
                      'AI Engineer',
                      2000,
                      'ML Developer',
                      2000,
                      'Tech Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="gradient-text block mt-2"
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                  I help businesses leverage the power of artificial
                  intelligence to solve real-world problems in the AI era.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/projects"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-base transition-transform"
                    >
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-base transition-transform"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                  <img
                    src="https://i.postimg.cc/Pr0WcPWS/Screenshot-2025-04-20-164104.png"
                    alt="AI Concept"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold">
                      Building the Future with AI
                    </h3>
                    <p className="text-gray-200">Join me on this journey</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statsItems.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
                variants={fadeInUpVariants}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-purple-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What I Do Section */}
      <AnimatedSection className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in creating innovative solutions at the intersection
              of AI and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <BrainCircuit
                  size={48}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                AI Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Building custom AI solutions tailored to specific business
                needs. From computer vision to natural language processing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <Code
                  size={48}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Creating responsive and performant web applications with modern
                frameworks and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <Youtube
                  size={48}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Content Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Sharing knowledge through my YouTube channel with tutorials on
                coding and AI/ML topics.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* YouTube Channel */}
      <AnimatedSection className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
              NEW CHANNEL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My YouTube Channel: CodeX
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join me as I explore coding and AI/ML and core language topics
              through in-depth tutorials and practical guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <YoutubeEmbed
                id="https://www.youtube.com/watch?v=NFqW31RCbs8"
                title="Sample Coding Tutorial"
              />
              <h3 className="text-xl font-bold">
                Introduction to AI Programming
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn the basics of AI programming with this comprehensive
                tutorial.
              </p>
            </div>
            <div className="space-y-6">
              <YoutubeEmbed
                id="https://www.youtube.com/watch?v=JjsapTcgkgs"
                title="Sample AI Tutorial"
              />
              <h3 className="text-xl font-bold">
                Building Your First Machine Learning Model
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A step-by-step guide to creating your first machine learning
                model.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@codeX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-all"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe to CodeX
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of my most recent work. From AI-powered applications
              to responsive web interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
                  alt="AI ChatBot"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI ChatBot Assistant</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A conversational AI assistant built using transformer models.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Data Visualization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Data Visualization Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interactive dashboard for visualizing complex datasets.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  AI-Powered E-commerce
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  E-commerce platform with personalized recommendations.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-base transition-all"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Let's collaborate and bring your ideas to life with cutting-edge AI
            technology.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-700 font-bold text-lg transition-transform"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
