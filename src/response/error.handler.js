const { ApiError } = require('./baseclass');

exports.errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
        const {
            code,
            err: { devMessage, userMessage },
        } = err;
        res.status(code).json({
            error: true,
            errorCode: code,
            devMessage: devMessage ?? 'Something went wrong..',
            userMessage: userMessage ?? 'Something went wrong..',
        });
        return;
    }
    res.status(500).json({
        error: true,
        err,
    });
};

// ANCHOR
