import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, searchInput }) {

  function plantMap(plant) {
    return <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} />;
  }

  const renderPlants = searchInput.length > 0 ? 
  plantData.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase())).map(plant => plantMap(plant)) : 
  plantData.map(plant => plantMap(plant));

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
