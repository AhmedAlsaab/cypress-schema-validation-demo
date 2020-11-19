import {
  getRandomFact,
  getFactById,
} from "./animal-facts-api-request-commands";

import { validateSchema } from "./validate-schema-command";

Cypress.Commands.add("getRandomFact", getRandomFact);
Cypress.Commands.add("getFactById", getFactById);

Cypress.Commands.add("validateSchema", validateSchema);
