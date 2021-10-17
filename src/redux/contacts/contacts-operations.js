/* eslint-disable import/no-anonymous-default-export */
import Api from '../../service/api';
// { getApiContact, addApiContact, deleteApiContact }
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

// axios.get('/contacts').then(response => response.data);

const fetchContact = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await Api.getApiContact();
    dispatch(fetchContSuccess(data));
  } catch (error) {
    dispatch(fetchContError(error));
    // console.error(error.message);
  }
};

const addContact = text => async dispatch => {
  //http  и по результату диспатчит синхронные экшны
  console.log('--------text', text);
  dispatch(addContactsRequest);
  const contItem = text;
  try {
    const data = await Api.addApiContact(contItem);
    dispatch(addContSuccess(data));
  } catch (error) {
    dispatch(addContError(error));
  }
};

const deleteContact = contId => async dispatch => {
  const id = Number(contId);
  console.log('id', id);
  //http  и по результату диспатчит синхронные экшны
  dispatch(deleteContactsRequest());
  try {
    await Api.deleteApiContact(id);
    dispatch(deleteContSuccess(id));
  } catch (error) {
    dispatch(deleteContError(error));
  }
};

export default {
  fetchContact,
  addContact,
  deleteContact,
};
