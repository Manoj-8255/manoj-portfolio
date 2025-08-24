import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'VMware Aria Hub',
      description: 'A unified management solution for VMware cloud and multi-cloud environments. Powered by VMware Aria Graph, a graph-based data store technology that reduces multi-cloud complexity.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=VMware+Aria+Hub',
      technologies: ['Angular 14', 'HTML', 'CSS3', 'Clarity UI', 'Jasmine', 'Karma'],
      category: 'enterprise',
      github: '#',
      live: '#',
      featured: true,
      duration: '0.5 Year',
      role: 'Spaces Feature Development, UI Design, Unit Testing'
    },
    {
      id: 2,
      title: 'Tanzu Service Mesh (TSM)',
      description: 'Provides advanced, end-to-end connectivity, security, and insights for modern applications across microservices, APIs, and data, enabling compliance with SLOs and data protection regulations.',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Tanzu+Service+Mesh',
      technologies: ['Angular 14', 'HTML', 'CSS3', 'Clarity UI', 'Jasmine', 'Karma', 'High Charts'],
      category: 'enterprise',
      github: '#',
      live: '#',
      featured: true,
      duration: '2.7 Years',
      role: 'Feature Integration, Implementation, Unit Testing'
    },
    {
      id: 3,
      title: 'Mesh7 Platform',
      description: 'Advanced service mesh solution providing connectivity, security, and insights for modern applications with end-to-end visibility and compliance capabilities.',
      image: 'https://via.placeholder.com/400x250/47A248/ffffff?text=Mesh7+Platform',
      technologies: ['Angular 10/11', 'HTML', 'CSS3', 'Clarity UI', 'Jasmine', 'Karma', 'High Charts'],
      category: 'enterprise',
      github: '#',
      live: '#',
      featured: false,
      duration: '2.5 Years',
      role: 'Feature Development, Integration, Testing'
    },
    {
      id: 4,
      title: 'Integrated Verizon Advanced (iVAPP)',
      description: 'FTTP provisioning platform for voice, data, video and specials. Manages assignable inventory provisioning and activates FTTP network elements with end-to-end workflow management.',
      image: 'https://via.placeholder.com/400x250/FF9900/ffffff?text=iVAPP+Verizon',
      technologies: ['Angular 4', 'HTML', 'CSS3', 'SVG', 'Component Development'],
      category: 'telecom',
      github: '#',
      live: '#',
      featured: false,
      duration: '2 Years',
      role: 'JSP to Angular Migration, Component Development, SVG Implementation'
    },
    {
      id: 5,
      title: 'Gainstores E-commerce Platform',
      description: 'E-commerce platform where sellers buy stores and upload products using Admin Panel. Includes different store categories with customizable templates and payment processing.',
      image: 'https://via.placeholder.com/400x250/3776AB/ffffff?text=Gainstores',
      technologies: ['AngularJS', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Python'],
      category: 'ecommerce',
      github: '#',
      live: '#',
      featured: false,
      duration: '2.7 Years',
      role: 'Admin Panel Development, Template Creation, CRUD Operations'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'enterprise', label: 'Enterprise' },
    { key: 'telecom', label: 'Telecom' },
    { key: 'ecommerce', label: 'E-commerce' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A showcase of my professional work and enterprise-level projects
        </motion.p>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" title="View Code">
                      <FaGithub />
                    </a>
                    <a href={project.live} className="project-link" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="project-meta">
                    <span className="project-duration">Duration: {project.duration}</span>
                    <span className="project-role">Role: {project.role}</span>
                  </div>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together?</p>
          <button className="btn btn-primary">Let's Connect</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
