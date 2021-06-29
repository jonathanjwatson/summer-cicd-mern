import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Restaurant from "./Restaurant";

afterEach(cleanup);

const props = {
  name: "Olive Garden",
  address: "1313 Mockingbird Lane",
  phone: "888-888-8888",
  cuisine: "Italian",
};

describe("Restaurant", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Restaurant {...props} />);
    expect(getByText(props.name)).toBeTruthy();
    expect(getByText(props.address)).toBeTruthy();
    expect(getByText(props.phone)).toBeTruthy();
    expect(getByText(props.cuisine)).toBeTruthy();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Restaurant {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
