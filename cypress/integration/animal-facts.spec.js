/// <reference types="Cypress" />

import { getRandomFactSchema } from "../schemas/get-random-fact-schema";

describe("Facts Endpoint", () => {
  it("Gets a random cat fact", () => {
    cy.getRandomFact("cat").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");

      cy.validateSchema(getRandomFactSchema, response.body);
    });
  });

  it("Gets a fact by Id", () => {
    cy.getFactById("591f9854c5cbe314f7a7ad33").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq("OK");

      cy.validateSchema(getRandomFactSchema, response.body);
    });
  });
});
