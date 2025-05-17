// cypress/support/pages/HomePage.js
class HomePage {
    // Get page title
    getTitle() {
      return cy.title();
    }
  
    // Footer element
    getFooter() {
      return cy.get("footer.footer-widget");
    }
  
    // Signup / Login link
    getSignupLoginLink() {
      return cy.get('a[href="/login"]');
    }
  
    // Scroll to bottom
    scrollToBottom() {
      return cy.scrollTo('bottom');
    }
  
    // Categories section visible
    getCategoriesList() {
      return cy.get('.left-sidebar .panel-group');
    }
  
    // Contact Us link
    getContactUsLink() {
      return cy.get('a[href="/contact_us"]');
    }
  
    // Products page link
    getProductsLink() {
      return cy.get('a[href="/products"]');
    }
  
    // Carousel slider element
    getCarousel() {
      return cy.get('#slider-carousel');
    }
  }
  
  export default HomePage;
  