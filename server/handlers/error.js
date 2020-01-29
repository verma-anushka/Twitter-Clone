// ERROR HANDLER - function that responds with the status of the error

function errorHandler(error, request, response, next) {
    // middleware used after 404 error handler
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Something went wrong!"
        }
    });
}

module.exports = errorHandler;
