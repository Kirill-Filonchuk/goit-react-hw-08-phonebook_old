/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './contacts-reducer';

const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });
// console.log(process.env.NODE_ENV);
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

let persistor = persistStore(store); //обертка над СТОРЕМ в кот обновляет Локал Стор

export default { store, persistor };

// // BLACKLIST
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['navigation'] // navigation will not be persisted
// };

// // WHITELIST
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['navigation'] // only navigation will be persisted
// };

//Persis
// const contacts = {
//     items: [],
//     filter: '',
// };

//without LS

// import { createStore, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

//with LS

// import { createStore, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts-reducer';
// const saveToLocalStorag = state => {
//   try {
//     localStorage.setItem('state', JSON.stringify(state));
//   } catch (e) {
//     console.error(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const stateStr = localStorage.getItem('state');
//     return stateStr ? JSON.parse(stateStr) : undefined;
//   } catch (e) {
//     console.error(e);
//     return undefined;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedStore = loadFromLocalStorage();

// //contactsReducer.items - массив контактов

// const store = createStore(rootReducer, persistedStore, composeWithDevTools());

// store.subscribe(() => {
//   saveToLocalStorag(store.getState());
// });
// export default store;
