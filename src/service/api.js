import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

async function getApiContact() {
  const { data } = await axios.get('/contacts');
  return { data };
}

async function addApiContact(contItem) {
  const { data } = await axios.post('/contacts', contItem);
  return data;
}

async function deleteApiContact(contId) {
  const { data } = await axios.delete(`/contacts/${contId}`);
  return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getApiContact, addApiContact, deleteApiContact };
