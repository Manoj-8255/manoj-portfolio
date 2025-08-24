import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaHeart, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutPoints = [
    {
      icon: FaUser,
      title: 'Who I Am',
      description: 'A passionate Frontend Developer with 9 years of experience in creating responsive web applications and user-friendly interfaces.'
    },
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Master of Technology in Software Engineering from Aurora\'s Technological Research Institute, Hyderabad.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'I love turning complex problems into simple, beautiful, and intuitive solutions with modern web technologies.'
    },
    {
      icon: FaCode,
      title: 'Approach',
      description: 'Clean code, user experience, and performance are at the heart of everything I build.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get to know me better and understand what drives me in the world of technology
        </motion.p>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Manoj Kumar Godugunuru</h3>
            <p>
              I'm a passionate and creative Frontend Developer who loves building things that live on the internet. 
              With 9 years of experience in web development, I've had the privilege of working on various projects 
              ranging from e-commerce platforms to enterprise-level applications.
            </p>
            <p>
              My journey in web development started with AngularJS and has evolved to include modern technologies 
              like Angular 14, React, TypeScript, and various UI frameworks. I specialize in creating responsive 
              web designs that provide optimal viewing and interaction across all devices and screen sizes.
            </p>
            <p>
              I've worked with cross-functional teams across different geographies, ensuring the delivery of 
              high-quality, fully functional web applications. My experience includes state management with NgRx, 
              creating reusable components with Storybook, and implementing comprehensive testing strategies.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Companies Worked</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-points"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="points-grid">
            {aboutPoints.map((point, index) => (
              <motion.div 
                key={point.title}
                className="point-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="point-icon">
                  <point.icon />
                </div>
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
