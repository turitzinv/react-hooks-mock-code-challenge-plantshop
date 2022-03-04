import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ allPlants, handleAddingPlant, handleSearchFilter, search }) {
  return (
    <main>
      <NewPlantForm onAddingPlant={handleAddingPlant} />
      <Search onSearchFilter={handleSearchFilter} search={search} />
      <PlantList allPlants={allPlants} />
    </main>
  );
}

export default PlantPage;
