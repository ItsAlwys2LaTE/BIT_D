import React from 'react';
import './Card.css';  

const Card = ({ logo, shortName, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={logo} alt={shortName} className="card-logo" />
      <div className="card-name">{shortName}</div>
    </div>
  );
};

export default Card;
