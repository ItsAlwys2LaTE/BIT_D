import React from "react";
import "./GDSC.css";
import UpperNavbar from "../../components/upper-navbar/UpperNavbar"; // Assuming you're using common navbar components
import Navbar from "../../components/navbar/Navbar"; // Reusable navigation component
import "./AstroClub.css"
import gdImg2 from "../../assets/gdsc-img2.png"

const GDSC = () => {
  return (
    <div>
    <UpperNavbar/>
    <Navbar/>
    <div className="club-father-gd">
      <div className="club-container">
        <h1>
          <span>GOOGLE</span> <span>DEVELOPER</span> <span>STUDENT</span> <span>CLUB</span>
        </h1>
        <div className="club-content">
          <p>
            The Google Developer Student Club (GDSC) at Bhilai Institute of
            Technology is an inclusive space for everyone who intends to excel in
            technology, striving to define what it truly means to be a developer.
            By joining our chapter, club members will gain exposure to the
            "what's" and "how's" of development. We concentrate on contributing to
            the overall development of individuals. Our aim is to create an
            environment that fosters collaboration and encourages learning,
            ultimately leading to the delivery of impactful results.
          </p>
          <p>
            <b>Developer Student Clubs (DSC)</b> are university-based community
            groups powered by Google Developers for students interested in
            technology. These clubs help student developers learn through hands-on
            workshops. They then identify challenges faced by local businesses,
            NGOs, and sometimes even their own universities, and build real
            solutions for real problems.
          </p>
          <div className="club-content-1">
            <h3 className="club-content-heading">WHY JOIN DSC @ BITD</h3>
            <p>
              Google Developer Students Clubs, BITD was introduced in 2021 - since
              then the community has grown in folds - we have created a culture at
              our campus that inspires students to get their hands dirty in
              technology. We organize and facilitate workshops, hackathons,
              speaker sessions, and Study Jams to provide students with technical
              development skills. By joining us, you can:
            </p>
            <ul>
              <li>
                <span>⭐</span>
                <p>
                  Attend workshops, seminars, hackathons, and other informative
                  events
                </p>
              </li>
              <li>
                <span>⭐</span>
                <p>
                  Expand your technical skills in a peer-to-peer learning
                  environment
                </p>
              </li>
              <li>
                <span>⭐</span>
                <p>
                  Collaborate and apply the acquired skills by helping build
                  solutions for our local community and beyond. Give back to your
                  community by helping others learn, too
                </p>
              </li>
              <li>
                <span>⭐</span>
                <p>
                  Participate in annual programs like Solution Challenge & Arcade
                  to stand a chance of winning prizes from Google
                </p>
              </li>
              <li>
                <span>⭐</span>
                <p>
                  Expand your network by meeting Tech leaders and Industry
                  professionals
                </p>
              </li>
              <li>
                <span>⭐</span>
                <p>
                  Have fun and meet other students interested in developer
                  technologies
                </p>
              </li>
            </ul>
          </div>

          <div className="club-content-1 club-content-2">
            <div>
              <img src={gdImg2} alt="GDSC Event" />
              <h4>GDSC Intro Session and Announcement of Google Cloud Study Jams</h4>
              <p>
                On September 22, 2023, GDSC BITD held its in-person orientation event at Bhilai Institute of Technology Durg, 
                introducing the new team and outlining the agenda for the upcoming year.
              </p>
            </div>
            <div>
              <h4>OpinHacks</h4>
              <p>
                From September 29, 2023, to October 1, 2023, GDSC BITD held a 36-hour national hackathon, OpinHacks, providing developers 
                with a platform to solve real-world issues and promote innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GDSC;
