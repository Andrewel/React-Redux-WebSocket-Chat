import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewMessage extends Component {
  sendMessage = e => {
    const {
      props: { addMessage, name }
    } = this;
    if (e.key === 'Enter' || e.type === 'click') {
     this.input.value === '' ?  console.log("Enter message!") : addMessage(name, this.input.value);
     this.input.value = '';
    }
  };

  render() {
    return (
      <div className='new-message'>
        <input
          className='new-message__input'
          onKeyPress={this.sendMessage}
          type='text'
          placeholder='Enter message...'
          ref={node => {
            this.input = node;
          }}
          required
        />
        <button className='new-message__button' onClick={this.sendMessage}>
          Send
        </button>
      </div>
    );
  }
}

AddNewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default AddNewMessage;
