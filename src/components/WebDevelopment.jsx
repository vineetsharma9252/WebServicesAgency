// WebDevelopment.jsx
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import './services.css';

const WebDevelopment = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Built a high-performance online store with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Modern responsive website with CMS integration for easy content management',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS']
    }
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Modern React applications with Vite for blazing fast performance'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Scalable Node.js and Python backend services'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Optimized database architecture for your specific needs'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that drive engagement'
    }
  ];

  return (
    <div className="service-page">
      <section className="hero">
        <div className="container">
          <h1>Web Development Services</h1>
          <p className="subtitle">Building high-performance, scalable web applications that drive business growth</p>
        </div>
      </section>

      <section className="our-approach">
        <div className="container">
          <h2>Our Development Approach</h2>
          <div className="approach-grid">
            {services.map((service, index) => (
              <div key={index} className="approach-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Web Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div 
                  className="project-image" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's discuss how we can bring your web project to life</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;