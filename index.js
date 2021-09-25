exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
};

exports.content = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello content!';
  res.status(200).send(message);
};

exports.fallback = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello fallback!';
  res.status(200).send(message);
};