describe("Automation Exercise - Home Page Tests (POM + Custom Commands)", () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it('1. Page title contains "Automation"', () => {
    cy.checkPageTitle("Automation");
  });

  it("2. Logo is visible", () => {
    cy.verifyLogoVisible();
  });

  it("3. Navigation bar is visible", () => {
    cy.verifyNavBarVisible();
  });

  it("4. Search bar is present", () => {
    cy.verifySearchBarExists();
  });
  cy.wait(4000)

  it("5. Products link is visible and correct", () => {
    cy.verifyProductsLink();
  });
  cy.wait(4000)

  it("6. Signup/Login link is visible and correct", () => {
    cy.verifySignupLoginLink();
  });
});

