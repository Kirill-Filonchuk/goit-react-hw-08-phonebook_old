/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts.add', function prepare({ name, number }) {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts.delete');

const changeFilter = createAction('contacts.filter');

export default { addContact, deleteContact, changeFilter };
