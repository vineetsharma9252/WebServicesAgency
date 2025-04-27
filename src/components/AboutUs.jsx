import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Our Agency</h1>
        <p className="about-description">
          We are a team of passionate developers and designers dedicated to 
          creating exceptional digital experiences. Our mission is to provide 
          innovative and tailored solutions to help businesses thrive in the digital world.
        </p>
      </section>
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/path-to-image.jpg" alt="John Doe" className="team-img" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image.jpg" alt="Jane Smith" className="team-img" />
            <h3>Jane Smith</h3>
            <p>Creative Director</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image.jpg" alt="Mike Johnson" className="team-img" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image.jpg" alt="Emily White" className="team-img" />
            <h3>Emily White</h3>
            <p>UX/UI Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
