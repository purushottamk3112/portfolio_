import {
  Github as GitHub,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://www.instagram.com/vivaan.co.in/',
      label: 'Instagram',
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      url: 'https://www.youtube.com/@codeX',
      label: 'YouTube',
    },
    {
      icon: <GitHub className="h-5 w-5" />,
      url: 'https://github.com/',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:contact@example.com',
      label: 'Email',
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div variants={itemVariants} className="mb-8 md:mb-0">
            <span className="text-2xl font-bold gradient-text">
              Purushottam
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              AI Engineer and Developer, helping businesses thrive in the AI
              era. Join me on this journey!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>© {currentYear} Han Main hi owner hu❤️. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
