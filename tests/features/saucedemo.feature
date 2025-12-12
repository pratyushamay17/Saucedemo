Feature: Purchase Product on SauceDemo
As a user, 
I want to be able to purchase a product on the SauceDemo website
So that I can complete my shopping experience.

Scenario Outline: Purchase a product successfully on SauceDemo
    Given I am on the SauceDemo login page
    And I enter "standard_user" as username and "secret_sauce" as password and click login
    Then I should be redirected to the products page
    When I add a "<product>" to the cart
    And I navigate to the cart page
    Then I should see the "<product>" in the cart
    When I checkout the cart
    Then I should see the checkout information page and enter "<firstname>" "<lastname>" "<postalcode>" and continue
    Then I should see the order overview page and finish the order
    Then I should see the order complete page

    Examples:
        | product | firstname | lastname | postalcode |
        | Sauce Labs Backpack|  John      | Doe      | 12345      |
        | Sauce Labs Bike Light|    Jane      | Smith    | 67890      |
