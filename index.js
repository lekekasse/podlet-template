import Podlet from '@podium/podlet';
import express from 'express';

const app = express();

const podlet = new Podlet({
  name: 'myPodlet',
  version: '1.0.0',
  pathname: '/',
  development: true,
});

app.use(podlet.middleware());

app.get(podlet.content(), (req, res) => {
  if (res.locals.podium.context.locale === 'nb-NO') {
      return res.status(200).podiumSend('<h2>Hei verden</h2>');
  }
  res.status(200).podiumSend(`<h2>Hello world</h2>`);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).json(podlet);
});


/*
app.get('/content', (req, res, next) => {
  res.send(`Hello content!`);
});
*/

export { app as podletFn };

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