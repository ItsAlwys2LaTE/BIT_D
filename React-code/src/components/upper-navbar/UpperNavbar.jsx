import React, { useRef, useEffect } from 'react';
import './UpperNavbar.css';
import logo from '../../assets/logo.png';
import img1 from '../../assets/images/nav/naac-img.png';
import img2 from '../../assets/images/nav/nba-img.png';
import img3 from '../../assets/images/nav/iso-2015-img.png';
import img4 from '../../assets/images/nav/iso-9001-img.png';
import img5 from '../../assets/images/nav/igbc-img.png';
import Typed from 'typed.js';

function UpperNavbar() {
  const typedTextRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Bhilai Institute of Technology, Durg (CG)",
        "भिलाई इंस्टीट्यूट ऑफ टेक्नोलॉजी, दुर्ग (CG)"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    };

    if (typedTextRef.current) {
      typedInstanceRef.current = new Typed(typedTextRef.current, options);
    }

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <nav className='upper-container'>
      <img src={logo} className='bit-logo' alt="bitlogo" />
      <div className="nav-text">
        <h1 ref={typedTextRef}></h1>
        <span >SETH BALKRISHAN MEMORIAL | ESTABLISHED 1986</span>
      </div>
      
      <ul>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </ul>
    </nav>
  );
}

export default UpperNavbar;
