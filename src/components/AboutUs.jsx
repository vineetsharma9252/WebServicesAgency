import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>We Craft Digital Experiences That Matter</h1>
          <p className="hero-description">
            At our core, we believe technology should be beautiful, intuitive, and purposeful. 
            Since 2015, we've been helping brands transform their digital presence through 
            innovative design and cutting-edge development.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in a small co-working space with just three people, we've grown into a 
            team of 50+ specialists across three continents. What started as a passion project 
            has become an award-winning digital agency serving clients from startups to Fortune 500 companies.
          </p>
          <div className="milestones">
            <div className="milestone">
              <span className="number">250+</span>
              <span className="label">Projects Completed</span>
            </div>
            <div className="milestone">
              <span className="number">98%</span>
              <span className="label">Client Retention</span>
            </div>
            <div className="milestone">
              <span className="number">15</span>
              <span className="label">Industry Awards</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We challenge conventions and explore new possibilities to deliver breakthrough solutions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Great work comes from teamwork—with our colleagues and with our clients.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Impact</h3>
            <p>We measure success by the tangible results we create for our clients.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Passion</h3>
            <p>We love what we do, and it shows in every pixel and line of code.</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>The Minds Behind the Magic</h2>
          <p>Meet the talented individuals who make it all happen</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src="/images/team/john-doe.jpg" alt="John Doe" />
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <h3>John Doe</h3>
            <p className="position">CEO & Founder</p>
            <p className="bio">
              Visionary leader with 15 years of experience in digital transformation. 
              Believes technology should serve human needs.
            </p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="/images/team/jane-smith.jpg" alt="Jane Smith" />
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
            <h3>Jane Smith</h3>
            <p className="position">Creative Director</p>
            <p className="bio">
              Design thinker who bridges aesthetics and functionality. 
              Former art director at major advertising agencies.
            </p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="/images/team/mike-johnson.jpg" alt="Mike Johnson" />
              <div className="social-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <h3>Mike Johnson</h3>
            <p className="position">Lead Developer</p>
            <p className="bio">
              Full-stack wizard who makes the impossible possible. 
              Open-source contributor and tech community leader.
            </p>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="/images/team/emily-white.jpg" alt="Emily White" />
              <div className="social-links">
                <a href="#"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <h3>Emily White</h3>
            <p className="position">UX/UI Designer</p>
            <p className="bio">
              User advocate who crafts intuitive experiences. 
              Psychology background informs her human-centered approach.
            </p>
          </div>
        </div>
        <div className="team-cta">
          <p>Want to join our team? We're always looking for talented people.</p>
          <button className="cta-button">View Open Positions</button>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <blockquote>
              "Working with this team transformed our digital presence. 
              They understood our vision and executed flawlessly."
            </blockquote>
            <div className="client-info">
              <img src="/images/clients/client1.jpg" alt="Sarah Johnson" />
              <div>
                <p className="client-name">Sarah Johnson</p>
                <p className="client-company">CEO, TechStart Inc.</p>
              </div>
            </div>
          </div>
          {/* Additional testimonials would go here */}
        </div>
      </section>
    </div>
  );
};

export default About;