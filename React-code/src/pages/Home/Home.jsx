import React, { useEffect } from 'react'
import "./Home.css"
import UpperNavbar from '../../components/upper-navbar/UpperNavbar'
import Navbar from '../../components/navbar/Navbar'
import Tabs from '../../components/Tabs/Tabs'
import principalImg from '../../assets/Home/principal1.jpg'
import VideoGallery from '../../components/Gallery/VideoGallery';
import Parentcard from '../../components/Cards/Parentcard'
import BitQuote from "../../assets/Home/bit-quote.png"
import { Link } from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'

import NewsMediaCoverage from '../../components/NewsMediaCoverage/NewsMediaCoverage'

import Card from '../../components/Cards/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel, faBook, faNotesMedical, faDumbbell, faVolleyball, faStore, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Research from '../../components/Research/Research'
import AstroClub from '../AllClubs/AstroClub'

 
 
function Home() {
  return (
    <div>
    {/** Nav */}
    <UpperNavbar/>
    <Navbar/>
    <Carousel/>
    <div className="container">
    
    <Tabs test="hello"/>
    <img src={BitQuote} alt="" className='bit-quote' />
    {/** Principle Container */}
    <section class="message-and-container">
    <div class="principal-message-container">
    <div className="img-text">
    <img src={principalImg} alt="BIT-Pricipal"/>
    <div class="principal-message-content">
    <h3>DR. ARUN ARORA</h3>
    <span className='principal'>PRICIPAL</span>
    </div>
    </div>
            <span>BHILAI INSTITUTE OF TECHNOLOGY, DURG</span>
            <p>Bhilai Institute Of Technology, Durg, with a mission to provide world class technical manpower to serve the industry, profession and society and to contribute effectively to the national economic development, has acquired the status of one of the premier technological institutions of India.</p>
            <a href="https://bitdurg.ac.in/director-message" target="_blank">Read More</a>
    </div>
    
    <div class="facility-container">
        <h3>FACILITIES</h3>
        <div class="facility-content">
            <a href="https://bitdurg.ac.in/hostels" target="_blank" class="facility-options">
    
                <FontAwesomeIcon icon={faHotel}/>
                {` `}   Hostels
            </a>
            <a href="https://bitdurg.ac.in/central-library" target="_blank" class="facility-options">
            <FontAwesomeIcon icon={faBook}/>
            {` `}    Library
            </a>
            <a href="https://bitdurg.ac.in/dispensary" target="_blank" class="facility-options">
               <FontAwesomeIcon icon={faNotesMedical}/>
               {` `}  Medical Facility
            </a>
            <a href="https://bitdurg.ac.in/gym" target="_blank" class="facility-options">
                <FontAwesomeIcon icon={faDumbbell}/>
                {` `} Gymnasium
            </a>
            <a href="https://bitdurg.ac.in/sports" target="_blank" class="facility-options" id="facility-sports">
            <FontAwesomeIcon icon={faVolleyball}/>
            {` `} Sports
            </a>
            <a href="https://bitdurg.ac.in/student-store" target="_blank" class="facility-options">
            <FontAwesomeIcon icon={faStore}/>
           {` `} Student's Store
            </a>
            <a href="https://bitdurg.ac.in/bank" target="_blank" class="facility-options">
               <FontAwesomeIcon icon={faBuildingColumns}/>
               {` `} Bank
            </a>
            <a href="https://bitdurg.ac.in/auditorium" target="_blank" class="facility-options">
            <FontAwesomeIcon icon={faHotel}/>
            {` `} Auditorium
            </a>
        </div>
        <a href="https://bitdurg.ac.in/amenities" target="_blank" class="facility-view-all">View all...</a>
    </div>
</section>

{/** Whats Happening */}
    <section className='whats-happening'>
    <h3>What's Happening</h3>
    <div className="two-container">

    <div className="three-list">
    <Link to='/login'>
    <a href="">OJAS</a>
    </Link>
    <a href="">BIT CONFERENCE</a>
    <a href="">BLOGS</a>
    <Link to='/clubs'>
    <a href="">CLUBS</a>
    </Link>
    </div>
    <div className="media-container">
    <h4>Media Coverage</h4>
    <NewsMediaCoverage/>
    </div>

    </div>
    </section>
    <Research/>
    <VideoGallery/>
    
    </div> {/**Container Div */}
    
    <Footer/>
    </div>
  )
}

export default Home






