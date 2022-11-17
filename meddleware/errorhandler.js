const errorhandler = (err, req, res, next) => {
  res.send(err.message);
};

module.exports = errorhandler;
