import React from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ input, updateInput, sendMessage }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (input !== '') {
        sendMessage(input);
      }
    }
  };

  return (
    <div className="message-input">
      <textarea
        autoFocus
        type="text"
        onChange={updateInput}
        onKeyDown={handleKeyDown}
        value={input}
      />
    </div>
  );
};

MessageInput.defaultProps = {
  input: '',
};

MessageInput.propTypes = {
  input: PropTypes.string,
  updateInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
