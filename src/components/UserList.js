import React, { Component } from 'react';
import PropTypes from "prop-types";

class UserList extends Component {
  render() {
    const {props:{users}} = this

    return (
      <div className='user-list'>
        <h3 className='user-list__header'>List of users:</h3>
        <ul className='user-list__list'>
          {users.map(user => (
            <span className='user-list__item' key={user.id}>{user.name}</span>
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;