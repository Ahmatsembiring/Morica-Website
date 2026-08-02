import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base";
  
  const variants = {
    primary: "bg-morica hover:bg-morica-dark text-white shadow-lg hover:shadow-morica/30 hover:-translate-y-1",
    secondary: "bg-white text-forest border-2 border-morica hover:bg-morica hover:text-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-forest"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;