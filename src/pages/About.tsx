import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Download } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SkillBar from '../components/SkillBar';

const About = () => {
  // Skills data
  const technicalSkills = [
    { skill: 'Python', level: 95 },
    { skill: 'Natural Language Processing', level: 90 },
    { skill: 'OpenAI Integration', level: 85 },
    { skill: 'React.js', level: 80 },
    { skill: 'Machine Learning', level: 85 },
    { skill: 'AI Integration', level: 85 },
    { skill: 'CRM Systems', level: 80 },
    { skill: 'Automation', level: 90 },
  ];

  const softSkills = [
    { skill: 'Problem Solving', level: 95 },
    { skill: 'Communication', level: 90 },
    { skill: 'Team Collaboration', level: 85 },
    { skill: 'Project Management', level: 80 },
  ];

  // Experience data
  const experiences = [
    {
      title: 'AI Researcher Intern',
      company: 'Planto.AI',
      period: 'Feb 2025 - Present',
      description:
        'Leading AI research initiatives focusing on NLP and automation. Developed Copilot tools and implemented OpenAI Whisper model, achieving significant improvements in task efficiency and accuracy.',
      achievements: [
        'Developed NLP-powered Copilot tools reducing manual task time by 35%',
        'Implemented OpenAI Whisper model achieving 98% transcription accuracy',
        'Optimized CRM integrations improving customer query resolution by 20%'
      ]
    },
    {
      title: 'AI Integration Intern',
      company: 'Coding Junior (Remote)',
      period: 'Jun 2022 - Dec 2022',
      description:
        'Focused on AI integration and automation, developing real-time decision algorithms and creating efficient user interfaces.',
      achievements: [
        'Engineered real-time decision algorithms boosting response speed by 25%',
        'Automated 50+ weekly support tasks using Python AI integrations',
        'Developed React.js interfaces increasing user engagement by 40%'
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: 'B.Tech',
      institution: 'Lovely Professional University',
      period: '2022 - 2026',
      description: 'Currently pursuing Bachelor of Technology with focus on AI and Machine Learning.',
    },
    {
      degree: 'Class XII',
      institution: 'Takshila',
      period: 'Completed 2022',
      description: 'Achieved 82% in senior secondary education with focus on science and mathematics.',
    }
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
              About <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              AI Researcher and Developer specializing in NLP and automation solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <div className="relative overflow-hidden rounded-xl shadow-xl w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="https://i.postimg.cc/V6YvC8jg/fnd.avif"
                  alt="Purushottam Kumar"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">Purushottam Kumar</h3>
                  <p className="text-gray-200">AI Researcher & Developer</p>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-xl p-6 max-w-md mx-auto lg:mx-0">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>B.Tech Student (2022-2026)</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <a href="mailto:contact@example.com" className="hover:text-purple-600 dark:hover:text-purple-400">
                      purushottamkumar3112@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>Punjab, India</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1Fss2J6W03n5gueCkQw7fpHraawSk8UHD/view?usp=drive_link"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Purushottam Kumar, an AI Researcher and Developer currently pursuing my B.Tech degree. My passion lies in leveraging artificial intelligence to create innovative solutions that solve real-world problems.
                </p>
                <p>
                  As an AI Researcher Intern at Planto.AI, I've been working on cutting-edge NLP technologies and automation solutions. My work has focused on developing Copilot tools and implementing advanced models like OpenAI Whisper, achieving significant improvements in efficiency and accuracy.
                </p>
                <p>
                  My experience includes working with various AI technologies, from natural language processing to automation systems. I've successfully reduced manual task times by 35% through NLP-powered tools and achieved 98% accuracy in transcription tasks using the OpenAI Whisper model.
                </p>
                <p>
                  I'm particularly interested in the intersection of AI and practical applications, having worked on projects that combine technical innovation with real-world utility. My work has consistently demonstrated improvements in efficiency and user engagement across different platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A combination of technical expertise and soft skills that enable me to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} label={skill.skill} percentage={skill.level} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
              <div className="space-y-4 mb-8">
                {softSkills.map((skill, index) => (
                  <SkillBar key={index} label={skill.skill} percentage={skill.level} />
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white mt-12">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'OpenAI', 'React.js', 'NLP', 'Machine Learning', 'Git', 'CRM Systems', 'Automation Tools'].map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey in AI research and development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                      <div className="text-gray-700 dark:text-gray-300 font-medium mb-3">{exp.company}</div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic journey and qualifications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                >
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{edu.period}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-white">{edu.degree}</h3>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-3">{edu.institution}</div>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
