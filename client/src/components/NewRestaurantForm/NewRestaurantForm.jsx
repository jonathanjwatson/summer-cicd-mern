import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import axios from "axios";

const NewRestaurantForm = ({ getRestaurants }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cuisine, setCuisine] = useState("");

  // TODO: When I submit the form
  // 1. Make an API call to send the data.
  // 2. if the call is successful, clear the form fields.
  // 3. If the call is successful, use the prop method to retrieve all restaurants.

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/restaurants", { name, address, phone, cuisine })
      .then((response) => {
        console.log(response.data);
        setName("");
        setAddress("");
        setPhone("");
        setCuisine("");
        getRestaurants();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="restaurant-form">
      <FormInput value={name} handleChange={setName} name="Name" id="name" />
      <FormInput
        value={address}
        handleChange={setAddress}
        name="Address"
        id="restaurant-address"
      />
      <FormInput
        value={phone}
        handleChange={setPhone}
        name="Phone"
        id="restaurant-phone"
      />
      <FormInput
        value={cuisine}
        handleChange={setCuisine}
        name="Cuisine"
        id="restaurant-cuisine"
      />
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewRestaurantForm;
