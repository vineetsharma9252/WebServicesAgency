import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>We Build Digital Experiences</h1>
          <p>Professional web solutions for your business</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Custom websites and web applications</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Beautiful, user-friendly interfaces</p>
          </div>
          <div className="service-card">
            <h3>SEO Optimization</h3>
            <p>Get found by your customers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
