import React from "react";
import "./AstroClub.css";
import UpperNavbar from "../../components/upper-navbar/UpperNavbar";
import Navbar from "../../components/navbar/Navbar";

const AstroClub = () => {
  return (

    <div>
    <UpperNavbar/>
    <Navbar/>
    <div className="club-father">
    <div className="club-container">
    
      <h1>ASTRO CLUB</h1>
      <div className="club-content">
        <p>
          The Astro Club is a special venture for astronomical popularization and basic sciences. 
          Started a few years back, in Bhilai Institute of Technology, Durg is now a family of more 
          than 800+ members, under guidance of Prof. C.S. Robinson, aiming towards Astronomical 
          awareness amongst the youth, and removing superstitions and myths by inculcating a scientific 
          temperament in society. The Astro Club is the 1st Formal Astronomy Club of Chhattisgarh State.
        </p>
        <p>
          The Astro Club aims towards developing scientific temperament, general awareness of science and astronomy among the masses, 
          and removal of common superstitions ('Andhvishwas'), enabling people to develop their knowledge and understanding 
          of the ways of the universe.
        </p>
        <div className="club-content-1">
          <h3 className="club-content-heading">EVENTS</h3>
          <p>
            The celestial bodies have always been objects of curiosity in the minds of the people, and hence The Astro Club organizes 
            various events throughout the year like:
          </p>
          <ul>
            <li>Basic astronomy classes</li>
            <li>Overnight sky reading camps</li>
            <li>Telescopic operations</li>
            <li>Star, planet, constellation identification</li>
            <li>Excursion trips to observatories</li>
            <li>Quizzes</li>
            <li>Guest lectures by eminent Scientists</li>
            <li>Training and Workshops</li>
          </ul>
        </div>
      </div>
      <p>
        The Astro Club is affiliated with Vigyan Prasar (D.S.T., Govt. of India) and Chhattisgarh Vigyan Sabha, Raipur. It is also supported 
        by STAR Club, Bhopal.
      </p>
    </div>
    </div>
    </div>
  );
};

export default AstroClub;
