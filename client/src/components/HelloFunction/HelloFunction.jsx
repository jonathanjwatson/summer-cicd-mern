import React, { useEffect, useState } from "react";

const HelloFunction = () => {
  const [state, setState] = useState({ name: "Jonathan" });

  useEffect(() => {
    console.log(
      "This will also happen immediately after the component is rendered."
    );
  }, []);

  const getTodaysDate = () => {
    console.log(Date.now());
  };

  return (
    <div>
      <h1>Hello {state.name}</h1>
    </div>
  );
};

export default HelloFunction;
