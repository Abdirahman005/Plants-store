import React, { useState } from 'react';
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddPlant = (name) => {
    setPlants([
      ...plants,
      { id: Date.now(), name, soldOut: false },
    ]);
  };

  const handleMarkSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Plant Store</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onMarkSoldOut={handleMarkSoldOut} />
    </div>
  );
};

export default App;
