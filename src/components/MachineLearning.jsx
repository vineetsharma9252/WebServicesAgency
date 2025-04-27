// MachineLearning.jsx
import { FaRobot, FaChartLine, FaBrain, FaDatabase, FaCloud } from 'react-icons/fa';
import './services.css';

const MachineLearning = () => {
  const projects = [
    {
      id: 1,
      title: 'Predictive Maintenance',
      description: 'ML system that predicts equipment failures with 92% accuracy',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      technologies: ['TensorFlow', 'Python', 'IoT Data']
    },
    {
      id: 2,
      title: 'Customer Churn Prediction',
      description: 'Identified at-risk customers with 85% precision for a SaaS company',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['Scikit-learn', 'XGBoost', 'Pandas']
    }
  ];

  const services = [
    {
      icon: <FaRobot />,
      title: 'AI Solutions',
      description: 'Custom AI models tailored to your business challenges'
    },
    {
      icon: <FaChartLine />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors with machine learning'
    },
    {
      icon: <FaBrain />,
      title: 'Deep Learning',
      description: 'Complex pattern recognition with neural networks'
    },
    {
      icon: <FaDatabase />,
      title: 'Data Engineering',
      description: 'Prepare and optimize your data for ML applications'
    },
    {
      icon: <FaCloud />,
      title: 'ML Deployment',
      description: 'Production-ready ML models in cloud or on-premise'
    }
  ];

  return (
    <div className="service-page">
      <section className="hero ml-hero">
        <div className="container">
          <h1>Machine Learning Services</h1>
          <p className="subtitle">Transforming data into intelligent solutions that create competitive advantage</p>
        </div>
      </section>

      <section className="our-approach">
        <div className="container">
          <h2>Our ML Capabilities</h2>
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
          <h2>ML Success Stories</h2>
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
          <h2>Ready to Harness the Power of AI?</h2>
          <p>Let's explore how machine learning can solve your business challenges</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default MachineLearning;