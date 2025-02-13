import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { get } from "lodash";

Then(`I see {string} in the {string}`, (text, fixtureElement) => {
  const [fileName, ...keys] = fixtureElement.split(".");

  cy.fixture(`${fileName}.json`).then((selectors) => {
    const objectValue = get(selectors, keys);

    cy.get(objectValue).contains(text).should("be.exist");
  });
});
