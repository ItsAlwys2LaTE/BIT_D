import React from 'react'
import "./Clubs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleQuestion, faFilePowerpoint, faMicrochip, faMicrophone, faMicrophoneLines, faPenToSquare, faPersonChalkboard, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import UpperNavbar from '../../components/upper-navbar/UpperNavbar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';


function Clubs() {
  return (
    <div>
      <UpperNavbar/>
      <Navbar/>
    <div className='container'>
      <div className="clubs-container">
    <Link to='/astroclub'>
    <div className='clubs-list'><FontAwesomeIcon icon={faUserAstronaut} className='club-icon'/><h3>Astro Club</h3></div>
    </Link>
    <Link to='/gdsc'>
      <div className='clubs-list'><svg xmlns="http://www.w3.org/2000/svg"  width={40}
      height={50} viewBox="0 0 488 512">
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
    </svg><h3>GDSC</h3></div>
    </Link>

      <a href="file:///c%3A/Users/garv%20thakre/BIT_D-1/clubs/QuizzBizz.html"><div className='clubs-list'><FontAwesomeIcon icon={faCircleQuestion} className='club-icon'/><h3>Quizzbizz</h3></div></a>
      <div className='clubs-list'><FontAwesomeIcon icon={faMicrochip} className='club-icon'/><h3>TechnoHub</h3></div>
      <div className='clubs-list'><FontAwesomeIcon icon={faMicrophoneLines} className='club-icon'/><h3>Public Speaking</h3></div>
      <div className='clubs-list'><FontAwesomeIcon icon={faPersonChalkboard} className='club-icon'/><h3>PAC</h3></div>
      <div className='clubs-list'><FontAwesomeIcon icon={faPenToSquare} className='club-icon'/><h3>Literacy</h3></div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Clubs