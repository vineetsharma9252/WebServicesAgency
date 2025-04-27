// Testimonials.jsx
import { useState } from 'react';
import './Testimonial.css'; // Create this CSS file for styling

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      content: 'This Vite + React website exceeded all our expectations. The performance is blazing fast and the developer experience was fantastic throughout our project.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, StartupHub',
      content: 'We migrated our legacy app to Vite + React and saw immediate improvements in build times and hot module replacement. Our team is much more productive now.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Product Manager, DesignCo',
      content: 'The seamless integration between Vite and React made our development process smooth. The final product loads instantly, which our users love!',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Lead Developer, FinTech Solutions',
      content: 'As a developer, I appreciate how Vite eliminates the wait times during development. Combined with React, it\'s our go-to stack for all new projects.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What People Say About Us</h2>
        <p className="subtitle">Don't just take our word for it - hear from our clients</p>
        
        <div className="testimonials-container">
          <button className="nav-button prev" onClick={prevTestimonial}>&lt;</button>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonials[currentIndex].content}"</p>
            </div>
            
            <div className="testimonial-author">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="avatar"
              />
              <div className="author-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
                <div className="rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
          </div>
          
          <button className="nav-button next" onClick={nextTestimonial}>&gt;</button>
        </div>
        
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;