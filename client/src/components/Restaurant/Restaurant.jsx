import React from "react";
import PropTypes from "prop-types";

const Restaurant = ({ name, address, phone, cuisine }) => {
  return (
    <div className="col-sm-4">
      <h2 className="text-center">{name}</h2>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{cuisine}</p>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  cuisine: PropTypes.string,
};

export default Restaurant;
