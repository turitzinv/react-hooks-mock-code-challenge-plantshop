import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  const [stock, setStock] = useState(true);

  function inStock() {
    setStock(true);
  }

  function outOfStock() {
    setStock(false);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={outOfStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={inStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
