/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class Chat extends Component {
  render() {
    return (
      <div>
        <UserList />
        <div className="message-screen">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    );
  }
}

export default Chat;
