import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSignUpRequest,
  registerSignUpSuccess,
  registerSignUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentRequest,
  getCurrentSuccess,
  getCurrentError,
} from './auth-actions';

const initStartUserState = {
  name: '',
  email: '',
};
// авторизирую пользователя
const user = createReducer(initStartUserState, {
  [registerSignUpSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initStartUserState,
  [getCurrentSuccess]: (_, { payload }) => payload.user,
});
// вход пользователя
const logIn = createReducer(false, {
  [registerSignUpSuccess]: () => true,
  [registerSignUpError]: () => false,
  [logInSuccess]: () => true,
  [logInError]: () => false,
  [getCurrentSuccess]: () => true,
  [getCurrentError]: () => false,
  [logOutRequest]: () => false,
});
// токен при регистрации
const token = createReducer(null, {
  [registerSignUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});
// Патерн для корректной перезагрузки страницы
const refreshPaternUser = createReducer(false, {
  [getCurrentRequest]: () => true,
  [getCurrentSuccess]: () => false,
  [getCurrentError]: () => false,
});

// Обрабатываю ошибки
const error = createReducer(null, {
  [registerSignUpError]: (_, { payload }) => payload,
  [logInError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload,
  [getCurrentError]: (_, { payload }) => payload,
});

export default combineReducers({ user, logIn, token, refreshPaternUser, error });
