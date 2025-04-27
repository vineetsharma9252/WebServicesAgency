import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Let's Build Something Amazing Together</h1>
          <p>
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <p className="form-description">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
          
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Subject" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              required 
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Send Message
            <span className="button-icon">→</span>
          </button>
        </form>
        
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Information</h2>
          <p className="info-description">
            Prefer to reach out directly? Here's how you can find us:
          </p>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>Our Office</h3>
              <p>123 Business Street, Suite 456<br />Tech City, TC 10001</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>Main: (123) 456-7890<br />Sales: (123) 456-7891</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>General: contact@webagency.com<br />Support: help@webagency.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-content">
              <h3>Hours</h3>
              <p>Monday-Friday: 9am - 6pm<br />Saturday: 10am - 2pm</p>
            </div>
          </div>
          
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277480.715087758!2d70.6474810751327!3d26.88514138789599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b45090c628f!2sRajasthan!5e0!3m2!1sen!2sin!4v1623861286932!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;