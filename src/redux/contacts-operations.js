/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import {
  addContactsRequest,
  addContSuccess,
  addContError,
  changeFilter,
  deleteContactsRequest,
  deleteContSuccess,
  deleteContError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = text => dispatch => {
  //http  и по результату диспатчит синхронные экшны
  console.log('--------text', text);

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
  addContact,
  deleteContact,
};

// {
//     {name,number },
//     id
// }
