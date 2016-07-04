import { config } from '../../../config/env';
import * as messageService from '../../services/message';

export async function create (req, res) {
  res.send(
    201,
    await messageService.create(
      config.services,
      req.body
    )
  );
}
