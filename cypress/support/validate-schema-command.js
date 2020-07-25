
import Ajv from "ajv";
import { definitionsHelper } from "../schemas/schema-definitions";

const getSchemaError = (getAjvError) => 
{
    const index = 0;
    const propertyName = "dataPath";
    const errorMessage = "message";
    const schemaError = `Fieldname: ${getAjvError[index][propertyName]} is invalid. type ${getAjvError[index][errorMessage]}`;

    return cy.wrap(schemaError);
};

export const validateSchema = (schema, response) => 
{
    var ajv = new Ajv();

    var validate = ajv.addSchema(definitionsHelper).compile(schema);
    var valid = validate(response);
  
    if (!valid) 
    {
        getSchemaError(validate.errors).then((schemaError) => 
        {
            throw new Error(schemaError);
        });
    } 
    else 
    {
        cy.log("Schema validated!");
    }
  };