import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:manoj.godugunuru82@gmail.com', label: 'Email' }
  ];

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Manoj Kumar Godugunuru
            </motion.h1>
            
            <motion.h2 
              className="title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Frontend Developer
            </motion.h2>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Experienced Front-end Engineer with 9 Years of Web Development. Skilled in developing 
              responsive web designs, creating user-friendly interfaces, and ensuring web accessibility.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button className="btn btn-primary">View My Work</button>
              <a href="/assets/Manoj_Resume.pdf" className="btn btn-secondary" download>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="coding-scene">
              <div className="floating-elements">
                <div className="code-block code-block-1">
                  <div className="code-line">const developer = {`{`}</div>
                  <div className="code-line">  name: "Manoj",</div>
                  <div className="code-line">  skills: ["React", "Angular"],</div>
                  <div className="code-line">  experience: "9+ years"</div>
                  <div className="code-line">{`}`}</div>
                </div>
                
                <div className="code-block code-block-2">
                  <div className="code-line">&lt;div className="portfolio"&gt;</div>
                  <div className="code-line">  &lt;h1&gt;Frontend Dev&lt;/h1&gt;</div>
                  <div className="code-line">  &lt;p&gt;Creating amazing UIs&lt;/p&gt;</div>
                  <div className="code-line">&lt;/div&gt;</div>
                </div>
                
                <div className="tech-icon tech-icon-1">⚛️</div>
                <div className="tech-icon tech-icon-2">🔷</div>
                <div className="tech-icon tech-icon-3">💻</div>
                <div className="tech-icon tech-icon-4">🚀</div>
              </div>
              
              <div className="central-element">
                <div className="central-circle">
                  <div className="inner-circle">
                    <span className="dev-text">DEV</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <social.icon />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll arrow positioned in right corner, only visible on Hero section */}
      <div className="scroll-indicator-right">
        <motion.button 
          className="scroll-arrow"
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
