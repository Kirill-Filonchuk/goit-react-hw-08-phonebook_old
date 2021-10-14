/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
// import actions from './contacts-actions';
import {
  addContactsRequest,
  addContSuccess,
  addContError,
  deleteContact,
  changeFilter,
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

export default {
  addContact,
};

// {
//     {name,number },
//     id
// }
