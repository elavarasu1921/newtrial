const { ApiSuccess } = require('../response/baseclass');

exports.signin = (req, res) => {
    console.log(req.body);
    ApiSuccess.success(res, req.body);
};
