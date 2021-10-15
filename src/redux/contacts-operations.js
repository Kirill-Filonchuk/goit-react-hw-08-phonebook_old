/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContSuccess,
  fetchContError,
  addContactsRequest,
  addContSuccess,
  addContError,
  deleteContactsRequest,
  deleteContSuccess,
  deleteContError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

// axios.get('/contacts').then(response => response.data);

const fetchContact = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContSuccess(data));
  } catch (error) {
    dispatch(fetchContError(error));
  }
};

const addContact = text => dispatch => {
  //http  и по результату диспатчит синхронные экшны
  // console.log('--------text', text);

  const contItem = text;

  dispatch(addContactsRequest);

  axios
    .post('/contacts', contItem)
    .then(({ data }) => dispatch(addContSuccess(data)))
    .catch(error => dispatch(addContError(error)));
};

const deleteContact = contId => dispatch => {
  //for show PreLoader
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${contId}`)
    .then(() => dispatch(deleteContSuccess(contId)))
    .catch(error => dispatch(deleteContError(error)));
};

export default {
  fetchContact,
  addContact,
  deleteContact,
};

// {
//     {name,number },
//     id
// }

// До асинк
// const fetchContact = () => dispatch => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContSuccess(data)))
//     .catch(error => dispatch(fetchContError(error)));
// };
