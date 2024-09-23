import React from 'react';
import Possession from './Possession';

const PossessionType = () => {
  const possessions = [
    { name: "agrégat" },
    { name: "trésorerie" },
    { name: "immobilisation" },
    { name: "obligations" }
  ];

    return (
    <div>
      {possessions.map(({ name }, index) => (
        <Possession key={index} name={name} />
      ))}
    </div>
  );
};

export default PossessionType;
