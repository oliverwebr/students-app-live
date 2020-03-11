module.exports = (req, res, next) => {
  console.log(`${req.method} on ${req.originalUrl}`);
  console.log(req.body);

  next();
};
