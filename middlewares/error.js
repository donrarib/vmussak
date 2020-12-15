module.exports = (err, req, res, next) => {
  res.status(500).json({
    error: "ocorreu um erro não esperado",
    message: err.message
  });

  next();
}
