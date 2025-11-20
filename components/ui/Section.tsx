import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false, fullWidth = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${
        dark 
          ? 'bg-grace-dark text-white' 
          : 'bg-white text-grace-dark'
      } ${className}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6 md:px-12'}`}
      >
        {children}
      </motion.div>
    </section>
  );
};