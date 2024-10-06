import React, { useState } from 'react'
import "./Tabs.css";
import { Link } from 'react-router-dom';

function Tabs() {
    const [activeTab, setActiveTab] = useState('notices');
  const [currentIndexNotices, setCurrentIndexNotices] = useState(0);
  const [currentIndexExams, setCurrentIndexExams] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const notices = [
    { title: 'Notice 1', description: 'This is a brief description of Notice 1.' },
    { title: 'Notice 2', description: 'This is a brief description of Notice 2.' },
    { title: 'Notice 3', description: 'This is a brief description of Notice 3.' },
    { title: 'Notice 4', description: 'This is a brief description of Notice 4.' }
  ];

  const exams = [
    { title: 'Exam 1', description: 'This is a brief description of Exam 1.' },
    { title: 'Exam 2', description: 'This is a brief description of Exam 2.' },
    { title: 'Exam 3', description: 'This is a brief description of Exam 3.' },
    { title: 'Exam 4', description: 'This is a brief description of Exam 4.' },
    { title: 'Exam 5', description: 'This is a brief description of Exam 5.' }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePrevClick = (carouselType) => {
    setAnimationClass('slide-right'); // Add slide right animation

    if (carouselType === 'notices') {
      setTimeout(() => {
        setCurrentIndexNotices((prevIndex) =>
          prevIndex === 0 ? notices.length - 1 : prevIndex - 1
        );
        setAnimationClass('');
      }, 500); // Reset the animation after it's completed
    } else {
      setTimeout(() => {
        setCurrentIndexExams((prevIndex) =>
          prevIndex === 0 ? exams.length - 1 : prevIndex - 1
        );
        setAnimationClass('');
      }, 500);
    }
  };

  const handleNextClick = (carouselType) => {
    setAnimationClass('slide-left'); // Add slide left animation

    if (carouselType === 'notices') {
      setTimeout(() => {
        setCurrentIndexNotices((prevIndex) =>
          prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationClass('');
      }, 500);
    } else {
      setTimeout(() => {
        setCurrentIndexExams((prevIndex) =>
          prevIndex === exams.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationClass('');
      }, 500);
    }
  };

  return (
    <section className="section section-3">
      <div className="section-3-title">
        <div className="s-3-txt">Latest Updates</div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'notices' ? 'active' : ''}`}
            onClick={() => handleTabClick('notices')}
          >
            Notices
          </button>
          <button
            className={`tab-btn ${activeTab === 'examinations' ? 'active' : ''}`}
            onClick={() => handleTabClick('examinations')}
          >
            Examinations
          </button>
        </div>

        {/* Notices Tab */}
        <div className={`tab-content ${activeTab === 'notices' ? 'active' : ''}`}>
          <div className="carousel-container-tabs">
            <button className="carousel-btn prev" onClick={() => handlePrevClick('notices')}>
              &lt;
            </button>
            <div className={`carousel ${animationClass}`}>
              <div className="card">
                <h1>{notices[currentIndexNotices].title}</h1>
                <p>{notices[currentIndexNotices].description}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
            <button className="carousel-btn next" onClick={() => handleNextClick('notices')}>
              &gt;
            </button>
          </div>
          <Link to='/noticetable'>
          <button className="view-all">View All Notices</button>
          </Link>
        </div>

        {/* Examinations Tab */}
        <div className={`tab-content ${activeTab === 'examinations' ? 'active' : ''}`}>
          <div className="carousel-container-exam">
            <button className="carousel-btn prev" onClick={() => handlePrevClick('examinations')}>
              &lt;
            </button>
            <div className={`carousel ${animationClass}`}>
              <div className="card">
                <h1>{exams[currentIndexExams].title}</h1>
                <p>{exams[currentIndexExams].description}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
            <button className="carousel-btn next" onClick={() => handleNextClick('examinations')}>
              &gt;
            </button>
          </div>
          <Link to='/examtable'>
          <button className="view-all">View All Examinations</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Tabs
