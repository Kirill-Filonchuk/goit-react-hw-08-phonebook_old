import { createAction } from '@reduxjs/toolkit';

//
export const registerSignUpRequest = createAction('cont/registerRequest');
export const registerSignUpSuccess = createAction('cont/registerSuccess');
export const registerSignUpError = createAction('cont/registerError');

export const logInRequest = createAction('cont/logInRequest');
export const logInSuccess = createAction('cont/logInSuccess');
export const logInError = createAction('cont/logInError');

export const logOutRequest = createAction('cont/logOutRequest');
export const logOutSuccess = createAction('cont/logOutSuccess');
export const logOutError = createAction('cont/logOutError');

export const getCurrentRequest = createAction('cont/getCurrentRequest');
export const getCurrentSuccess = createAction('cont/getCurrentSuccess');
export const getCurrentError = createAction('cont/getCurrentError');
