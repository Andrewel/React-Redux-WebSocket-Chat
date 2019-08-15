import * as moment from 'moment'
import * as types from '../store/actionTypes';
import { addUser, messageReceived, usersList } from '../store/actions';

const setupSocket = (dispatch, username) => {
  // create connection to web-socket server
  const socket = new WebSocket('wss://wssproxy.herokuapp.com');

  socket.onopen = () => {
    console.log('Connection established')
    socket.send(JSON.stringify({
      from: username,
      message: `${username} has joined the chat`
    }))
  }

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    console.log(data)
    console.log(`${moment(data[0].time).format('llll')} ${data[0].from}:${data[0].message}`)
    /* data.forEach((element) => {
      console.log(moment(element.time).format('llll'))
    }) */
    dispatch(messageReceived(data[0].id, data[0].time, data[0].from, data[0].message))
    /* switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.from));
        break
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break
      case types.USERS_LIST:
        dispatch(usersList(data.users));
        break
      default:
        break
    } */
  }

  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`)
    } else {
      console.log('[close] Соединение прервано')
    }
  }

  socket.onerror = (error) => {
    console.log(`[error] ${error.message}`)
  }

  return socket;
}

export default setupSocket;