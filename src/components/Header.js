import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home">Portfolio</a>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.href)}
                    className="nav-link"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <motion.button 
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.button>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
