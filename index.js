import express from 'express';

const podlet = express();

podlet.get('/content', (req, res, next) => {
  res.send(`Hello content!`);
});

export const podlet;

/*
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
*/