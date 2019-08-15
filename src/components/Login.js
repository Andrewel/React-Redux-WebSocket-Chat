import React, { Component } from 'react';
import PropTypes from 'prop-types';
import setupSocket from '../sockets';
import handleNewMessage from '../sagas';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      /* showLoginForm: localStorage.getItem('Username') ? false : true, */
      showLoginForm: true,
      showError: false
    };
  }

  login = e => {
    const {
      props: { dispatch, addUser, login, saga }
    } = this;
    if (e.key === 'Enter') {
      let username
      localStorage.getItem('Username') ? username = localStorage.getItem('Username') : username = this.nameInput.value;
      localStorage.setItem('Username', username);
      this.setState(username ? { showLoginForm: false } : { showError: true });
      if (username) {
        addUser(username);
        login(username);
        const socket = setupSocket(dispatch, username);
        saga.run(handleNewMessage, { socket, username });
      }
    }
  };

  render() {
    const {
      state: { showLoginForm, showError }
    } = this;

    return (
      <div>
        {showLoginForm ? (
          <div className='login'>
            <span className='login__header'>Your Nickname</span>
            <input
              onKeyPress={this.login}
              className='login__input'
              placeholder='Name'
              type='text'
              ref={node => {
                this.nameInput = node;
              }}
            />
            {showError ? (
              <span className='login__error'>Error login</span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default Login;
