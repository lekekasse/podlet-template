import convict from 'convict';
import convictWithValidator from 'convict-format-with-validator';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
convict.addFormats(convictWithValidator);

let pack = {};
try {
    pack = JSON.parse(fs.readFileSync(join(__dirname, '../package.json')));
} catch (error) {
    /* empty */
}

const conf = convict({
    name: {
        format: String,
        doc: 'Name of the application',
        default: pack.name.replace('@finn-no/', ''),
        env: 'NAME',
    },
    version: {
        format: String,
        default: Date.now().toString(),
        env: 'VERSION',
    },
    env: {
        format: ['local', 'dev', 'prod'],
        default: 'local',
        env: 'NODE_ENV',
    },
    development: {
        format: Boolean,
        default: false,
    },
    logLevel: {
        format: ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'SILENT'],
        default: 'WARN',
        env: 'LOG_LEVEL',
        arg: 'log-level',
    },
    port: {
        format: 'port',
        doc: 'The server port',
        default: 8080,
        env: 'PORT',
        arg: 'port',
    },
});

const env = conf.get('env');
conf.loadFile(`${__dirname}/config.${env}.json`);
conf.validate();

export default conf;
