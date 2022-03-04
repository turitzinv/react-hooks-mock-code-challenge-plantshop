import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [allPlants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  function handleAddingPlant(newPlant) {
    setPlants([...allPlants, newPlant]);
  }

  function handleSearchFilter(searchedPlant) {
    setSearch(searchedPlant);
  }

  function filteredPlants() {
    if (search.length > 0) {
      return allPlants.filter((plant) => plant.name.includes(search));
    } else {
      return allPlants;
    }
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        allPlants={filteredPlants()}
        handleAddingPlant={handleAddingPlant}
        handleSearchFilter={handleSearchFilter}
        search={search}
      />
    </div>
  );
}

export default App;
