import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ allPlants }) {
  const entirePlantList = allPlants.map((plant) => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  ));

  return (
    <ul className="cards">{entirePlantList}</ul>
  );
}

export default PlantList;
