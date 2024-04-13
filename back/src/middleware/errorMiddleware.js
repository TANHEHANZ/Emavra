function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  const message = err.message || "Error interno del servidor";
  const status = err.statusCode || 500;

  res.status(status).json({ message });
}

module.exports = errorHandler;

