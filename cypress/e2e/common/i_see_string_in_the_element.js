import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I see {string} in the {string}`, (text, selector) => {
  cy.get(selector).contains(text).should("be.exist");
});
