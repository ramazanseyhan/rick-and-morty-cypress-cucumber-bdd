import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I open {string} page", (pageUrl) => {
  cy.visit(pageUrl);
});
