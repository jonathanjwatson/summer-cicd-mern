import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewRestaurantForm from "./NewRestaurantForm";

afterEach(cleanup);

describe("NewRestaurantForm", () => {
  it("updates the restaurant name input value on change", () => {
    const { getByTestId } = render(<NewRestaurantForm />);
    const nameInput = getByTestId("restaurant-name");
    fireEvent.change(nameInput, { target: { value: "Taco Bell" } });
    expect(nameInput.value).toBe("Taco Bell");
  });

  it("updates the address input value on change", () => {
    const { getByTestId } = render(<NewRestaurantForm />);
    const addressInput = getByTestId("address");
    fireEvent.change(addressInput, { target: { value: "1234 Main Street" } });
    expect(addressInput.value).toBe("1234 Main Street");
  });

  it("updates the phone number input value on change", () => {
    const { getByTestId } = render(<NewRestaurantForm />);
    const phoneInput = getByTestId("phone-number");
    fireEvent.change(phoneInput, { target: { value: "555-555-5555" } });
    expect(phoneInput.value).toBe("555-555-5555");
  });

  it("updates the cuisine type input value on change", () => {
    const { getByTestId } = render(<NewRestaurantForm />);
    const cuisineInput = getByTestId("cuisine-type");
    fireEvent.change(cuisineInput, { target: { value: "Fast food" } });
    expect(cuisineInput.value).toBe("Fast food");
  });

});
