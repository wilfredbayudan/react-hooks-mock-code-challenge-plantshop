import React, { useState } from "react";

function PlantCard({ id, image = 'https://via.placeholder.com/400', name, price }) {
  const [inStock, setInStock] = useState(true);

  function handleStockChange() {
    setInStock(!inStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
