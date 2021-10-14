import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

// const addContact = contItem => {
//   return axios.post('/contacts', contItem).then(({ data }) => data);
// };

// const deleteContact = contId => {
//   return axios.delete(`/contacts/${contId}`);
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts };
