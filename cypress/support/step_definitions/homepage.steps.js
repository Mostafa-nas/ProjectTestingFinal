import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Automation Exercise homepage", () => {
  cy.visit("https://www.automationexercise.com");
});

When("I scroll to the bottom of the page", () => {
  cy.scrollTo("bottom");
});

When("I click the Products link", () => {
  cy.get("a[href='/products']").click();
});

Then("the footer should be visible", () => {
  cy.get("footer").should("be.visible");
});

Then("the footer should still be visible", () => {
  cy.get("footer").should("be.visible");
});

Then("the categories list should be visible", () => {
  cy.get(".category-products").should("be.visible");
});

Then("the Contact Us link should be visible and clickable", () => {
  cy.get("a[href='/contact_us']").should("be.visible").and("have.attr", "href").and("include", "/contact_us");
});

Then("I should be navigated to the Products page", () => {
  cy.url().should("include", "/products");
});

Then("the carousel slider should be visible", () => {
  cy.get("#slider-carousel").should("be.visible");
});

Then('the page title should contain {string}', (title) => {
  cy.title().should("include", title);
});
