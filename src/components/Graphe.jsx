import React from 'react';
import image1 from './images/patrimoine-cresus-sur-quelques-annees.png';
import image2 from './images/patrimoine-cresus-sur-quelques-annees_obli.png';
import image3 from './images/patrimoine-cresus-sur-quelques-annees_immo.png';

const TextImageDisplay = () => {
  const texts = [
    "Texte aléatoire 1",
    "Texte aléatoire 2",
    "Texte aléatoire 3",
    "Texte aléatoire 4"
  ];

  const images = [image1, image2, image3];

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const randomText = getRandomElement(texts);
  const randomImage = getRandomElement(images);

  return (
    <div className="text-image-display">
      <h3>{randomText}</h3>
      <img
        src={randomImage}
        alt={`Image aléatoire - ${randomText}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default TextImageDisplay;
