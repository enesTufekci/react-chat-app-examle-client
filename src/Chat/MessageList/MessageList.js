import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render() {
    const { messages, user } = this.props;
    let messageList = [];
    let lastNick;
    messageList = messages.map((message) => {
      const { nick, id } = message.user;
      const direction = id !== user.id ? ' left' : '';
      let title = '';
      if (nick !== lastNick) {
        title = (
          <div key={message.date} className={`message-title${direction}`}>
            { id === user.id ? 'You' : nick }
          </div>
        );
      }
      lastNick = nick;

      return [
        title,
        <div
          className={`message ${message.type} ${direction}`}
          key={message.uuid}
          dangerouslySetInnerHTML={{ __html: message.text }}
        />,
      ];
    });
    return (
      <div className="message-list">
        { messageList }
      </div>
    );
  }
}

MessageList.defaultProps = {
  user: {},
  messages: [],
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};

export default MessageList;
