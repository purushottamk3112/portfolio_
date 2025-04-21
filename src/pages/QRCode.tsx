import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const QRCode = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/vivaan.co.in/',
    github: 'https://github.com/purushottamk3112',
    linkedin: 'https://linkedin.com/in/pkumar8287',
  };

  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Kumar;Purushottam;;;
FN:Purushottam Kumar
TEL:+918287359456
EMAIL:purushottamk3112@gmail.com
URL;type=INSTAGRAM:${socialLinks.instagram}
URL;type=GITHUB:${socialLinks.github}
URL;type=LINKEDIN:${socialLinks.linkedin}
END:VCARD`;

  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Connect With <span className="gradient-text">One Scan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-light mb-8 text-gray-600 dark:text-gray-400"
            >
              Skip the typing, start connecting
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl italic text-purple-600 dark:text-purple-400"
            >
              "Lazy people find smart solutions" 😉
            </motion.p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <QRCodeSVG
                value={vCardData}
                size={400}
                level="H"
                includeMargin={true}
                imageSettings={{
                  src: "https://i.postimg.cc/52M0Dynz/IMG-20220526-213205-1.jpg",
                  x: undefined,
                  y: undefined,
                  height: 80,
                  width: 80,
                  excavate: true,
                }}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRCode;