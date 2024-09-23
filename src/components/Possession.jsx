import React from 'react';

const Possession = ({ name }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        id={name.toLowerCase()} 
        name="category" 
        value={name}
      />
      <label htmlFor={name.toLowerCase()}>{name}</label>
    </div>
  );
};

export default Possession;
