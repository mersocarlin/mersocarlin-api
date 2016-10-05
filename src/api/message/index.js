import * as messageService from '../../services/message';


export default {
  create: create.bind(this),
};

export async function create (req, res) {
  res
    .status(201)
    .send(
      await messageService.create(
        req.app.get('config').services,
        req.app.get('config').keys,
        req.body
      )
    );
}
