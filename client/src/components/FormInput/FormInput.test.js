import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormInput from "./FormInput";

afterEach(cleanup);

describe("FormInput", () => {
  const props = {
    name: "Name",
    value: "",
    handleChange: jest.fn(),
    id: "restaurant-name",
  };

  it("calls handleChange on change", () => {
    const { getByLabelText } = render(<FormInput {...props} />);
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Waffle House" } });
    expect(props.handleChange).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<FormInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
