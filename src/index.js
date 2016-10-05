import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import api from './api';


export async function application (config) {
  const app = express();

  app.set('config', config.env);
  app.use(bodyParser.json());
  app.use(cors());

  api(app);

  return app;
}


export const start = (config) => new Promise(async resolve => {
  const app = await application(config);
  const { env: { http: { host, port } } } = config;

  app.listen(port, host, () => {
    /* eslint-disable no-console */
    console.info(`mersocarlin-api started at [ http://${host}:${port} ]`);

    resolve();
  });
});
