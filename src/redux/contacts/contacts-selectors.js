/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from 'reselect';

const getLoadind = state => state.loading;
const getFilter = state => state.contacts.filter;
const getConactsForm = state => state.contacts;
const getAllContacts = state => {
  const contacts = getConactsForm(state);
  return contacts.items;
};
//Составной-композитный селектор
// const getVisibleContact = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(text => {
//     console.log('Object.values(text)[0]', Object.values(text)[0]);
//     return Object.values(text)[0].toLowerCase().includes(normalizedFilter);
//   });
// };
// Мемоизация - (contacts, filter) - кэшируются эти два аргумента
const getVisibleContact = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(text => {
    // console.log('Object.values(text)[0]', Object.values(text)[0]);
    return Object.values(text)[0].toLowerCase().includes(normalizedFilter);
  });
});

export default {
  getConactsForm,
  getFilter,
  getVisibleContact,
  getLoadind, //adding
};
