/* eslint no-undef: 0 */
/// <reference types="cypress" />

describe("home page with default data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("displays three restaurants", () => {
    cy.get("#restaurants-display").children().should("have.length", 3);
  });
  it("updates the input value", () => {
    const nameToTest = "Banana";
    cy.get("#name").type(nameToTest);
    cy.get("#name").should("have.value", nameToTest);
  });
  it("should submit the form", () => {
    cy.get("#name").type("Waffle House{enter}");
    cy.get("#restaurants-display").children().should("have.length", 4);
  });
});
