import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import { updateInput, sendMessage, switchInputMode, sendCommand } from './actions';

const mapStateToProps = ({ chat }) => ({
  input: chat.input,
  inputMode: chat.inputMode,
});

const mapDispatchToProps = {
  updateInput,
  sendMessage,
  switchInputMode,
  sendCommand,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
