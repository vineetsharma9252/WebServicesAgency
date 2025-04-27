import './Home.css';
import { FaCode, FaPaintBrush, FaSearch, FaMobile, FaChartLine, FaServer } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Transform Your Digital Presence</h1>
          <p className="hero-subtitle">
            We craft bespoke web solutions that drive growth, engagement, and measurable results for your business
          </p>
          <div className="hero-cta">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services">
        <div className="section-header">
          <h2>Our Comprehensive Services</h2>
          <p className="section-subtitle">
            We offer end-to-end digital solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3>Web Development</h3>
            <p>
              Custom, responsive websites and web applications built with modern technologies 
              like React, Node.js, and MongoDB for optimal performance.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaPaintBrush />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              User-centered designs that combine aesthetics with functionality to create 
              intuitive and engaging digital experiences.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaSearch />
            </div>
            <h3>SEO Optimization</h3>
            <p>
              Comprehensive search engine optimization strategies to improve your visibility 
              and drive qualified traffic to your website.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaMobile />
            </div>
            <h3>Mobile Development</h3>
            <p>
              Cross-platform mobile applications that deliver seamless experiences 
              across iOS and Android devices.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Data-driven marketing strategies including social media, PPC, and content 
              marketing to grow your online presence.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <FaServer />
            </div>
            <h3>Hosting & Maintenance</h3>
            <p>
              Reliable hosting solutions and ongoing maintenance to keep your digital 
              assets running smoothly.
            </p>
            <a href="#" className="service-link">Learn more →</a>
          </div>
        </div>
      </section>
      
      {/* Client Showcase */}
      <section className="clients">
        <div className="section-header">
          <h2>Trusted By Industry Leaders</h2>
          <p className="section-subtitle">
            We've helped businesses of all sizes achieve their digital goals
          </p>
        </div>
        <div className="client-logos">
          <img src="/images/clients/client1.png" alt="Client 1" />
          <img src="/images/clients/client2.png" alt="Client 2" />
          <img src="/images/clients/client3.png" alt="Client 3" />
          <img src="/images/clients/client4.png" alt="Client 4" />
          <img src="/images/clients/client5.png" alt="Client 5" />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Elevate Your Digital Presence?</h2>
          <p>
            Let's discuss how we can help you achieve your business objectives through 
            innovative digital solutions.
          </p>
          <button className="cta-button primary">Schedule a Free Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Home;