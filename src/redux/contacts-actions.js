/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

// синхронные Экшена
// pending
export const fetchContactsRequest = createAction('cont/fetchContRequest');
// fulfiled
export const fetchContSuccess = createAction('cont/fetchContSuccess');
// rejected
export const fetchContError = createAction('cont/fetchContError');

export const addContactsRequest = createAction('cont/addContRequest');
export const addContSuccess = createAction('cont/addContSuccess');
export const addContError = createAction('cont/addContError');

export const deleteContactsRequest = createAction('cont/deleteContRequest');
export const deleteContSuccess = createAction('cont/deleteContSuccess');
export const deleteContError = createAction('cont/deleteContError');

// export const deleteContact = createAction('contacts.delete');

export const changeFilter = createAction('contacts.filter');

// export default {addContactsRequest,addContSuccess,addContError,  addContact, deleteContact, changeFilter };

// dispatch({ type: 'cont/addContSuccess', payload: { data } })
// const addContact = createAction('contacts.add', function prepare({ name, number }) {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });
