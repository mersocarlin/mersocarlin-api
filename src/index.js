import express from 'express';
import bodyParser from 'body-parser';

import api from './api';


async function application (config) {
  const app = express();

  app.set('config', config);
  app.use(bodyParser.json());

  api(app);

  return app;
}


export const start = (config) => new Promise(async resolve => {
  const app = await application(config);
  app.listen(config.http.port, config.http.host, () => {
    /* eslint-disable no-console */
    console.info(`mersocarlin-api started at [ http://${config.http.host}:${config.http.port} ]`);

    resolve();
  });
});
