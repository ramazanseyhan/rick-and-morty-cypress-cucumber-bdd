import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I click {string} in the {string}", (element, wrapper) => {
  cy.get(wrapper).contains(element).click();
});
