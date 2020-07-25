export const getRandomFact = (animalType, amount = 1) => 
{
    cy.request
    (
        {
            url: `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${amount}`,
            method: "GET"
        }
    );
};

export const getFactById = (id) =>
{
    cy.request
    (
        {
            url: `https://cat-fact.herokuapp.com/facts/${id}`,
            method: "GET"
        }
    );
};