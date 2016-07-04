import restify from 'restify';

import api from './api';


async function application () {
  const app = restify.createServer({
    name: 'mersocarlin-api',
    version: '1.0.0',
  });

  app.use(restify.acceptParser(app.acceptable));
  app.use(restify.queryParser());
  app.use(restify.bodyParser());
  app.use(restify.CORS());

  api(app);

  return app;
}


export const start = (config) => new Promise(async resolve => {
  const app = await application();

  app.listen(config.http.port, () => {
    console.info(`${app.name} listening at ${app.url}`); // eslint-disable-line no-console

    resolve();
  });
});
