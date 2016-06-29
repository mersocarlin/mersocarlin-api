import messageApiConsumer from '../../api-consumers/message';


export default async function create (services, data) {
  const messageApi = messageApiConsumer(services);

  const entity = {
    name: data.name,
    subject: data.subject,
    content: data.content,
  };

  return messageApi.createMessage(entity);
}
