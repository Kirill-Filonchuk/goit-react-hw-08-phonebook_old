import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import {
  addContactsRequest,
  addContSuccess,
  addContError,
  deleteContact,
  changeFilter,
} from './contacts-actions';
// import initialContact from '../data/start-data.json';...initialContact

// console.log('actions.deleteContact.type', actions.deleteContact.type);

const items = createReducer([], {
  [addContSuccess]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, action) => state.filter(con => con.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
