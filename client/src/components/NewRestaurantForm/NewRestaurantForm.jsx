import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";

const NewRestaurantForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <form>
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
