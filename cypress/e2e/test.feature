Feature: Homepage UI and Navigation Tests

  Scenario: Verify footer is visible
    Given I open the Automation Exercise homepage
    Then the footer should be visible

  Scenario: Verify footer remains visible after scroll
    Given I open the Automation Exercise homepage
    When I scroll to the bottom of the page
    Then the footer should still be visible

  Scenario: Verify categories list is visible
    Given I open the Automation Exercise homepage
    Then the categories list should be visible

  Scenario: Verify Contact Us link is visible and clickable
    Given I open the Automation Exercise homepage
    Then the Contact Us link should be visible and clickable

  Scenario: Verify Products page navigation works
    Given I open the Automation Exercise homepage
    When I click the Products link
    Then I should be navigated to the Products page

  Scenario: Verify carousel slider is visible
    Given I open the Automation Exercise homepage
    Then the carousel slider should be visible

  Scenario: Verify page title contains "Automation Exercise"
    Given I open the Automation Exercise homepage
    Then the page title should contain "Automation Exercise"


