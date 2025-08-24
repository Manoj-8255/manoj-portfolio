import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      title: 'Member of Technical Staff',
      company: 'VMware India',
      location: 'Chennai',
      period: 'Apr 2021 - Present',
      description: 'Working on VMware Aria Hub and Tanzu Service Mesh projects. Developing features using Angular 14, Clarity UI, and implementing comprehensive testing with Jasmine and Karma.',
      technologies: ['Angular 14', 'Clarity UI', 'Jasmine', 'Karma', 'High Charts']
    },
    {
      title: 'Software Engineer',
      company: 'Mesh7 Pvt Ltd',
      location: 'Chennai',
      period: 'Oct 2018 - Mar 2021',
      description: 'Responsible for integrating Mesh7 features into Tanzu Service Mesh. Developed unit test cases and worked with teams across different geographical locations.',
      technologies: ['Angular 10/11', 'Clarity UI', 'Jasmine', 'Karma', 'High Charts']
    },
    {
      title: 'UI Developer',
      company: 'Newt Global India Pvt Ltd',
      location: 'Chennai',
      period: 'Oct 2017 - Oct 2018',
      description: 'Developed and maintained front-end applications using Angular technologies. Collaborated with cross-functional teams to deliver high-quality web applications.',
      technologies: ['Angular', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'UI Developer',
      company: 'Bonaven Software Pvt Ltd',
      location: 'Hyderabad',
      period: 'Jan 2015 - Oct 2017',
      description: 'Developed e-commerce platform admin panel using AngularJS. Created templates for various store categories and implemented CRUD operations.',
      technologies: ['AngularJS', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Python']
    }
  ];

  const education = [
    {
      degree: 'Master of Technology: Software Engineering',
      school: 'Aurora\'s Technological Research Institute',
      location: 'Hyderabad',
      period: '2015',
      description: 'Specialized in software engineering with focus on modern web development technologies and best practices.'
    },
    {
      degree: 'Bachelor of Science: Information Technology',
      school: 'Vignan\'s Engineering College',
      location: 'Guntur',
      period: '2011',
      description: 'Foundation in information technology and computer science principles.'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey and academic background
        </motion.p>

        <div className="experience-content">
          <div className="experience-section">
            <motion.h3 
              className="section-heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaBriefcase className="section-icon" />
              Work Experience
            </motion.h3>
            
            <div className="timeline">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-meta">
                        <span className="company">
                          <FaBriefcase /> {job.company}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {job.location}
                        </span>
                        <span className="period">
                          <FaCalendarAlt /> {job.period}
                        </span>
                      </div>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <div className="job-technologies">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <motion.h3 
              className="section-heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="section-icon" />
              Education
            </motion.h3>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker education"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h4 className="job-title">{edu.degree}</h4>
                      <div className="job-meta">
                        <span className="company">
                          <FaGraduationCap /> {edu.school}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {edu.location}
                        </span>
                        <span className="period">
                          <FaCalendarAlt /> {edu.period}
                        </span>
                      </div>
                    </div>
                    <p className="job-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
