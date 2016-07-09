import meaningError from 'meaning-error-middleware';


import * as message from './message';


const wrap = fn => (...args) => fn(...args).catch(args[2]);


export default (app) => {
  app.post('/api/messages', wrap(message.create));

  app.use(meaningError);
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    if (err && err.data) {
      res
        .status(err.data.status_code)
        .send(err.data);
    } else {
      res.sendStatus(500);
    }
  });
};
