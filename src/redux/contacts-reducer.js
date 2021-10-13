import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import actions from './contacts-actions';
import initialContact from '../data/start-data.json';

// console.log('actions.deleteContact.type', actions.deleteContact.type);

const items = createReducer([...initialContact], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) => state.filter(con => con.id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// //was
// const items = (state = [...initialContact], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(con => con.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (filter = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return filter;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
