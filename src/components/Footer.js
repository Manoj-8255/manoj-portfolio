import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              © {currentYear} Manoj Kumar Godugunuru. Made with <FaHeart className="heart-icon" /> and lots of coffee.
            </p>
            <p className="footer-subtitle">
              Building digital experiences that matter
            </p>
          </motion.div>
          
          <motion.button 
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
