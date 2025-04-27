import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Web</span>
          <span className="logo-highlight">Agency</span>
        </Link>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className="nav-link special"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;