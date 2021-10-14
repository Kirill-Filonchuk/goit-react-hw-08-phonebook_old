import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import {
  addContactsRequest,
  addContSuccess,
  addContError,
  deleteContactsRequest,
  deleteContSuccess,
  deleteContError,
  changeFilter,
} from './contacts-actions';
// import initialContact from '../data/start-data.json';...initialContact

// console.log('actions.deleteContact.type', actions.deleteContact.type);

const items = createReducer([], {
  [addContSuccess]: (state, { payload }) => [...state, payload],
  [deleteContSuccess]: (state, action) => state.filter(con => con.id !== action.payload),
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContSuccess]: () => false,
  [addContError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContSuccess]: () => false,
  [deleteContError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
