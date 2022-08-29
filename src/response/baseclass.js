class ApiError {
    constructor(code, err) {
        this.code = code;
        this.err = err;
    }
    static badRequest(err) {
        return new ApiError(400, err);
    }
    static unauthorized(err) {
        return new ApiError(401, err);
    }
    static internal(err) {
        return new ApiError(500, err);
    }
}

class ApiSuccess {
    constructor(res, data) {
        this.res = res;
        this.data = data;
    }
    static success = (res, data) =>
        res.status(200).json({ error: false, data });

    static created(res, data) {
        res.status(201).json({ error: false, data });
    }
}

exports.ApiError = ApiError;
exports.ApiSuccess = ApiSuccess;
