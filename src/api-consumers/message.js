import axios from 'axios';


export default function (services) {
  return {
    createMessage: createMessage.bind(this, services.message),
    detailMessage: detailMessage.bind(this, services.message),
  };
}

async function createMessage (url, body) {
  const { data } = await axios({
    method: 'post',
    url: `${url}/api/messages`,
    data: body,
  });

  return data;
}

async function detailMessage (url, id) {
  const { data } = await axios({
    url: `${url}/api/messages/${id}`,
  });

  return data;
}
