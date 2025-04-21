import { motion } from 'framer-motion';

interface YoutubeEmbedProps {
  id: string;
  title: string;
}

const YoutubeEmbed = ({ id, title }: YoutubeEmbedProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg"
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </motion.div>
  );
};

export default YoutubeEmbed;