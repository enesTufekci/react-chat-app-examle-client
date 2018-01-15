import React from 'react';
import PropTypes from 'prop-types';
import './MessageInput.css';

const MessageInput = ({
  input, inputMode, updateInput, sendMessage, switchInputMode, sendCommand,
}) => {
  const handleKeyDown = (e) => {
    if (input === '') {
      switchInputMode('normal');
    }
    if (input === '/') {
      switchInputMode('command');
    }

    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (input !== '') {
        if (inputMode === 'command') {
          sendCommand(input);
        } else {
          sendMessage(input);
        }
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
  inputMode: 'normal',
};

MessageInput.propTypes = {
  input: PropTypes.string,
  inputMode: PropTypes.string,
  updateInput: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  switchInputMode: PropTypes.func.isRequired,
  sendCommand: PropTypes.func.isRequired,
};

export default MessageInput;
