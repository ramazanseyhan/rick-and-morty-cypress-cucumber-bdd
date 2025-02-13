import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { get } from "lodash";

Then(`I see {string} list in the {string}`, (args, fixtureElement) => {
  const list = args.split(",");
  const [fileName, ...keys] = fixtureElement.split(".");

  cy.fixture(`${fileName}.json`).then((selectors) => {
    const objectValue = get(selectors, keys);

    list.forEach((element) => {
      cy.get(objectValue).contains(element).should("be.exist");
    });
  });
});
