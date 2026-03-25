function notFoundHandler(req, res, next) {
  const error = new Error(`Route ${req.originalUrl} not found`)
  error.status = 404
  next(error)
}

function errorHandler(err, req, res, _next) {
  const statusCode = err.status || 500
  const payload = {
    message: err.message || 'Unexpected error',
  }

  if (req.app.get('env') !== 'production' && err.stack) {
    payload.stack = err.stack
  }

  res.status(statusCode).json(payload)
}

module.exports = { notFoundHandler, errorHandler }
