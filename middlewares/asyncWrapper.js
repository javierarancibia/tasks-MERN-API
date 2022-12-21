
// Middleware to instantiate the TRY-CATCH structure s it doesnt repeat in every view of the controller. Its optional
const asyncWrapper = fn => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next (error) // It passes the error to the express builtin error handler
        }
    }
}

module.exports = asyncWrapper