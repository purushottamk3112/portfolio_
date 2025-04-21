import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  index: number;
}

const CertificateCard = ({ 
  title, 
  issuer, 
  date, 
  image, 
  credentialUrl, 
  index 
}: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {credentialUrl && (
              <a 
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-gray-900 font-medium text-sm"
              >
                <Award className="h-4 w-4 mr-1" />
                View Credential
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{issuer}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{date}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;