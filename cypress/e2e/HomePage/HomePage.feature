Feature: The Rick and Morty Home Page
  I want to open The Rick and Morty Api Home Page

  Scenario: Opening Rick and Morty Home Page
    Given I open "https://rickandmortyapi.com/" page
    Then I see "The Rick and Morty API" in the title
    Then I see "The Rick and Morty API" in the "selectors.homePage.gatsby"
    Then I see "Docs,About,support us" list in the "selectors.header"

  Scenario: Navigate to Rick and Morty Documentation Page from Home Page
    Given I open "https://rickandmortyapi.com/" page
    When I click "Docs" in the "header"
    Then I see "Documentation" in the title