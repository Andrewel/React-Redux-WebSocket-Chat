import { addMessage, addUser } from './actions';
import * as types from '../constants/actionTypes';

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'hi'
    const from = 'AV'
    const action = {
      type: types.ADD_MESSAGE,
      from,
      message,
    }
    expect(addMessage(from, message)).toEqual(action)
  })
})

describe('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'AV'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'AV2'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})