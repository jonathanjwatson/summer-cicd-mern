import React from "react";

const FormInput = ({ name, value, handleChange, id }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {name}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        name={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};


export default FormInput;
