import React, { Component } from "react";

class HelloClass extends Component {
  state = {
    name: "Jonathan",
  };

  componentDidMount() {
    console.log("This happened immediately after the component rendered.");
  }

  getTodaysDate = () => {
    console.log(Date.now());
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default HelloClass;