import * as moment from 'moment'
import React from 'react';
import PropTypes from 'prop-types';

const Message = ({time, from, message}) => {
  let m
  from === localStorage.getItem('Username') ? m = 'message2' : m = 'message'
  return (
    <p className={m}>
      <i className={`${m}__time`}>{moment(time).format('LT')}</i> <i className={`${m}__author`}>{from}</i>: {message}
    </p> 
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default Message;