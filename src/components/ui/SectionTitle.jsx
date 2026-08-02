import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const SectionTitle = ({ badge, title, subtitle, center = true }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-morica-darker uppercase bg-morica-light rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-forest mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;