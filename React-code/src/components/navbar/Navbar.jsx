// src/components/Navbar/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

// Import Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setActiveDropdown(null);  
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setLogoVisible(true);
      } else {
        setIsScrolled(false);
        setLogoVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Paths that should have a red navbar
  const redNavbarPaths = ['/clubs', '/astroclub', '/gdsc', '/noticetable'];

  // Determine background color based on location
  const navbarClassName = `navbar ${isScrolled ? 'scrolled' : ''} ${
    redNavbarPaths.includes(location.pathname) ? 'red' : ''
  }`;

  // Dropdown menu items
  const dropdownMenus = {
    about: ['Our Mission', 'Our Vision', 'Leadership', 'History', 'Achievements', 'Panorama Magazine', 'Newspaper', 'Another Campus', 'BIT Raipur'],
    academics: ['Undergraduate', 'Postgraduate', 'Research', 'Departments'],
    departments: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Chemical', 'Electronics'],
    campusLife: ['Hostels', 'Sports', 'Clubs', 'Events'],
    notice: ['Latest Notices', 'Examination', 'Admissions', 'Placements']
  };

  return (
    <nav className={navbarClassName}>
      <div className="three-divs">
      <div className="img-aur-title">
        <div className={`navbar-logo ${logoVisible ? 'fade-in' : 'fade-out'}`}>
          <img src={logo} alt="BIT Logo" width="50px" />
        </div>
        <h3>Bhilai Institute of Technology, Durg</h3>
      </div>

      {/* Desktop Menu */}
      <div className="nav-links">
        <ul>
          <li>About</li>
          <li>Acedemics
          
          </li>
          
          <li>Addmision</li>
          <li>Department</li>
          <li>Placements</li>
          <li>Campus Life</li>
        </ul>
      </div>
        <div className="login">
          LOGIN  
        </div>
        </div>

      {/* Mobile Menu */}
      <div className={`nav-links-mobile ${isMobile ? 'active' : 'inactive'}`}>
        <button className="close-button" onClick={closeMobileMenu} aria-label="Close Menu">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          <li>
            <Link to="#home" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          {Object.keys(dropdownMenus).map((menu) => (
            <li key={menu} className="dropdown">
              <div onClick={() => toggleDropdown(menu)} className="dropdown-toggle">
                <span>
                  {menu.charAt(0).toUpperCase() + menu.slice(1)} <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                </span>
              </div>
              {activeDropdown === menu && (
                <ul className="dropdown-content-mobile">
                  {dropdownMenus[menu].map((item, index) => (
                    <li key={index}>
                      <Link to={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMobileMenu}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="#contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
