export const getRandomFact = (animalType, factAmount = 1) => {
  cy.request({
    url: `/facts/random`,
    method: "GET",
    qs: {
      animal_type: animalType,
      amount: factAmount,
    },
  });
};

export const getFactById = (id) => {
  cy.request({
    url: `/facts/${id}`,
    method: "GET",
  });
};
