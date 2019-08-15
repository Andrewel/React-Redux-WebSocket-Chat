import React, { Component } from 'react';
import './scss/app.scss';
import { Chat } from './containers/Chat';
import { Sidebar } from "./containers/Sidebar";
import { AddNewMessage } from "./containers/AddNewMessage";
import { Login } from "./containers/Login";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Login dispatch={this.props.dispatch} saga={this.props.saga} />
        <Sidebar/>
        <div className='app__chatbox'>
          <Chat/>
          <AddNewMessage/>
        </div>
      </div>
    );
  }
}

export default App;
