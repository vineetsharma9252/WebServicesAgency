import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/ContactUs';
import Testimonials from './components/Testimonial';
import WebDevelopment from './components/WebDevelopment';
import MachineLearning from './components/MachineLearning';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import ServicesPage from './components/ServicesPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/machine-learning" element={<MachineLearning />} />
        <Route path="/services/mobile-apps" element={<MobileAppDevelopment />} />
        <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;