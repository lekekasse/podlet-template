export function podlet(req, res) {
    if (req.originalUrl.startsWith('/content')) {
      res.send(`Hello content!`);
      return;
    }
    
    if (req.originalUrl.startsWith('/fallback')) {
      res.send(`Hello fallback!`);
      return;
    }

    if (req.originalUrl.startsWith('/manifest.json')) {
      res.send(`Hello manifest!`);
      return;
    }

    res.status(404).send(`Not found!`);
};
