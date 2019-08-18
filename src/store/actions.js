import * as types from '../constants/actionTypes';

let nextUserId = 0;

export const addMessage = (from, message) => ({
  type: types.ADD_MESSAGE,
  from,
  message,
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (id, time, from, message) => ({
  type: types.MESSAGE_RECEIVED,
  id,
  time,
  from,
  message
})

export const usersList = users => ({
  type: types.USERS_LIST,
  users
})

export const login = name => ({
  type: types.LOGIN,
  name
})