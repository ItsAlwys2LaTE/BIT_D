import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';
import img1 from '../../assets/Main-images/291.jpg'
import img2 from '../../assets/Main-images/images.jpeg.jpg'
import img3 from '../../assets/Main-images/241.jpg'
import img4 from '../../assets/Main-images/431625776_1092143698721308_7083196546950474453_n.jpg'
import img5 from '../../assets/Main-images/18392857_5984230.jpg'

const Carousel = () => {
  const slidesData = [
    {
      src: img1,
      alt: 'Nature',
      caption: 'Welcome to BIT Durg',
    },
    {
      src: img2,
      alt: 'Snow',
      caption: '38 Years of Excellence',
    },
    {
      src: img3,
      alt: 'Mountains',
      caption: '',
    },
    {
      src: img4,
      alt: 'Lights',
      caption: '',
    },
    {
      src: img5,
      alt: 'Woods',
      caption: '',
    },
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 3000; // 3 seconds
  const slideTimer = useRef(null);

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(slideTimer.current);
    };
  }, []);

  const startAutoSlide = () => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);
  };

  const prevSlide = () => {
    clearInterval(slideTimer.current);
    setCurrentSlide((currentSlide) => (currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    clearInterval(slideTimer.current);
    setCurrentSlide((currentSlide) => (currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1));
    startAutoSlide();
  };

  const handleKnowMore = () => {
    alert('More information about ' + slidesData[currentSlide].caption);
  };

  return (
    <div className="carousel-container">
      {slidesData.map((slide, index) => (
        <div
          className={`mySlides ${index === currentSlide ? 'fade' : ''}`}
          key={index}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <img src={slide.src} alt={slide.alt} />
          <div className="text">
            {slide.caption}
          
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;