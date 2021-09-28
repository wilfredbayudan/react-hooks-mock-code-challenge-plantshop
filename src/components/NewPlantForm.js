import React, { useState } from "react";

function NewPlantForm({ plantData, setPlantData }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function postNewPlant(plantObject) {
    const url = "http://localhost:6001/plants";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(plantObject)
    })
      .then(res => res.json())
      .then(json => {
        setPlantData([
          ...plantData,
          json
        ])
      })
      .catch(err => console.log(err))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitted`);
    postNewPlant(formData);
    setFormData({
      name: '',
      image: '',
      price: ''
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
