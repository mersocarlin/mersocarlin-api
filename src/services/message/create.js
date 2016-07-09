import messageApiConsumer from '../../api-consumers/message';
import validate from './validate';


export default async function create (services, keys, data) {
  const messageApi = messageApiConsumer(services, keys);

  const entity = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    content: data.content,
  };

  await validate(entity);

  return messageApi.createMessage(entity);
}
