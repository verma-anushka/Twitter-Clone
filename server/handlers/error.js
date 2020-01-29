// ERROR HANDLER 
// a generic function/middleware that responds a nicely formatted object with the status of the error

function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Something went wrong!"
        }
    });
}

module.exports = errorHandler;
