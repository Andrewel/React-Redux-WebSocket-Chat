import React, { Component } from 'react';
import PropTypes from 'prop-types';
import setupSocket from '../sockets';
import handleNewMessage from '../sagas';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: true,
      showError: false
    };
  }

  login = e => {
    const {
      props: { dispatch, addUser, login, saga }
    } = this;
    if (e.key === 'Enter' || e.type === 'click') {
      let username;
      localStorage.getItem('Username')
        ? (username = localStorage.getItem('Username'))
        : (username = this.nameInput.value);
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
          <div>
            {localStorage.getItem('Username') ? (
              <div className='login'>
                <span className='login__header'>
                  You logged as <strong>{localStorage.getItem('Username')}</strong>
                </span>
                <button className='login__button' onClick={this.login}>LogIn</button>
              </div>
            ) : (
              <div className='login'>
                <input
                  onKeyPress={this.login}
                  className='login__input'
                  placeholder='Nickname'
                  type='text'
                  ref={node => {
                    this.nameInput = node;
                  }}
                />
              </div>
            )}

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
