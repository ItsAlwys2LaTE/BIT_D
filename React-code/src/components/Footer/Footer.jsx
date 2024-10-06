import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faPrint} from '@fortawesome/free-solid-svg-icons';

import './footer.css'; // Make sure this file is in the same directory
import imgLogo from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className='footer-father'>
      <div className="footer-container">
        <div className="footer-clg-info">
          <div className="footer-logo-address">
            <img src={imgLogo} alt="BIT Logo" />
            <p>BHILAI INSTITUTE OF TECHNOLOGY, DURG</p>
            <p>Bhilai House, Durg, Chhattisgarh-491001</p>
          </div>
          <div className="footer-contact">
            <div>
              <FontAwesomeIcon icon={faPhone}/>
              <span>0788-2359297</span>
            </div>
            <div>
              
            <FontAwesomeIcon icon={faEnvelope}/>
              <span>bit@bitdurg.ac.in</span>
            </div>
            <div>
             
            <FontAwesomeIcon icon={faPrint}/>
              <span>+91 0788 -2359263</span>
            </div>
          </div>
          <div className="footer-sml">
            <a href="https://www.facebook.com/BIT-DURG-300811987533355/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="40" height="50" >
    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" fill="white"/>
  </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCrXntoiob58a17GcnNsJA8g" target="_blank" rel="noopener noreferrer">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width="40"
      height="50"
    >
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" fill="white"/>
    </svg>
            </a>
            <a href="https://www.linkedin.com/school/bitdrg" target="_blank" rel="noopener noreferrer">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="40"
      height="50"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="white"/>
    </svg>
            </a>
          </div>
        </div>

        <div className="footer-quick-links">
          <p>QUICK LINKS</p>
          <ul>
            <div className="footer-col-1">
              <li><a href="https://bitdurg.ac.in/sports" target="_blank" rel="noopener noreferrer">Sports</a></li>
              <li><a href="https://bitdurg.ac.in/techfest" target="_blank" rel="noopener noreferrer">OJAS</a></li>
              <li><a href="https://bitdurg.ac.in/nss" target="_blank" rel="noopener noreferrer">NSS</a></li>
              <li><a href="https://bitdurg.ac.in/click-club" target="_blank" rel="noopener noreferrer">Clubs</a></li>
            </div>
            <div className="footer-col-2">
              <li><a href="https://www.bitdurg.ac.in/online-payment" target="_blank" rel="noopener noreferrer">Fee Payment</a></li>
              <li><a href="https://bitdurg.ac.in/ncc" target="_blank" rel="noopener noreferrer">NCC</a></li>
              <li><a href="https://bitdurg.ac.in/hostels" target="_blank" rel="noopener noreferrer">Hostel</a></li>
              <li><a href="https://bitdurg.ac.in/sitemap" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            </div>
          </ul>
        </div>
        <div className="footer-quick-links">
          <p>IMPORTANT LINKS</p>
          <ul id="footer-important-links">
            <li><a href="http://csvtu.ac.in/" target="_blank" rel="noopener noreferrer">CSVTU</a></li>
            <li><a href="https://alumni.bitdurg.ac.in/" target="_blank" rel="noopener noreferrer">Alumni</a></li>
            <li><a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">AICTE</a></li>
            <li><a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer">University Grants Commission</a></li>
            <li><a href="https://www.cgdte.in/" target="_blank" rel="noopener noreferrer">DTE Raipur</a></li>
          </ul>
        </div>
        <div className="footer-quick-links">
          <p>DOWNLOADS</p>
          <ul>
            <div className="footer-col-1">
              <li><a href="http://bitdurg.ac.in/downloads/Forms/Backlog_Exam_Form_2021-22.pdf" target="_blank" rel="noopener noreferrer">Backlog Exam form</a></li>
              <li><a href="http://bitdurg.ac.in/downloads/Forms/Transfer_Provisional_Certificate_Form.pdf" target="_blank" rel="noopener noreferrer">Transfer Provisional Certificate form</a></li>
              <li><a href="https://bitdurg.ac.in/downloads/Panorama_2022-23.pdf" target="_blank" rel="noopener noreferrer">Magazine</a></li>
            </div>
            <div className="footer-col-2">
              <li><a href="https://bitdurg.ac.in/pdf/REVALUATION%20FORM%20FOR%20AUTONOMOUS%20BATCH.pdf" target="_blank" rel="noopener noreferrer">Revaluation form</a></li>
              <li><a href="https://www.bitdurg.ac.in/downloads/BIT_Durg_Calendar_2024.pdf" target="_blank" rel="noopener noreferrer">Calendar</a></li>
              <li><a href="https://drive.google.com/file/d/1EI7PWFkUk9boI9oOyuc28vhtwD2fdwOc/view" target="_blank" rel="noopener noreferrer">Prospectus</a></li>
            </div>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright © BIT DURG</p>
    </footer>
  );
};

export default Footer;
