# cypress-ajv-demo
Automated API tests with Cypress and Ajv to validate response schemas

## About

This project uses Cypress to send automated API requests to the free publicly hosted [cat facts API](https://alexwohlbruck.github.io/cat-facts/) and runs basic assertions but also 
validates the response schema returned from the API. The purpose of this project is to demonstrate how to get schema validation going alongside your automated API tests. 

This project validates a very basic schema, so to learn more on schema validation and how to validate complex JSON schemas you should checkout the Ajv docs [here](https://github.com/ajv-validator/ajv), and JSON schemas [here](https://json-schema.org/). 

## Setup

Clone the repo down and get into the project's root directory, then:

```bash
npm install
```

```bash
npm run test
```
