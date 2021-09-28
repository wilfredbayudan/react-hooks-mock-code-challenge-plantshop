import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const url = "http://localhost:6001/plants";
    fetch(url)
      .then(res => res.json())
      .then(json => setPlantData(json))
      .catch(err => console.log(err));
  }, [])

  return (
    <main>
      <NewPlantForm plantData={plantData} setPlantData={setPlantData} />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plantData={plantData} searchInput={searchInput} />
    </main>
  );
}

export default PlantPage;
