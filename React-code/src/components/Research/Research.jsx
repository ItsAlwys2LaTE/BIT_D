import React, { useEffect, useState, useRef } from 'react';
import "./Research.css"
import newImg1 from '../../assets/Research/img1.webp';
import newImg2 from '../../assets/Research/img2.webp';
import newImg3 from '../../assets/Research/img3.jpg';
import newImg4 from '../../assets/Research/img4.avif';
import newImg5 from '../../assets/Research/img5.webp';
function Research() {
  const newsItems = [
    {
      id: 1,
      title: 'Portable Transparent Security Shelter',
      image: newImg1,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/patent-copyright',
      author: 'Dr. Shiena Shekhar'
    },
    {
      id: 2,
      title: 'Solar Operating Popcorn Machine',
      image: newImg2,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/patent-copyright',
      author: 'Dr. Shiena Shekhar'
    },
    {
      id: 3,
      title: 'Artificial                    Intelligent                        Chaos Forecasting System Version 1.0 (AI-CFS v 1.0)',
      image: newImg3,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/patent-copyright',
      author: 'Dr. Sanjeev Karmakar'
    },
    {
      id: 4,
      title: 'Weighted Associative Classifier Version 1.0 (WAC v 1.0)',
      image: newImg4,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/patent-copyright',
      author: 'Dr. Sunita Soni'
    },
    {
      id: 5,
      title: 'Students Feedback Management System',
      image: newImg5,  // Added a fifth image
      url: 'https://bitdurg.ac.in/patent-copyright',
      author: 'See all faculty'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className='research-container'>
    <div className="news-carousel-container">
    <h3>Research</h3>
      <div ref={containerRef} className="news-carousel-slider">
        {newsItems.map((item) => (
          <div key={item.id} className="news-carousel-card">
          <div className="news-carousel-card-content">
              <img src={item.image} alt={item.title} className="research-carousel-card-image" />
            </div>
            <div className="research-carousel-card-header">
              <h2 className="news-carousel-card-title">{item.title}</h2>
            </div>
            <div className="research-carousel-card-footer">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="research-carousel-teacher">
              {item.author}
            </a>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="research-carousel-read-more">
              Read Full Content
            </a>
          </div>
            
           
          </div>
        ))}
      </div>
      <button className="news-carousel-button prev" onClick={prevCard}>
        ◀
      </button>
      <button className="news-carousel-button next" onClick={nextCard}>
        ▶
      </button>
    </div>
    </div>
  )
}

export default Research
