import * as moment from 'moment'
import { messageReceived } from '../store/actions';

const setupSocket = (dispatch, username) => {
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
    dispatch(messageReceived(data[0].id, data[0].time, data[0].from, data[0].message))
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