import React, { useEffect, useState, useRef } from 'react';
import './NewsMediaCoverage.css';
import newImg1 from '../../assets/News/new-img-1.png';
import newImg2 from '../../assets/News/new-img-2.png';
import newImg3 from '../../assets/News/new-img-3.jpg';
import newImg4 from '../../assets/News/new-img-4.png';
import newImg5 from '../../assets/News/new-img-5.png';

function NewsMediaCoverage() {
  const newsItems = [
    {
      id: 1,
      title: 'Breaking News: Major Scientific Discovery',
      image: newImg1,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/all-media-coverage-list',
    },
    {
      id: 2,
      title: 'Tech Giant Announces New Product Line',
      image: newImg2,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/all-media-coverage-list',
    },
    {
      id: 3,
      title: 'Global Climate Summit Reaches Historic Agreement',
      image: newImg3,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/all-media-coverage-list',
    },
    {
      id: 4,
      title: 'Sports Team Wins Championship in Dramatic Finale',
      image: newImg4,  // Corrected: Direct path to the image
      url: 'https://bitdurg.ac.in/all-media-coverage-list',
    },
    {
      id: 5,
      title: 'Innovation in Medicine Saves Lives',
      image: newImg5,  // Added a fifth image
      url: 'https://bitdurg.ac.in/all-media-coverage-list',
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
    const interval = setInterval(nextCard, 5000); // Auto-swipe every 5 seconds
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
    <div className="news-carousel-container">
      <div ref={containerRef} className="news-carousel-slider">
        {newsItems.map((item) => (
          <div key={item.id} className="news-carousel-card">
            <div className="news-carousel-card-header">
              <h2 className="news-carousel-card-title">{item.title}</h2>
            </div>
           
            <div className="news-carousel-card-content">
              <img src={item.image} alt={item.title} className="news-carousel-card-image" />
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
  );
}

export default NewsMediaCoverage;
