Cypress.Commands.add("verifyFooterVisible", () => {
  cy.get("footer").should("be.visible");
});

Cypress.Commands.add("verifySignupLoginLink", () => {
  cy.get("a[href='/login']")
    .should("be.visible")
    .and("contain.text", "Signup / Login");
});

Cypress.Commands.add("verifyCategoriesVisible", () => {
  cy.get(".category-products").should("be.visible");
});

Cypress.Commands.add("verifyContactUsLink", () => {
  cy.get("a[href='/contact_us']")
    .should("be.visible")
    .click();
  cy.url().should("include", "/contact_us");
});

Cypress.Commands.add("goToProductsPage", () => {
  cy.get("a[href='/products']").click();
  cy.url().should("include", "/products");
});

Cypress.Commands.add("verifyScrollToBottom", () => {
  cy.scrollTo("bottom");
  cy.get("footer").should("be.visible");
});

Cypress.Commands.add("verifyCarouselVisible", () => {
  cy.get("#slider-carousel").should("be.visible");
});

Cypress.Commands.add("addProductToCart", () => {
  cy.get(".product-image-wrapper").first().trigger("mouseover");
  cy.get(".add-to-cart").first().click();
  cy.get(".modal-content").should("contain.text", "Added!");
  cy.get(".close-modal").click();
});
