exports.registerSchema = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            minLength: 3,
            maxLength: 15,
        },
        lastName: { type: 'string', default: 'Ramachandran' },
        age: { type: 'integer', maximum: 30 },
        password: { type: 'string' },
    },
    required: ['lastName'],
    additionalProperties: false,
};
