import React, { Component } from 'react';
import Rating from "./Rating";
import UserList from "./UserList";

class Sidebar extends Component {
  logout = e =>{
    localStorage.clear()
    window.location.reload(); 
  }
  render() {
    return (
      <div className='sidebar'>
        <button className='sidebar__button' onClick={this.logout}>Logout</button>
        <UserList users={this.props.users}/>
        <Rating users={this.props.users} messages={this.props.messages}/>
      </div>
    );
  }
}

export default Sidebar;