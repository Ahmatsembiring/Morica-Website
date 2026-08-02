import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-2xl p-6 shadow-lg border border-morica/10 hover:shadow-xl transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;