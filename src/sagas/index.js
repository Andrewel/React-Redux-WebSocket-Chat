import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.from = params.username;
    params.socket.send(
      JSON.stringify({
        from: action.from, // localStorage.getItem('Username')
        message: action.message
      })
    );
  });
};

export default handleNewMessage;
