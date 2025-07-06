class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
};

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
};

module.exports = {
  NotFoundError,
  ValidationError,
  notFoundHandler,
  errorHandler,
};
