import React, { useEffect, useState } from "react";
import axios from "axios";
import Restaurant from "./components/Restaurant/Restaurant";
import NewRestaurantForm from "./components/NewRestaurantForm/NewRestaurantForm";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get("/api/restaurants")
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">Summer CICD Restaurants</h1>
        </div>
      </div>
      <div className="row">
        {restaurants.map((restaurant) => (
          <Restaurant {...restaurant} key={restaurant._id} />
        ))}
      </div>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <h2 className="text-center">Create New Restaurant</h2>
          <NewRestaurantForm getRestaurants={getRestaurants} />
        </div>
      </div>
    </div>
  );
}

export default App;
