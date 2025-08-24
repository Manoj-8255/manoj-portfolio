import { motion } from 'framer-motion';
import React from 'react';
import {
    FaAws,
    FaCss3Alt,
    FaDatabase,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, level: 88, color: '#F7DF1E' },
        { name: 'Angular 14', icon: FaReact, level: 92, color: '#DD0031' },
        { name: 'React', icon: FaReact, level: 85, color: '#61DAFB' }
      ]
    },
    {
      name: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
        { name: 'MongoDB', icon: FaDatabase, level: 75, color: '#47A248' }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'TypeScript', icon: FaJs, level: 90, color: '#3178C6' }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 88, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, level: 75, color: '#2496ED' },
        { name: 'Kubernetes', icon: FaDatabase, level: 70, color: '#326CE5' },
        { name: 'AWS', icon: FaAws, level: 65, color: '#FF9900' }
      ]
    }
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 'Quick Learning',
    'Adaptability', 'Cross-functional Teamwork', 'Attention to Detail', 'Leadership'
  ];

  const additionalSkills = [
    'NgRx State Management', 'Angular CLI', 'Storybook', 'Jasmine & Karma Testing',
    'Cypress E2E Testing', 'Elasticsearch', 'GraphQL', 'High Charts', 'Clarity UI',
    'Angular Material', 'Bootstrap', 'Responsive Web Design', 'Module Federation'
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technical skills and competencies I've developed over 9 years of experience
        </motion.p>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="soft-skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="soft-skill-tag"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="additional-skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">Additional Skills & Technologies</h3>
            <div className="additional-skills-grid">
              {additionalSkills.map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="additional-skill-tag"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
