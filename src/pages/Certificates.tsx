import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  // Updated certificates data
  const certificates = [
    {
      id: 1,
      title: 'Data Structures & Algorithm',
      issuer: 'Board Infinity',
      date: 'July 2024',
      image: 'https://i.postimg.cc/3wNywfVh/BI-20240731-6638976.png',
      credentialUrl: 'https://www.coursera.org/verify/specialization/ABCD1234',
    },
    {
      id: 2,
      title: 'Generative AI Primer',
      issuer: 'VANDERBILT UNIVERSITY',
      date: 'April 2024',
      image: 'https://i.postimg.cc/q7W7vJ2c/Coursera-93-RYD4-RJZA2-V.png',
      credentialUrl: 'https.//coursera.org/verify/93RYD4RJ ZA2V',
    },
    {
      id: 3,
      title: 'Generative AI with Large language Models',
      issuer: 'Coursera',
      date: 'April 2024',
      image: 'https://i.postimg.cc/0y2jtH8S/Coursera-AL2-B34-SBAE32.png',
      credentialUrl: 'https://aws.amazon.com/verify/ABCD1234',
    },
    {
      id: 4,
      title: 'GenAI for everyone',
      issuer: 'Coursera',
      date: 'April 2024',
      image: 'https://i.postimg.cc/jdhC4rrK/Coursera-G7-JLLALLGQJZ.png',
      credentialUrl: 'https://confirm.udacity.com/ABCD1234',
    },
  ];

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
              My <span className="gradient-text">Certificates</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Professional certifications and accomplishments in AI, machine
              learning, and Data Structures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                image={cert.image}
                credentialUrl={cert.credentialUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Learning Journey */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Learning Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Continuous learning is essential in the ever-evolving field of AI
              and technology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>

              {/* Learning Milestones */}
              {[
                {
                  year: '2024',
                  title: 'Started Machine Learning Journey',
                  description:
                    'Completed comprehensive machine learning specialization and started applying neural networks to real problems.',
                },
                {
                  year: '2025',
                  title: 'working on MCPs',
                  description: 'Using ai agents and merging them with tools',
                },
                {
                  year: '2023',
                  title: 'Advanced AI Applications',
                  description:
                    'Developed expertise in building and deploying advanced AI applications at scale.',
                },
                {
                  year: '2024',
                  title: 'Sharing Knowledge',
                  description:
                    'Started creating content and tutorials to help others learn AI and machine learning.',
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Certificates;
