import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  sendMessage = (e) => {
    const {props: {addMessage, name}} = this;
    if (e.key === 'Enter' || e.type === 'click') {
     /*  addMessage(this.input.value, name); */
      this.input.value = ''
    }
  }

  render() {
    return (
      <div className='new-message'>
        <button
          className='new-message__button-logout'
          onClick={this.sendMessage}
        >
          Logout
        </button>
      </div>
    );
  }
}

Logout.propTypes = {
  addMessage: PropTypes.func.isRequired
}

export default Logout;