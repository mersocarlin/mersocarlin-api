import axios from 'axios';


export default function (services, keys) {
  return {
    createMessage: createMessage.bind(this, services.message, keys.message),
  };
}

async function createMessage (url, key, body) {
  const { data } = await axios({
    headers: {
      'x-client-id': key,
    },
    method: 'post',
    url: `${url}/api/messages`,
    data: body,
  });

  return data;
}
