import React, { useState } from 'react';

const PlantForm = ({ onAddPlant }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlant(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new plant"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default PlantForm;
