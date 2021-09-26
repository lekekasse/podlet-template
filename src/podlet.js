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
  res.status(200).podiumSend(`<h2>Hello world</h2>`);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).json(podlet);
});

export { app };
