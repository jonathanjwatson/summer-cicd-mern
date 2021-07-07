import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import NewRestaurantForm from "./NewRestaurantForm";

afterEach(cleanup);

describe("NewRestaurantForm", () => {
  it("updates the name input value on change", () => {
    const { getByLabelText } = render(<NewRestaurantForm />);
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Waffle House" } });
    expect(nameInput.value).toBe("Waffle House");
  });

  it("updates the address input value on change", () => {
    const { getByLabelText } = render(<NewRestaurantForm />);
    const addressInput = getByLabelText("Address");
    fireEvent.change(addressInput, {
      target: { value: "1313 Mockingbird Lane" },
    });
    expect(addressInput.value).toBe("1313 Mockingbird Lane");
  });

  it("updates the phone input value on change", () => {
    const { getByLabelText } = render(<NewRestaurantForm />);
    const addressInput = getByLabelText("Phone");
    fireEvent.change(addressInput, {
      target: { value: "555-555-5555" },
    });
    expect(addressInput.value).toBe("555-555-5555");
  });

  it("updates the cuisine input value on change", () => {
    const { getByLabelText } = render(<NewRestaurantForm />);
    const addressInput = getByLabelText("Cuisine");
    fireEvent.change(addressInput, {
      target: { value: "Seafood" },
    });
    expect(addressInput.value).toBe("Seafood");
  });

  it("should call axios when the form submits", () => {
    // ARRANGE
    axios.post = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: true }));
    const { getByTestId } = render(<NewRestaurantForm />);
    const form = getByTestId("restaurant-form");
    // ACT
    fireEvent.submit(form);
    // ASSERT
    expect(axios.post).toHaveBeenCalled();
  });

  it("should call the getRestaurants prop when the form submits", async () => {
    // ARRANGE
    const props = {
      getRestaurants: jest.fn(),
    };
    axios.post = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: "banana" }));
    const { getByTestId } = render(<NewRestaurantForm {...props} />);
    const form = getByTestId("restaurant-form");
    // ACT
    await fireEvent.submit(form);
    // ASSERT
    await expect(props.getRestaurants).toHaveBeenCalled();
  });

  it("should wipe the input field values when the form submits", async () => {
    // ARRANGE
    axios.post = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: "banana" }));
    const { getByLabelText, getByTestId } = render(<NewRestaurantForm />);
    const form = getByTestId("restaurant-form");
    // ACT
    const nameInput = getByLabelText("Name");
    await fireEvent.change(nameInput, { target: { value: "Waffle House" } });
    await fireEvent.submit(form);
    // ASSERT

    await expect(nameInput.value).toBe("");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NewRestaurantForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
