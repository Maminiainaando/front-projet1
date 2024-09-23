import React, { useState } from 'react';
import Graphe from './Graphe';

export default function EntreeUtilisateur() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState('');
  const [content, setContent] = useState(null);
  const [selectedPossesseur, setSelectedPossesseur] = useState('');
  const [selectedPossessions, setSelectedPossessions] = useState([]);

  const loremIpsumTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!startDate || !endDate || startDate > endDate || !selectedPossesseur || selectedPossessions.length === 0) {
      setError('Veuillez entrer des dates valides, sélectionner un possesseur et choisir au moins une possession.');
      return;
    }

    const timeDiff = endDate - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    const randomContent = {
      loremIpsumText: loremIpsumTexts[Math.floor(Math.random() * loremIpsumTexts.length)],
      distance: { days: daysDiff, months: monthsDiff, years: yearsDiff }
    };

    setContent(randomContent);
    setError('');
  };

  const handleDateChange = (dateType, setDateFunc) => {
    const selectedDate = dateType;
    setDateFunc(selectedDate);

    if (startDate && endDate && startDate > endDate) {
      setError('La date de fin doit être postérieure à la date de début');
    } else {
      setError('');
    }
  };

  const handlePossessionChange = (event) => {
    const possession = event.target.value;
    setSelectedPossessions(prev => 
      event.target.checked ? [...prev, possession] : prev.filter(p => p !== possession)
    );
  };

  const possesseurs = [
    { name: "ilo" },
    { name: "cresus" },
    { name: "riche" }
  ];

  const possessions = [
    { name: "agrégat" },
    { name: "trésorerie" },
    { name: "immobilisations" },
    { name: "obligation" }
  ];

  return (
    <div className="entree-utilisateur">
      <h2>Formulaire d'entrée utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="possesseur">
          <label htmlFor="possesseur">Possesseur</label>
          <select
            name="possesseur"
            id="possesseur"
            onChange={(e) => setSelectedPossesseur(e.target.value)}
          >
            <option value="">Sélectionnez un possesseur</option>
            {possesseurs.map((possesseur) => (
              <option key={possesseur.name} value={possesseur.name}>
                {possesseur.name}
              </option>
            ))}
          </select>
        </div>
        <div className='possessions'>
          {possessions.map((possession, index) => (
            <label key={index}>
              <input 
                type="checkbox" 
                value={possession.name}
                onChange={handlePossessionChange} 
              />
              {possession.name}
            </label>
          ))}
        </div>
        <div className="date-projection">
          <div>
            <label htmlFor="start">Date de début</label>
            <input
              type="date"
              id="start"
              onChange={(e) => handleDateChange(e.target.valueAsDate, setStartDate)}
            />
          </div>
          <div>
            <label htmlFor="end">Date de fin</label>
            <input
              type="date"
              id="end"
              onChange={(e) => handleDateChange(e.target.valueAsDate, setEndDate)}
            />
            {error && <span className="error">{error}</span>}
          </div>
        </div>

        <button type="submit">Soumettre</button>
      </form>

      {content && (
        <div className="content-section">
          <h2>Contenu dynamique</h2>
          <Graphe content={content} possesseur={selectedPossesseur} possessions={selectedPossessions} />
        </div>
      )}
    </div>
  );
}
