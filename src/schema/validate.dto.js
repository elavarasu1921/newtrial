const ajv = require('../config/validator');
const { ApiError } = require('../response/baseclass');

exports.validateDTO = (schema) => async (req, res, next) => {
    const validate = ajv.compile(schema);
    const isValid = validate(req.body);
    let errObj = {};
    if (isValid) return next();
    validate.errors.forEach((ele) => {
        errObj[ele.instancePath.slice(1)] = ele.message;
    });
    next(ApiError.badRequest({ devMessage: errObj }));
};
