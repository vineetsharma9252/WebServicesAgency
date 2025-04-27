// ServicesPage.jsx
import { Link } from 'react-router-dom';
import { FaCode, FaRobot, FaMobileAlt, FaCloud, FaChartLine, FaShieldAlt, FaPalette } from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom, high-performance websites and web applications tailored to your business needs.',
      icon: <FaCode className="service-icon" />,
      path: '/services/web-development',
      color: '#6e8efb'
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'AI-powered solutions that analyze data and automate decision-making processes.',
      icon: <FaRobot className="service-icon" />,
      path: '/services/machine-learning',
      color: '#4facfe'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Beautiful, functional mobile applications for iOS and Android platforms.',
      icon: <FaMobileAlt className="service-icon" />,
      path: '/services/mobile-apps',
      color: '#a18cd1'
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your digital transformation.',
      icon: <FaCloud className="service-icon" />,
      path: '/services/cloud',
      color: '#00f2fe'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with powerful visualization and analysis tools.',
      icon: <FaChartLine className="service-icon" />,
      path: '/services/data-analytics',
      color: '#5ee7df'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Comprehensive protection for your digital assets and infrastructure.',
      icon: <FaShieldAlt className="service-icon" />,
      path: '/services/cybersecurity',
      color: '#667eea'
    },
    {
      id: 7,
      title: 'UI/UX Design',
      description: 'Intuitive, user-centered designs that enhance engagement and conversion.',
      icon: <FaPalette className="service-icon" />,
      path: '/services/design',
      color: '#f78da7'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle">Comprehensive digital solutions to grow your business</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <Link 
                to={service.path} 
                key={service.id} 
                className="service-card"
                style={{ '--service-color': service.color }}
              >
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="learn-more">
                  Learn more <span className="arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Our experts can help you identify the right solutions for your business</p>
          <Link to="/contact" className="cta-button">Get a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;