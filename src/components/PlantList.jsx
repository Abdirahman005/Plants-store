import React from 'react';

const PlantList = ({ plants, onMarkSoldOut }) => {
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id} style={{ marginBottom: '10px' }}>
          <h3 style={{ textDecoration: plant.soldOut ? 'line-through' : 'none' }}>
            {plant.name}
          </h3>
          <button onClick={() => onMarkSoldOut(plant.id)}>
            {plant.soldOut ? 'Sold Out' : 'Mark as Sold Out'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
