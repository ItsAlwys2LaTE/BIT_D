import React from 'react';
import Card from './Card'; // Adjust the import path as necessary
import img1 from '../../assets/images/nav/naac-img.png'; // Import all the images
import img2 from '../../assets/images/nav/nba-img.png';
import img3 from '../../assets/images/nav/iso-2015-img.png';
import img4 from '../../assets/images/nav/iso-9001-img.png';

const CardContainer = () => {
  const cardsData = [
    {
      logo: img1,  
      shortName: 'NAAC',
      backgroundColor: '#ff9999',  
    },
    {
      logo: img2,  
      shortName: 'NBA',
      backgroundColor: '#99ff99', 
    },
    {
      logo: img3,  
      shortName: 'ISO 2015',
      backgroundColor: '#9999ff',  
    },
    {
      logo: img4,  
      shortName: 'ISO 9001',
      backgroundColor: '#ffff99',  
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          shortName={card.shortName}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  );
};

export default CardContainer;
