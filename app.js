import config from './config/index.js';
import { app } from './src/podlet.js';

app.listen(config.get('port'));