import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { connectUser } from './reducer';
import './index.css';

class Chat extends Component {
  componentDidMount() {
    this.props.connectUser();
  }

  render() {
    return (
      <div className="container">
        <UserList />
        <div className="message-screen">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  connectUser: PropTypes.func.isRequired,
};

export default connect(null, { connectUser })(Chat);
