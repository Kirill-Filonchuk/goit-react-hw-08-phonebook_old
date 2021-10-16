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
// import {authReducer} from './auth'
//const authPersistConfig ={
// key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

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
    // auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store); //обертка над СТОРЕМ в кот обновляет Локал Стор

export default { store, persistor };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
///////////////////////////////////////////////////////////////////////////////////////////
// was in HW 07
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import contactsReducer from './contacts-reducer';

// const middleware = [...getDefaultMiddleware(), logger];
// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware,
//   // devTools: process.env.NODE_ENV === 'development',
// });

// export default store;

// const myMiddleware = store => next => action => {
//   console.log('hello', action);
//   next(action); //передает управление экшенм дальше по цепочке
// };
