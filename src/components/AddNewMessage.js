import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewMessage extends Component {
  ws = new WebSocket('wss://wssproxy.herokuapp.com')
  sendMessage = (e) => {
    const {props: {addMessage, name}} = this;
    if (e.key === 'Enter' || e.type === 'click') {
     /*  addMessage(this.input.value, name); */
      this.ws.send(
        JSON.stringify({ from: name, message: this.input.value })
      );
      this.input.value = ''
    }
  }

  render() {
    return (
      <div className='new-message'>
        <input
          className='new-message__input'
          onKeyPress={this.sendMessage}
          type='text'
          placeholder='Enter message...'
          ref = {(node) => {this.input = node}}
        />
        <button
          className='new-message__button'
          onClick={this.sendMessage}
        >
          Send
        </button>
      </div>
    );
  }
}

AddNewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
}

export default AddNewMessage;