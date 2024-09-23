import React from 'react';

const Graphe = ({ content, possesseur, possessions }) => {
  const imagesPossesseurs = {
    cresus: {
      trésorerie: ["/patrimoine-cresus-sur-quelques-annees_treso.png"],
      obligation: ["/patrimoine-cresus-sur-quelques-annees_obli.png"],
      immobilisations: ["/patrimoine-cresus-sur-quelques-annees_immo.png"]
    },
    riche: {
      trésorerie: ["/patrimoine-riche-sur-quelques-annees_treso.png"],
      obligation: ["/patrimoine-riche-sur-quelques-annees_obli.png"]
    },
    ilo: {
      agrégat: ["/patrimoine-etudiant-sur-quelques-annees.png"],
      trésorerie: ["/patrimoine-etudiant-sur-quelques-mois.png"],
      immobilisations: ["/patrimoine-etudiant-sur-quelques-jours.png"]
    }
  };

  const getRandomImage = (possesseur, possession) => {
    const images = imagesPossesseurs[possesseur]?.[possession] || [];
    return images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;
  };

  const renderPossessionItem = (possession, index) => (
    <div key={index}>
      <p>{possession}</p>
      <img
        src={getRandomImage(possesseur, possession)}
        alt={`Image pour ${possesseur} avec ${possession}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );

  return (
    <div className="content-display">
      <h3>{content.loremIpsumText}</h3>
      <p>
        Distance: {content.distance.days} jours, {content.distance.months} mois, {content.distance.years} années
      </p>
      {possessions.map(renderPossessionItem)}
    </div>
  );
};

export default Graphe;
