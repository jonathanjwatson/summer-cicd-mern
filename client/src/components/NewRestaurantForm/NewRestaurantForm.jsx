import React, { useState, useEffect } from "react";
import axios from 'axios';

  const NewRestaurantForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [data, setData] = useState(null);
  
  // Form onSubmit runs handleSubmit
  // handleSubmit updates data state
  // useEffect posts to /api/restaurants when data state is updated

  useEffect(() => {
    if(data === null) return //don't post on initial page load
    
     axios.post('http://localhost:3001/api/restaurants', data)
     .then(response => response.json())
     .then(data => {
       console.log('Success:', data);
     })
     .catch((error) => {
       console.error('Error:', error);
     });

  },[data])
  
  const handleSubmit = () => {
    setData({
      name: name,
      address: address,
      phone: phone,
      cuisine: cuisine,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input data-testid="restaurant-name" type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>

        <label className="form-label">Address</label>
        <input data-testid="address" type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>

        <label className="form-label">Phone</label>
        <input data-testid="phone-number" type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>

        <label className="form-label">Cuisine</label>
        <input data-testid="cuisine-type" type="text" className="form-control" value={cuisine} onChange={e => setCuisine(e.target.value)}/>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewRestaurantForm;
