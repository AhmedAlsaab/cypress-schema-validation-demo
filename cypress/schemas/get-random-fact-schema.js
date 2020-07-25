export const getRandomFactSchema = {

    $id: "randomFactSchema",
    type: "object",
    properties:
    {
        createdAt:
        {
            $ref: "customDefinitions#/definitions/dateTime"
        },
        deleted:
        {
            type: "boolean"
        },
        text:
        {
            type: "string",
        },
        source:
        {
            type: "string",
            enum: ["api", "user"]
        },
        status:
        {
            type: "object",
            properties:
            {
                sentCount:
                {
                    type: "number"
                },
                verified:
                {
                    type: "boolean"
                }
            }
        },
        type:
        {
            /**
             * can expand enum further for more expected animals
             */
            type: "string",
            enum: ["cat", "horse", "dog"]
        },
        updatedAt:
        {
            $ref: "customDefinitions#/definitions/dateTime"
        },
        used:
        {
            type: "boolean"
        },
        user:
        {
            type: "string"
        },
        "__v":
        {
            type: "number"
        },
        "_id":
        {
            type: "string"
        }
    },

    required: ["_id", "deleted", "text"] 
}