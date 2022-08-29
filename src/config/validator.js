const Ajv = require('ajv');

const ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    removeAdditional: true,
});

module.exports = ajv;
