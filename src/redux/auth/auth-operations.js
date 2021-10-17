import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// https://connections-api.herokuapp.com/users/signup

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*/users/signup
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
// const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
//users/signup
const register = credentials => async dispatch => {
  dispatch(registerSignUpRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    console.log('auth-op-Reg', data);
    dispatch(registerSignUpSuccess(data));
  } catch (error) {
    dispatch(registerSignUpError(error));
    console.error(error.message);
  }
};
//////////////////////////////////////////////////////////////////////////////
/*/users/login
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
// const login = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
const login = credentials => async dispatch => {
  dispatch(logInRequest());
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log('auth-op-LogIN', data);
    dispatch(logInSuccess(data));
  } catch (error) {
    dispatch(logInError(error));
    console.error(error.message);
  }
};
///////////////////////////////////////////////////////////////////////////////
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
// const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

const logout = credentials => async dispatch => {
  dispatch(logOutRequest());
  try {
    const { data } = await axios.post('auth/logout', credentials);
    token.unset(data.token);
    console.log('auth-op-LogOUT', data);
    dispatch(logOutSuccess(data));
  } catch (error) {
    dispatch(logOutError(error));
    console.error(error.message);
  }
};
/////////////////////////////////////////////////////////////////////////////
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
// const getCurrendtUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     console.log('Токена нет, уходим из fetchCurrentUser');
//     return thunkAPI.rejectWithValue();
//   }

//   token.set(persistedToken);
//   try {
//     const { data } = await axios.get('/users/current');
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

const getCurrentUser = () => async (dispatch, getState) => {
  //http  и по результату диспатчит синхронные экшны
  console.log('getCurrentUser', getState);

  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(getCurrentRequest());
  try {
    const { data } = await axios.get('/users/current');
    dispatch(getCurrentSuccess(data));
  } catch (error) {
    dispatch(getCurrentError(error));
    console.error(error.message);
  }
};
const operations = {
  register,
  logout,
  login,
  getCurrentUser,
};
export default operations;
