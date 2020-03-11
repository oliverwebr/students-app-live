module.exports = (req, res, next) => {
  // Log request method and original url
  console.log(`${req.method} on ${req.originalUrl}`);
  console.log(req.body);

  next();
};
