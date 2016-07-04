import messageApiConsumer from '../../api-consumers/message';
import validate from './validate';


export default async function create (services, data) {
  const messageApi = messageApiConsumer(services);

  const entity = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    content: data.content,
  };

  await validate(entity);

  return messageApi.createMessage(entity);
}
