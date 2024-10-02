const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    const errorObject = {
        status: 500,
        message: 'Internal server error',
        err: err.message
    }
    res.status(500).send(errorObject);

    // Pass to next error handling middleware (optional)
    // next(err);
}

module.exports = errorHandlerMiddleware;
