// MobileAppDevelopment.jsx
import { FaMobileAlt, FaReact, FaApple, FaAndroid, FaSync } from 'react-icons/fa';
import './services.css';

const MobileAppDevelopment = () => {
  const projects = [
    {
      id: 1,
      title: 'Fitness Tracking App',
      description: 'Cross-platform app with 500k+ downloads and 4.8 star rating',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      technologies: ['React Native', 'Firebase', 'HealthKit']
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Increased conversions by 35% with optimized mobile experience',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb',
      technologies: ['Flutter', 'Node.js', 'Stripe']
    }
  ];

  const services = [
    {
      icon: <FaMobileAlt />,
      title: 'Native Apps',
      description: 'High-performance iOS and Android applications'
    },
    {
      icon: <FaReact />,
      title: 'Cross-Platform',
      description: 'Single codebase for both platforms with React Native'
    },
    {
      icon: <FaApple />,
      title: 'iOS Development',
      description: 'Swift and Objective-C for Apple devices'
    },
    {
      icon: <FaAndroid />,
      title: 'Android Development',
      description: 'Kotlin and Java for Android ecosystem'
    },
    {
      icon: <FaSync />,
      title: 'App Maintenance',
      description: 'Ongoing support and updates for your mobile apps'
    }
  ];

  return (
    <div className="service-page">
      <section className="hero mobile-hero">
        <div className="container">
          <h1>Mobile App Development</h1>
          <p className="subtitle">Creating engaging mobile experiences that users love</p>
        </div>
      </section>

      <section className="our-approach">
        <div className="container">
          <h2>Our Mobile Expertise</h2>
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
          <h2>Featured Mobile Projects</h2>
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
          <h2>Have a Mobile App Idea?</h2>
          <p>Let's turn your vision into a successful mobile product</p>
          <button className="cta-button">Discuss Your Project</button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;