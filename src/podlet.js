import Podlet from '@podium/podlet';
import express from 'express';

import config from '../config/index.js';

const app = express();

const podlet = new Podlet({
  name: config.get('name'),
  version: config.get('version'),
  pathname: '/',
  development: config.get('development'),
});

app.use(podlet.middleware());

app.get(podlet.content(), (req, res) => {
  res.status(200).podiumSend(`<h1>Hello from ${config.get('name')}</h1>`);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).json(podlet);
});

export { app };
