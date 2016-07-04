import * as message from './message';


const wrap = fn => (...args) => fn(...args).catch(args[2]);


export default (app) => {
  app.post('api/messages', wrap(message.create));

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(err.stack || err); // eslint-disable-line no-console

    if (err) {
      res.sendStatus(500);
    }
  });
};
