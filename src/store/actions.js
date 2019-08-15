import * as types from './actionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes()].map(x => {
    return x < 10 ? `0${x}` : x
  }).join(':');
  return time;
}

export const addMessage = (message, from) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  from,
  time: getTime()
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