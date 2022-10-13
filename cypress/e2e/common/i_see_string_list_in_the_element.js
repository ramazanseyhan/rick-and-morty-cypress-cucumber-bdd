import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I see {string} list in the {string}`, (args, selector) => {
  const list = args.split(",");

  list.forEach((element) => {
    cy.get(selector).contains(element).should("be.exist");
  });
});
