import * as messageService from '../../services/message';


export async function create (req, res) {
  res
    .status(201)
    .send(
      201,
      await messageService.create(
        req.app.get('config').services,
        req.app.get('config').keys,
        req.body
      )
    );
}
