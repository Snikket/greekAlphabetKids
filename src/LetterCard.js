// src/LetterCard.js
import React from 'react';

const LetterCard = ({ name, letter, sound }) => {
  const playSound = () => {
    new Audio(sound).play();
  };

  return (
    <div className="letter-card" onClick={playSound}>
      <div className="letter">{letter}</div>
      <p>{name}</p>
    </div>
  );
};

export default LetterCard;
